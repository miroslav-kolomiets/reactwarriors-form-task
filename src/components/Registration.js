import React from "react";
import Input from './Input';

export default class Registration extends React.Component {

  render() {
    const {firstname, errors, lastname, handleChange, handleSubmit, password, repeatPassword, gender} = this.props;

    return (
        <div className="step-1">
            <Input 
                className="form-control"
                type="text" 
                id="firstname"
                label="Firstname" 
                name="firstname" 
                value={firstname}
                error={errors.firstname} 
                handleChange={handleChange}
            />
            <Input
                className="form-control"
                type="text" 
                label="Lastname" 
                id="lastname" 
                name="lastname" 
                value={lastname}
                error={errors.lastname} 
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
                <Input
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
                <Input
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
