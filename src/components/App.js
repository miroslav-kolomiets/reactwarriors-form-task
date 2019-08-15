import React from "react";
import Contscts from './Contacts';
import Registration from './Registration';
import UserCard from './UserCard';
import Avatar from './Avatar';

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
      country: 1,
      city: 'Kiyv',
      avatar: '',
      step: 1,
      cities: [],
      errors: {
        firstname: '',
        lastname: '',
        password: '',
        repeatPassword: '',
        gender: '',
        email: '',
        mobile: '',
        country: '',
        city: '',
        avatar: ''
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
  
      if (!this.state.city) {
        errors.city = "Invalid city."
      }
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

  componentDidMount() {
    let citiesNames = this.getCities();

    this.setState({
      cities: citiesNames
    })
  }

  getCities(country) {
    let citiesNames = [];
    const countryVal = country || this.state.country;
    for (let item in cities) {
      if (cities[item].country === Number(countryVal)) {
        citiesNames.push(cities[item]);
      }
    }
    return citiesNames;
  }


  handleCitySelectChange = event => {

    let citiesNames = this.getCities(event.target.value);

    this.setState({
      country: event.target.value,
      cities: citiesNames
    })
  }

  render() {
    return (
      <div className="form-container card">
        <form className="form card-body">
          {
            this.state.step === 1 ? 
              (<Registration 
                errors={this.state.errors}
                firstname={this.state.firstname}
                lastname={this.state.lastname}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                password={this.state.password}
                repeatPassword={this.state.repeatPassword}
                gender={this.state.gender}
              />) : null
          }
          {
            this.state.step === 2 ? 
              (<Contscts
                email={this.state.email}
                errors={this.state.errors}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                mobile={this.state.mobile}
                handleCitySelectChange={this.handleCitySelectChange}
                cities={this.state.cities}
                countries={countries}
              />) : null
          }
          {
            this.state.step === 3 ? 
              <Avatar 
                handleSubmit={this.handleSubmit}
                handleChangeAvatar={this.handleChangeAvatar} 
                errors={this.state.errors}
              /> : null
          }
          {
            this.state.step === 4 ? 
              <UserCard 
                handleSubmit={this.handleSubmit}
                avatar={this.state.avatar}
                firstname={this.state.firstname}
                lastname={this.state.lastname}
                email={this.state.email}
                mobile={this.state.mobile}
                country={this.state.country}
                city={this.state.city}
              /> : null
          }
        </form>
      </div>
    );
  }
}
