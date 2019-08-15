import React from "react";
import Input from './Input';

export default class Avatar extends React.Component {

  render() {
    const {handleChangeAvatar, handleSubmit, errors} = this.props;

    return (
        <div className="step-3">
            <Input
                className="form-control-file" 
                type="file" 
                label="Avatar" 
                name="avatar" 
                error={errors.avatar} 
                handleChange={handleChangeAvatar}
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
