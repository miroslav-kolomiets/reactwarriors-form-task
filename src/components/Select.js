import React from "react";

export default class Select extends React.Component {

  render() {
    const {id, className, name, label, value, handleChange, data} = this.props;

    return (
      <label htmlFor={id}>
          {label}
          <select 
            id={id} 
            onChange={handleChange} 
            name={name} 
            value={value}
            className={className}
          >
            {data.map((item) => {
                return <option value={item.id} key={item.id}>{item.name}</option>
            })}
          </select>
      </label>
    );
  }
}
