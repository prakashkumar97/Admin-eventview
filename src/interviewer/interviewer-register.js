import React, { Component } from 'react';
import './interviewer-register.css';


class InterviewRegister extends Component{
    render(){
        return(
            <div>
           <br /> 
             <div className="main-container" id="main-con">
             <h1>Interviewer Registration</h1>
             <div className="grid" id="test">
                 <h3>iSlot </h3>
                 </div>
                 <div className="box">
                 <form>
                 <div class="form-group1">
                 <label for="class">Name:</label>
                 <input className="input" type="text" id="iname"/>
                    </div>
                    <br />
                    <br />
                    <div class="form-group2">
                    <label for="class">email:</label>
                    <input className="input" type="text" id="iemail"/>
                    </div>
                    <br />
                    <br />
                    <div class="form-group3">
                    <label for="class">Mobile Number:</label>
                    <input className="input" type="text" id="imobile"/>
                    </div>
                    <br />
                    <br />
                    <div class="form-group5">
                    <label for="class">Skills:</label>
                    <input className="input" type="text" id="iskill"/>
                    </div>
                    <br />
                    <br />
                    <div class="btn">
                     <button id="iclear">Clear</button>
                     <button id="iregister">Register</button>
                     </div>
                     </form>
                     </div>
            </div>
        </div>
        )
    }
}

export default InterviewRegister