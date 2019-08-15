import React from "react";

export default class Input extends React.Component {

  render() {
    const {id, className, labelClassName, type, name, label, value, onClick, handleChange, error, checked} = this.props;

    return (
      <div className="form-group">
        <label labelClassName={labelClassName}>{label}</label>
        <input
          className={className} 
          id={id}
          type={type} 
          name={name}
          value={value}
          onClick={onClick}
          checked={checked}
          onChange={handleChange} 
        />
        {error ? (<div className="error invalid-feedback">{error}</div> ) : null}
      </div>
    );
  }
}
