import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import BillCard from './BillCard';


class AllBills extends Component {

  constructor(){
    super();
    this.state = {
      errors: '',
      bills: []
    }
  }

  componentWillMount(){
    this._fetchBills();
  }

  _fetchBills = async () => {
    try {
      const res = await axios.get('/houses/${id}/bills');
      const bills = res.data;
      this.setState({bills});
    } catch (err) {
      this.setState({error: err})
    }
  }

  render() {
    return (
      
      <div>      
        <h5>"Bills, Bills, Bills" -Destiny's Child</h5>
        {this.state.bills.map((bill) => (
          <BillCard key={bill.id} bill={bill}/>)
        )}
      </div>
    );
  }
}

export default AllBills;