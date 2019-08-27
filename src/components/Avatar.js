import React from 'react'
import Input from './Input'
import Navigation from './Navigation'

export default class Avatar extends React.Component {
  handleChangeAvatar = event => {
    const reader = new FileReader()

    reader.onload = event => {
      this.props.handleChange({
        target: {
          name: 'avatar',
          value: event.target.result,
        },
      })
    }

    reader.readAsDataURL(event.target.files[0])
  }

  render() {
    const { previousStep, handleSubmit, errors, step } = this.props

    return (
      <div className="avatar">
        <Input
          className="form-control-file"
          type="file"
          label="Avatar"
          name="avatar"
          error={errors.avatar}
          handleChange={this.handleChangeAvatar}
        />
        <Navigation
          previousStep={previousStep}
          handleSubmit={handleSubmit}
          step={step}
        />
      </div>
    )
  }
}
