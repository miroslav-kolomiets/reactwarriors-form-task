import React from 'react'
import Button from './Button'

export default class Navigation extends React.Component {
  render() {
    const { handleSubmit, previousStep, resetForm, step } = this.props

    return (
      <div className="navigation">
        {step !== 4 && (
          <div>
            <Button
              className={`btn btn-primary btn-md btn-block ${step === 1 &&
                'disabled'}`}
              id="previous"
              type="button"
              value="Previous"
              onClick={previousStep}
            />

            <Button
              className={`btn btn-primary btn-md btn-block ${step === 4 &&
                'disabled'}`}
              id="next"
              type="button"
              value="Next"
              onClick={handleSubmit}
            />
          </div>
        )}
        {step === 4 && (
          <div>
            <Button
              className={`btn btn-secondary btn-md btn-block ${step === 4 &&
                'disabled'}`}
              id="reset"
              type="button"
              value="Reset"
              onClick={resetForm}
            />
          </div>
        )}
      </div>
    )
  }
}
