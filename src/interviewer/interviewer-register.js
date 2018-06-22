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
                 <div class="form-group">
                 <label for="class">Name:</label>
                 <input className="input" type="text" id="iname"/>
                    </div>
                    <div class="form-group">
                    <label for="class">email:</label>
                    <input className="input" type="text" id="iemail"/>
                    </div>
                    <div class="form-group">
                    <label for="class">Mobile Number:</label>
                    <input className="input" type="text" id="imobile"/>
                    </div>
                    <div class="form-group">
                    <label for="class">Skills:</label>
                    </div>
                     <button id="iclear">Clear</button>
                     <button id="iregister">Register</button>
                     </form>
                     </div>
            </div>
        </div>
        )
    }
}

export default InterviewRegister