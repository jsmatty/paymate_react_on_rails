import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import AllBills from './AllBills';
import AllUsers from './AllUsers';
import BillCard from './BillCard';
import UserCard from './UserCard';
import Bill from './Bill';
import User from './User';

class House extends Component {
  constructor(){
    super();

    this.state = {
      nickname: '',
      bills: [],
      users: []
    }
  }

  componentWillMount(){
    const id = this.props.match.params.id;
    axios.get(`/api/houses/${id}`).then((res) => {
      const bills = res.data.bills;
      const users = res.data.users;
      console.log(res.data);

      this.setState({
        nickname: res.data.house.nickname,
        bills: bills,
        users: users
    })  
  })
}

  render(){
    const users = this.state.users.map((user, i) => (
      <div key={i}>
        <h2>Username: {user.username}</h2>
        <img src={user.image} alt="https://i.imgur.com/b8mlwg5.jpg?1"/>
        <h4>Name: {user.name}</h4>
        <h4>Bio: {user.bio}</h4>
        <h4>Birthday: {user.birthday}</h4>
      </div>
    ));

    const bills = this.state.bills.map((bill, i) => (
                <div key= {i}>
                  <h2>Utility Type: {bill.utility}</h2>
                  <h4>Company: {bill.company}</h4>
                  <h4>Company phone number: {bill.phone_number}</h4>
                  <h4>Account Number: {bill.account_number}</h4>
                  <h4>Name on account: {bill.name}</h4>
                  <h4>Email on account: {bill.email}</h4>
                </div>
            ));
    return(
      <div>
        <h1>{this.state.nickname}</h1>
        <h2>{users}</h2>
        <h2>{bills}</h2>
        

      </div>
    )
  }
}

// class House extends Component {

//   constructor(){
//     super();
//     this.state = {
//       bills: [
//         {}
//         ],
//       users: [
//         {}
//         ]
//     }
//   }

//   componentWillMount(){
//     this._fetchHouseAndBills();
//     this._fetchHouseAndUsers();

//   }

//   _fetchHouseAndBills = async () => {
//     try {
//       console.log('this is _fetchHouseAndBills')
//      const house_id = this.props.match.params.house_id;
//          console.log(house_id);

//      const id = this.props.match.params.id;
//      const res = await axios.get(`/api/houses/${house_id}`);
//      await this.setState({
//        bills: res.data.bills,
//       house: res.data.house_id
//     });
//      return res.data;
//    }
//    catch (err) {
//      console.log(err)
//       }
//  }

//   _fetchHouseAndUsers = async () => {
//     try {
//       const house_id = this.props.match.params.house_id;
//       const id = this.props.match.params.id;
//       const res = await axios.get(`/api/houses/${house_id}`);
//       await this.setState({
//         users: res.data.users,
//       house:res.data.house_id
//     });
//       return res.data;
//     }
//     catch (err) {
//       console.log(err)
//       }
//     }
    

//   render (){
//      return (
      
//       <div>
//         {/*<h4>{this.props.match.params.house_id}</h4>*/}

//         <p>Ello Mates!</p>

//           <div>
//             <div>
//               <div>
//                 <h1> Utility Bills </h1>
//                   {/*<Link to={`/houses/${house_id}/bills`}><button>Add New Bill</button></Link>*/}
//                   {this.state.bills.map( (bills) => {
//                     return (
//                       <div>
//                         {/*<BillCard key={bills.id} data={bills} />*/}
//                         </div>
//                     )
//                   })}
//                 </div>

//                 <div>
//                   <h1> Roomates </h1>
//                   {/*<Link to={`/houses/${house_id}/users`}><button>Add New Mate</button></Link>*/}
//                   {this.state.users.map( (user) => {
//                     return (
//                       <div>
//                         <UserCard key={user.id} data={user} />
//                         </div>
//                     )
//                   })}
//           </div>

//         </div>

//     </div>

//             </div>
     
//     )
//   }
// }

export default House;