import React from 'react'
import Input from './Input'
import RadioButton from './RadioButton'

export default class Registration extends React.Component {
  render() {
    const {
      firstName,
      errors,
      lastName,
      onChange,
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
          onChange={onChange}
        />
        <Input
          className="form-control"
          type="text"
          label="Last name"
          id="lastName"
          name="lastName"
          value={lastName}
          error={errors.lastName}
          onChange={onChange}
        />
        <Input
          className="form-control"
          type="password"
          label="Password"
          id="password"
          name="password"
          value={password}
          error={errors.password}
          onChange={onChange}
        />
        <Input
          className="form-control"
          type="password"
          id="repeatPassword"
          label="Repeat password"
          name="repeatPassword"
          value={repeatPassword}
          error={errors.repeatPassword}
          onChange={onChange}
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
            onChange={onChange}
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
            onChange={onChange}
          />
        </div>
      </div>
    )
  }
}
