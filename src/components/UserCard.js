import React from 'react'
import countries from '../data/countries'

export default class UserCard extends React.Component {
  getCountry = country => {
    let countryName = ''
    countries.find(elem => {
      if (elem.id === country) {
        countryName = elem.name
      }
    })

    return countryName
  }
  render() {
    const {
      avatar,
      firstName,
      lastName,
      email,
      mobile,
      countryId,
      city,
    } = this.props

    let countryName = this.getCountry(countryId)

    return (
      <div className="card">
        <img src={avatar} className="card-img-top" alt="avatar" />
        <div className="card-body">
          <div className="card-title">Firs name: {firstName}</div>
          <div className="card-title">Last name: {lastName}</div>
          <div className="card-title">Email: {email}</div>
          <div className="card-title">Phone: {mobile}</div>
          <div className="card-title">Country: {countryName}</div>
          <div className="card-title">City: {city}</div>
        </div>
      </div>
    )
  }
}
