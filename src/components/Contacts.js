import React from "react";
import Input from './Input';
import Select from './Select';

export default class Contacts extends React.Component {

  render() {
    const {email, errors, handleChange, handleSubmit, mobile, handleCitySelectChange, cities, countries} = this.props;

    return (
        <div className="step-2">
            <Input
                className="form-control" 
                type="text"
                id="email"
                label="Email" 
                name="email" 
                value={email}
                error={errors.email} 
                handleChange={handleChange}
            />
            <Input
                className="form-control" 
                type="text" 
                id="mobile"
                label="Mobile" 
                name="mobile"
                value={mobile}
                error={errors.mobile} 
                handleChange={handleChange}
            />
            <Select
                className="form-control" 
                name="country" 
                id="country" 
                label="Country" 
                handleChange={handleCitySelectChange} 
                data={countries}
            />
            <Select
                className="form-control" 
                name="city" 
                id="city" 
                label="City" 
                handleChange={handleChange} 
                data={cities}
            />
            <Input 
              className="btn btn-primary btn-md btn-block"
              id="previous"
              type="button" 
              value="Previous" 
              onClick={handleSubmit}
            />
            <Input 
              className="btn btn-primary btn-md btn-block"
              id="next"
              type="button" 
              value="Next" 
              onClick={handleSubmit}
            />
        </div>)
    }
}
