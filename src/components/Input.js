import React from 'react'

export default class Input extends React.Component {
  render() {
    const {
      id,
      className,
      labelClassName,
      type,
      name,
      label,
      value,
      onClick,
      onChange,
      error,
      checked,
    } = this.props

    return (
      <div className="form-group">
        <label className={labelClassName} htmlFor={id}>
          {label}
        </label>
        <input
          className={className}
          id={id}
          htmlFor={id}
          autoComplete={id}
          type={type}
          name={name}
          value={value}
          onClick={onClick}
          checked={checked}
          onChange={onChange}
        />
        {error && <div className="error invalid-feedback">{error}</div>}
      </div>
    )
  }
}
