import React from 'react'
import Input from './Input'
import RadioButton from './RadioButton'
import Navigation from './Navigation'

export default class Registration extends React.Component {
  render() {
    const {
      firstName,
      errors,
      step,
      lastName,
      handleChange,
      handleSubmit,
      password,
      repeatPassword,
      gender,
    } = this.props

    return (
      <div className="registration">
        <Input
          className="form-control"
          type="text"
          id="firstName"
          label="First name"
          name="firstName"
          value={firstName}
          error={errors.firstName}
          handleChange={handleChange}
        />
        <Input
          className="form-control"
          type="text"
          label="Last name"
          id="lastName"
          name="lastName"
          value={lastName}
          error={errors.lastName}
          handleChange={handleChange}
        />
        <Input
          className="form-control"
          type="password"
          label="Password"
          id="password"
          name="password"
          value={password}
          error={errors.password}
          handleChange={handleChange}
        />
        <Input
          className="form-control"
          type="password"
          id="repeatPassword"
          label="Repeat password"
          name="repeatPassword"
          value={repeatPassword}
          error={errors.repeatPassword}
          handleChange={handleChange}
        />
        <div className="form-check">
          <RadioButton
            className="form-check-inline"
            type="radio"
            id="male"
            label="Male"
            labelclassname="form-check-label"
            name="gender"
            value="male"
            checked={gender === 'male'}
            handleChange={handleChange}
          />
        </div>
        <div className="form-check">
          <RadioButton
            className="form-check-inline"
            type="radio"
            id="female"
            label="Female"
            labelclassname="form-check-label"
            name="gender"
            value="female"
            checked={gender === 'female'}
            handleChange={handleChange}
          />
        </div>
        <Navigation handleSubmit={handleSubmit} step={step} />
      </div>
    )
  }
}
