import React from "react";
import Input from './Input';

export default class UserCard extends React.Component {

  render() {
    const {avatar, firstname, lastname, email, mobile, country, city, handleSubmit} = this.props;

    return (
        <div className="card">
            <img src={avatar} className="card-img-top" alt="avatar"></img>
                <div className="card-body">
                <div className="card-title">Firs name: {firstname}</div>
                <div className="card-title">Last name: {lastname}</div>
                <div className="card-title">Email: {email}</div>
                <div className="card-title">Phone: {mobile}</div>
                <div className="card-title">Country: {country} City: {city}</div>
            </div>
            <Input 
              className="btn btn-primary btn-md btn-block"
              id="previous"
              type="button" 
              value="Previous" 
              onClick={handleSubmit}
            />
        </div>
        )
    }
}
