import React from "react"
import {
    BrowserRouter as Router,
    Link,
    Routes,
    Route,
    Switch
  } from "react-router-dom";

const Register=()=>{
   
    return (
        <div  className="col-md-3 mx-auto my-5 py-5S ">
          <form> 
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
<div  className="col-md-3 mx-auto my-5 py-5S ">
<div className="" button>
                            <Link to="/register" className="btn btn-outline-primary ">
                                <i className="fa fa-google "></i>Register </Link>
                        </div>
                       
                        </div>

        </div>
    )
}
export default Register;