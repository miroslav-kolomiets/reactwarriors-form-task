import React from 'react'
import Input from './Input'

export default class Avatar extends React.Component {
  onChangeAvatar = event => {
    const reader = new FileReader()

    reader.onload = event => {
      this.props.onChange({
        target: {
          name: 'avatar',
          value: event.target.result,
        },
      })
    }

    reader.readAsDataURL(event.target.files[0])
  }

  render() {
    const { errors } = this.props

    return (
      <div className="avatar">
        <Input
          className="form-control-file"
          type="file"
          label="Avatar"
          name="avatar"
          error={errors.avatar}
          onChange={this.onChangeAvatar}
        />
      </div>
    )
  }
}
