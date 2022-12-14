import React from "react";
import StartYear from "./StartYear"
import EndYear from "./EndYear"


const EduDetails = () => {
    
    return(
        <form class="form-group mt-3">
        <div>
            <h5>Education Details</h5> </div>
            <div class="col-sm-6 mt-5">
      <label for="inputType">Type</label>
      <input type="name" class="form-control" id="Type4" placeholder="graduation/PG"/>
      </div>
    <div class="row mt-3">
      <div class="col-sm-6">
      <label for="inputUnivName">University</label>
      <input type="name" class="form-control" id="Univ4" placeholder="Enter University Name"/>
      </div>
      <div class="col-sm-6">
      <label for="inputDegreeName">Degree</label>
      <input type="name" class="form-control" id="Degree4" placeholder="Enter Score"/>
      </div>
    </div>
    
    <div class="row mt-5"><StartYear/>
      <EndYear/></div>
  <div class="container my-3">
    <div class="row">
        <div class="col-md-12 bg-light clear-fix">
            <button type="button" class="btn btn-primary float-right" onClick={"#"}>Back</button>
            <button type="button" class="btn btn-success float-right" onClick={"#"}>Next</button>
        </div>
    </div>
</div>
</form>
    
    )
}

export default EduDetails