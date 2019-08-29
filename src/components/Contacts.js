import React from 'react'
import Input from './Input'

import countries from '../data/countries'
import cities from '../data/cities'

export default class Contacts extends React.Component {
  getCities() {
    let citiesNames = []
    for (let item in cities) {
      if (cities[item].country === Number(this.props.country)) {
        citiesNames.push(cities[item])
      }
    }
    return citiesNames.map((item, key) => {
      return (
        <option value={item.name} key={key}>
          {item.name}
        </option>
      )
    })
  }

  render() {
    const { email, errors, country, city, onChange, mobile } = this.props

    return (
      <div className="contscts">
        <Input
          className="form-control"
          type="text"
          id="email"
          label="Email"
          name="email"
          value={email}
          error={errors.email}
          onChange={onChange}
        />
        <Input
          className="form-control"
          type="text"
          id="mobile"
          label="Mobile"
          name="mobile"
          value={mobile}
          error={errors.mobile}
          onChange={onChange}
        />
        <div className="form-group">
          <label htmlFor="country">
            Country
            <select
              id="country"
              onChange={onChange}
              name="country"
              value={country}
              className="form-control"
            >
              {countries.map((country, key) => {
                return (
                  <option value={country.id} key={key}>
                    {country.name}
                  </option>
                )
              })}
            </select>
            {errors.country && (
              <div className="error invalid-feedback">{errors.country}</div>
            )}
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="city">
            Сities
            <select
              id="city"
              onChange={onChange}
              name="city"
              value={city}
              className="form-control"
            >
              <option>Select city</option>
              {this.getCities()}
            </select>
            {errors.city && (
              <div className="error invalid-feedback">{errors.city}</div>
            )}
          </label>
        </div>
      </div>
    )
  }
}
