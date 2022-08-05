import React from "react";

const PersonalInfo = () => {
    return(
        <div>
        <form>
        <img class="rounded-circle" alt="80x80" 
src="img_avatar3.png" data-holder-rendered="true"/>
        <div class="form-row">
        <div class="form-group col-sm-6">
        <label for="inputFirstName">First Name</label>
        <input type="name" class="form-control" id="First4" placeholder=""/>
        </div>
      <div class="form-group col-sm-6">
      <label for="inputLastName">Last Name</label>
      <input type="name" class="form-control" id="Last4" placeholder=""/>
    </div>
    </div>
    <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputMobile4">Mobile</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <div class="input-group-text">+91</div>
        </div>
      <input type="mobile" class="form-control" id="inputMobile4" placeholder=""/>
    </div>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group row-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputPin">Pincode</label>
      <input type="text" class="form-control" id="inputPin"/>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="form-group">
  <label for="comment">Objective:</label>
  <textarea class="form-control" rows="5" id="comment"></textarea>
</div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
        </div>
    )
}

export default PersonalInfo