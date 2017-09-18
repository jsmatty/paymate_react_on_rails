import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios';
import styled from 'styled-components';



class User extends Component {
  constructor(){
    super();
    this.state = {
      redirect: false,
      house: {},
      user: [],
    }
  }

  componentWillMount(){
    this._fetchUser();
  }

  _fetchUser = async () => {
    const houseId = this.props.match.params.houseId;
    const id = this.props.match.params.id;
    const res = await axios.get(`/api/houses/${id}/users/${id}`)
    this.setState({
      house: res.data.house,
      user: res.data.user
    })

    // console.log(res.data)//
  }

  _deleteUser = async () => {
    const houseId = this.props.match.params.houseId;
    const id = this.props.match.params.id;
    const res = await axios.delete(`/api/houses/${id}/users/${id}`)
    const redirect = !this.state.redirect
    this.setState({ redirect })
  }

  render(){
   // const houseId = this.props.match.params.houseId;
    const id = this.props.match.params.id;


    return (
      <div>
        <h2>
          <Link to={`/houses/:id`}>{this.state.house.house_nickname}</Link>
        </h2>
        <br />
        <h2>{this.state.user.username}</h2>
        <img src={this.state.user.image} alt="https://i.imgur.com/b8mlwg5.jpg?1"/>
        <h4>{this.state.user.name}</h4>
        <br/>
        <h3>{this.state.user.bio}</h3>
        <br/>
        <h4>{this.state.user.birthday}</h4>


        {this.state.user.house_id === this.state.house_id ?
        <div>
          <Link to={`/houses/${id}/users/${id}/edit`}>Edit Mate</Link>
          <button onClick={this._deleteUser}>Remove Mate</button>
          {this.state.redirect && (<Redirect to={`/houses/${id}/users`}/>)}
        </div>
        :
        ''}
        </div>
      );
     
   }
}

export default User;