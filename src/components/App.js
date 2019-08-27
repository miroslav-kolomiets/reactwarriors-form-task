import React from 'react'
import Contacts from './Contacts'
import Registration from './Registration'
import UserCard from './UserCard'
import Avatar from './Avatar'

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      firstName: '',
      lastName: '',
      password: '',
      repeatPassword: '',
      gender: 'male',
      email: '',
      mobile: '',
      country: 1,
      city: '',
      avatar: '',
      step: 1,
      cities: [],
      errors: {
        firstName: '',
        lastName: '',
        password: '',
        repeatPassword: '',
        gender: '',
        email: '',
        mobile: '',
        country: '',
        city: '',
        avatar: '',
      },
    }
  }

  handleChange = event => {
    const name = event.target.name
    const value = event.target.value

    this.setState({
      [name]: value,
    })

    console.log(name, value)
  }

  validationForm = errors => {
    console.log(errors)
    if (this.state.step === 1) {
      if (this.state.firstName.length < 5) {
        errors.firstName = 'Must be 5 characters or more.'
      }

      if (this.state.lastName.length < 5) {
        errors.lastName = 'Must be 5 characters or more.'
      }

      if (this.state.password < 3) {
        errors.password = 'Must be 6 characters or more.'
      }

      if (this.state.password !== this.state.repeatPassword) {
        errors.repeatPassword = 'Must be equal password.'
      }
    } else if (this.state.step === 2) {
      if (this.state.email < 3) {
        errors.email = 'Invalid email address.'
      }

      if (this.state.mobile < 3) {
        errors.mobile = 'Invalid mobile.'
      }

      if (!this.state.country) {
        errors.country = 'Invalid country.'
      }

      if (!this.state.city) {
        errors.city = 'Invalid city.'
      }
    } else if (this.state.step === 3) {
      if (!this.state.avatar) {
        errors.avatar = 'Required.'
      }
    }
  }

  previousStep = () => {
    this.setState({
      step: this.state.step - 1,
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    const errors = {}

    this.validationForm(errors)

    if (Object.keys(errors).length > 0) {
      this.setState({
        errors: errors,
      })
    } else {
      this.setState({
        errors: {},
        step: this.state.step + 1,
      })
    }
  }

  resetForm = () => {
    this.setState({
      firstName: '',
      lastName: '',
      password: '',
      repeatPassword: '',
      gender: 'male',
      email: '',
      mobile: '',
      country: 1,
      city: '',
      avatar: '',
      step: 1,
      cities: [],
      errors: {
        firstName: '',
        lastName: '',
        password: '',
        repeatPassword: '',
        gender: '',
        email: '',
        mobile: '',
        country: '',
        city: '',
        avatar: '',
      },
    })
  }

  render() {
    const {
      step,
      errors,
      firstName,
      lastName,
      password,
      repeatPassword,
      gender,
      city,
      avatar,
      email,
      mobile,
      country,
    } = this.state
    return (
      <div className="form-container card">
        <form className="form card-body">
          {step === 1 && (
            <Registration
              step={step}
              errors={errors}
              firstName={firstName}
              lastName={lastName}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              password={password}
              repeatPassword={repeatPassword}
              gender={gender}
            />
          )}
          {step === 2 && (
            <Contacts
              step={step}
              email={email}
              errors={errors}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              previousStep={this.previousStep}
              mobile={mobile}
              country={this.state.country}
              handleCitySelectChange={this.handleCitySelectChange}
            />
          )}
          {step === 3 && (
            <Avatar
              step={step}
              handleSubmit={this.handleSubmit}
              previousStep={this.previousStep}
              handleChange={this.handleChange}
              errors={errors}
            />
          )}
          {step === 4 && (
            <UserCard
              step={step}
              handleSubmit={this.handleSubmit}
              resetForm={this.resetForm}
              avatar={avatar}
              previousStep={this.previousStep}
              firstName={firstName}
              lastName={lastName}
              email={email}
              mobile={mobile}
              country={country}
              city={city}
            />
          )}
        </form>
      </div>
    )
  }
}
