import React from "react";

const PersonalInfo = () => {
    return(
        
        <form>
        <div class="form-group">
        <img class="rounded-circle" alt="80x80" 
src="https://picsum.photos/id/3/80/80" data-holder-rendered="true"/>
<div id="profile-container">
   <image id="profileImage" src="http://lorempixel.com/100/100" />
</div>
<input id="imageUpload" type="file" 
       name="profile_photo" placeholder="Photo" required="" capture/>
    <div class="row mt-3">
      <div class="col-sm-6">
      <label for="inputFirstName">First Name</label>
      <input type="name" class="form-control" id="First4" placeholder=""/>
      </div>
      <div class="col-sm-6">
      <label for="inputLastName">Last Name</label>
      <input type="name" class="form-control" id="Last4" placeholder=""/>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
      </div>
      <div class="col-md-6">
      <label for="inputMobile4">Mobile</label>
      <div class="input-group">
      <div class="input-group-prepend">
      <div class="input-group-text">+91</div>
      </div>
      <input type="mobile" class="form-control" id="inputMobile4" placeholder=""/>
      </div>
    </div>
    </div>
    <div class="form-group mt-3">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
    </div>
  
    <div class="row mt-3">
      <div class="col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity"/>
      </div>
      <div class="col-md-6">
      <label for="inputState">State</label>
      <input type="text" class="form-control" id="inputState"/>
      </div>
    </div>  
    <div class="form-group col-md-2 mt-3">
      <label for="inputPin">Pincode</label>
      <input type="text" class="form-control" id="inputPin"/>
    </div>
  <div class="form-group mt-3">
  <label for="comment">Objective:</label>
  <textarea class="form-control" rows="5" id="comment"></textarea>
</div>
  <div class="container my-3">
    <div class="row">
        <div class="col-md-12 bg-light clear-fix">
            <button type="button" class="btn btn-primary float-right" onClick={"#"}>Back</button>
            <button type="button" class="btn btn-success float-right" onClick={"#"}>Next</button>
        </div>
    </div>
</div>
</div>  
</form>
        
    )
}

export default PersonalInfo