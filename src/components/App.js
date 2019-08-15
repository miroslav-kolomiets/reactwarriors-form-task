import React from "react";
import Input from "./Input";
import Select from './Select';

import countries from '../data/countries';
import cities from '../data/cities';

export default class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      firstname: '',
      lastname: '',
      password: '',
      repeatPassword: '',
      gender: 'male',
      email: '',
      mobile: '',
      country: '1',
      city: '',
      avatar: '',
      step: 1,
      errors: {
        firstname: 'required',
        lastname: 'required',
        password: 'required',
        repeatPassword: 'required',
        gender: false,
        email: 'required',
        mobile: 'required',
        country: 'required',
        city: 'required',
        avatar: false
      }
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleChangeAvatar = event => {
    const reader = new FileReader();
    
    reader.onload = event => {
      this.setState({
        avatar: event.target.result
      })
    }
    
    reader.readAsDataURL(event.target.files[0])
  }

  handleSubmit = event => {
    event.preventDefault();

    console.log(event.target.getAttribute('id'))

    const errors = {};

    if (this.state.step === 1) {
      
      if (this.state.firstname.length < 5) {
        errors.firstname = "Must be 5 characters or more."
      }
  
      if (this.state.lastname.length < 5) {
        errors.lastname = "Must be 5 characters or more."
      }
  
      if (this.state.password < 3) {
        errors.password = "Must be 6 characters or more."
      }
  
      if (this.state.password !== this.state.repeatPassword) {
        errors.repeatPassword = "Must be equal password."
      }
    } else if (this.state.step === 2) {
      
      if (this.state.email < 3) {
        errors.email = "Invalid email address."
      }
  
      if (this.state.mobile < 3) {
        errors.mobile = "Invalid mobile."
      }
  
      if (!this.state.country) {
        errors.country = "Invalid country."
      }
  
      // if (this.state.city < 3) {
      //   errors.city = "Invalid city."
      // }
    } else if (this.state.step === 3) {
      
      if (this.state.avatar === false ) {
        errors.avatar = "Required."
      }
    }

    if (event.target.getAttribute('id') === 'previous') {

      this.setState({
        step: this.state.step - 1
      })
    } else if (event.target.getAttribute('id') === 'next' && this.state.step !== 4) {

      if (Object.keys(errors).length > 0) {
        this.setState({
          errors: errors
        })
      } else {
        this.setState({
          errors: {},
          step: this.state.step + 1
        })
      }
    } else if (event.target.getAttribute('id') === 'next' && this.state.step === 4) {
      
      return null;
    }
  }

  render() {
    return (
      <div className="form-container card">
        <form className="form card-body">
          {
            this.state.step === 1 ? 
              (<div className="step-1">
                <Input 
                  className="form-control"
                  type="text" 
                  label="Firstname" 
                  name="firstname" 
                  value={this.state.firstname}
                  error={this.state.errors.firstname} 
                  handleChange={this.handleChange}
                />
                <Input
                  className="form-control"
                  type="text" 
                  label="Lastname" 
                  name="lastname" 
                  value={this.state.lastname}
                  error={this.state.errors.lastname} 
                  handleChange={this.handleChange}
                />
                <Input
                  className="form-control" 
                  type="password" 
                  label="Password" 
                  name="password"
                  value={this.state.password}
                  error={this.state.errors.password} 
                  handleChange={this.handleChange}
                />
                <Input
                  className="form-control" 
                  type="password" 
                  label="Repeat password" 
                  name="repeatPassword"
                  value={this.state.repeatPassword} 
                  error={this.state.errors.repeatPassword} 
                  handleChange={this.handleChange}
                />
                <div className="form-check">
                  <Input
                    className="form-check-inline"
                    type="radio"
                    id="male"
                    label="Male"
                    labelClassName="form-check-label"
                    name="gender" 
                    value="male"
                    checked={this.state.gender === 'male'}
                    handleChange={this.handleChange}
                  />
                </div>
                <div className="form-check">
                  <Input
                    className="form-check-inline" 
                    type="radio"
                    id="female"
                    label="Female"
                    labelClassName="form-check-label"
                    name="gender" 
                    value="female"
                    checked={this.state.gender === 'female'}
                    handleChange={this.handleChange}
                  />
                </div>
              </div>) : null
          }
          {
            this.state.step === 2 ? 
              (<div className="step-2">
                <Input
                  className="form-control" 
                  type="text" 
                  label="Email" 
                  name="email" 
                  value={this.state.email}
                  error={this.state.errors.email} 
                  handleChange={this.handleChange}
                />
                <Input
                  className="form-control" 
                  type="text" 
                  label="Mobile" 
                  name="mobile"
                  value={this.state.mobile}
                  error={this.state.errors.mobile} 
                  handleChange={this.handleChange}
                />
                <Select
                  className="form-control" 
                  name="country" 
                  id="country" 
                  label="Country" 
                  handleChange={this.handleChange} 
                  data={countries}
                />
              </div>) : null
          }
          {
            this.state.step === 3 ? 
              (<div className="step-3">
                <Input
                  className="form-control-file" 
                  type="file" 
                  label="Avatar" 
                  name="avatar" 
                  error={this.state.errors.repeatPassword} 
                  handleChange={this.handleChangeAvatar}
                />
              </div>) : null
          }
          {
            this.state.step === 4 ? 
              (<div className="card">
                <img src={this.state.avatar} className="card-img-top"></img>
                <div className="card-body">
                  <div className="card-title">Firs name: {this.state.firstname}</div>
                  <div className="card-title">Last name: {this.state.lastname}</div>
                  <div className="card-title">Email: {this.state.email}</div>
                  <div className="card-title">Phone: {this.state.mobile}</div>
                  <div className="card-title">Country: {this.state.country}{this.state.city}</div>
                </div>
              </div>) : null
          }
            <Input 
              className="btn btn-primary btn-md btn-block"
              id="previous"
              type="button" 
              value="Previous" 
              onClick={this.handleSubmit}
            />
            <Input 
              className="btn btn-primary btn-md btn-block"
              id="next"
              type="button" 
              value="Next" 
              onClick={this.handleSubmit}
            />
        </form>
      </div>
    );
  }
}
