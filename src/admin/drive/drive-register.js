import React, { Component } from 'react';
import './drive-register.css';

class DriveRegister extends Component {
    render() {
        return (
            <div>
           <br /> 
             <div className="main-container" id="main-con">
             <h1>Drive Registration</h1>
             <div className="grid" id="test">
                 <h3>iSlot </h3>
                 </div>
                 <div className="box">
                 <form>
                 <div class="form-groups1">
                 <label for="class">Name:</label>
                 <input className="input" type="text" id="dname"/>
                    </div>
                    <br />
                    <br />
                    <div class="form-groups2">
                    <label for="class">Date:</label>
                    <input className="input" type="text" id="iddate"/>
                    </div>
                    <br />
                    <br />
                    <div class="form-groups3">
                    <label for="class">Start Time:</label>
                    <input className="input" type="text" id="dstarttime"/>
                    </div>
                    <br />
                    <br />
                    <div class="form-groups4">
                    <label for="class">End Time:</label>
                    <input className="input" type="text" id="dendtime"/>
                    </div>
                    <br />
                    <br />
                    <div class="form-groups5">
                    <label for="class">Location:</label>
                    <input className="inputs" type="text" id="dlocation"/>
                    </div>
                    <br />
                    <br />
                    <div class="form-groups6">
                    <label for="class">Skills:</label>
                    <input className="inputs" type="text" id="dskill"/>
                    </div>
                    <br />
                    <br />
                    <div class="btns">
                     <button id="iclear">Reset</button>
                     <button id="iregister">Create Event</button>
                     </div>
                     </form>
                     </div>
            </div>
        </div>
        );
    }
}

export default DriveRegister;