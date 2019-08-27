import React from 'react'
import Navigation from './Navigation'

export default class UserCard extends React.Component {
  render() {
    const {
      avatar,
      firstName,
      lastName,
      step,
      email,
      resetForm,
      mobile,
      previousStep,
      country,
      city,
      handleSubmit,
    } = this.props

    return (
      <div className="card">
        <img src={avatar} className="card-img-top" alt="avatar" />
        <div className="card-body">
          <div className="card-title">Firs name: {firstName}</div>
          <div className="card-title">Last name: {lastName}</div>
          <div className="card-title">Email: {email}</div>
          <div className="card-title">Phone: {mobile}</div>
          <div className="card-title">
            Country: {country} City: {city}
          </div>
        </div>
        <Navigation
          previousStep={previousStep}
          handleSubmit={handleSubmit}
          resetForm={resetForm}
          step={step}
        />
      </div>
    )
  }
}
