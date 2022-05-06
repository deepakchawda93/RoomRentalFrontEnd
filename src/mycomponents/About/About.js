import React from 'react'

const About = () => {
  return (
    <>
    <form className="row g-3 needs-validation" novalidate>
  <div className="col-md-4">
    <div className="form-outline">
      <input type="text" className="form-control" id="validationCustom01" value="Mark" required />
      <label for="validationCustom01" className="form-label">First name</label>
      <div className="valid-feedback">Looks good!</div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="form-outline">
      <input type="text" className="form-control" id="validationCustom02" value="Otto" required />
      <label for="validationCustom02" className="form-label">Last name</label>
      <div className="valid-feedback">Looks good!</div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="input-group form-outline">
      <span className="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
      <label for="validationCustomUsername" className="form-label">Username</label>
      <div className="invalid-feedback">Please choose a username.</div>
    </div>
  </div>
  <div className="col-md-6">
    <div className="form-outline">
      <input type="text" className="form-control" id="validationCustom03" required />
      <label for="validationCustom03" className="form-label">City</label>
      <div className="invalid-feedback">Please provide a valid city.</div>
    </div>
  </div>
  <div className="col-md-6">
    <div className="form-outline">
      <input type="text" className="form-control" id="validationCustom05" required />
      <label for="validationCustom05" className="form-label">Zip</label>
      <div className="invalid-feedback">Please provide a valid zip.</div>
    </div>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
      <label className="form-check-label" for="invalidCheck">Agree to terms and conditions</label>
      <div className="invalid-feedback">You must agree before submitting.</div>
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
    
    </>
  )
}

export default About
