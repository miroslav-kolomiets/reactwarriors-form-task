import React from 'react'
import Contacts from './Contacts'
import Registration from './Registration'
import UserCard from './UserCard'
import Avatar from './Avatar'
import Navigation from './Navigation'

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

  onChange = event => {
    const name = event.target.name
    const value = event.target.value

    this.setState({
      [name]: value,
    })
  }

  validationForm = () => {
    const errors = {}
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
    return errors
  }

  previousStep = () => {
    this.setState({
      step: this.state.step - 1,
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    const errors = this.validationForm()

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
              onChange={this.onChange}
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
              onChange={this.onChange}
              handleSubmit={this.handleSubmit}
              previousStep={this.previousStep}
              mobile={mobile}
              country={this.state.country}
            />
          )}
          {step === 3 && (
            <Avatar
              step={step}
              handleSubmit={this.handleSubmit}
              previousStep={this.previousStep}
              onChange={this.onChange}
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
              countryId={country}
              city={city}
            />
          )}
        </form>
        <Navigation
          previousStep={this.previousStep}
          handleSubmit={this.handleSubmit}
          resetForm={this.resetForm}
          step={step}
        />
      </div>
    )
  }
}
