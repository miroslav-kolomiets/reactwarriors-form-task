import React from "react";

export default class Input extends React.Component {

  render() {
    const {id, className, labelclassname, type, name, label, value, onClick, handleChange, error, checked} = this.props;

    return (
      <div className="form-group">
        <label className={labelclassname} htmlFor={id}>{label}</label>
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
          onChange={handleChange} 
        />
        {error ? (<div className="error invalid-feedback">{error}</div> ) : null}
      </div>
    );
  }
}
