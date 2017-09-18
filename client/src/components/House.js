import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import AllBills from './AllBills';
import AllUsers from './AllUsers';
import BillCard from './BillCard';
import UserCard from './UserCard';




class House extends Component {

  constructor(){
    super();
    this.state = {
      bills: [
        {}
        ],
      users: [
        {}
        ]
    }
  }

  componentWillMount(){
    this._fetchBills();
    this._fetchUsers();

  }

  _fetchBills = async () => {
    //console.log("fetch bills success")
   try {
     const houseId = this.props.match.params.houseId;
     const id = this.props.match.params.id;
     const res = await axios.get(`/api/houses/${id}/bills`);
     await this.setState({bills: res.data});
     return res.data;
   }
   catch (err) {
     console.log(err)
      }
 }

  _fetchUsers = async () => {
    try {
      const houseId = this.props.match.params.houseId;
      const id = this.props.match.params.id;
      const res = await axios.get(`/api/houses/${id}/users`);
      await this.setState({users: res.data});
      return res.data;
    }
    catch (err) {
      console.log(err)
      }
    }
  

  render() {
     return (
      
      <div >
        <h4>{this.state.house_nickname}</h4>

        <p>Ello Mates!</p>

          <div>
            <div>
              <div>
                <h1> Utility Bills </h1>
                  <Link to={`/houses/:house_id/bills`}><button>Add New Bill</button></Link>
                  {this.state.bills.map( (bills) => {
                    return (
                      <div>
                        <BillCard key={bills.id} bill={bills} />
                        </div>
                    )
                  })}
                </div>

                <div>
                  <h1> Roomates </h1>
                  <Link to={`/houses/:house_id/users`}><button>Add New Mate</button></Link>
                  {this.state.users.map( (user) => {
                    return (
                      <div>
                        <UserCard key={user.id} user={user} />
                        </div>
                    )
                  })}
          </div>

        </div>

    </div>

            </div>

    );
  }
}

export default House;