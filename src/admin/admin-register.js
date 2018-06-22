import React, { Component } from 'react';
import './admin-register.css';


class AdminRegister extends Component{
    render(){
        return(
            <div>
           <br /> 
             <div className="main-container" id="main-con">
             <h1>Admin Registration</h1>
             <div className="grid" id="test">
                 <h3>iSlot</h3>
                 </div>
                 <div className="box">
                 <form>
                 <div class="form-group1">
                 <label for="class">Name:</label>
                 <input className="input" type="text" id="aname"/>
                    </div>
                    <br />
                    <br />
                    <div class="form-group2">
                    <label for="class">email:</label>
                    <input className="input" type="text" id="aemail"/>
                    </div>
                    <br />
                    <br />
                    <div class="form-group3">
                    <label for="class">Mobile Number:</label>
                    <input className="input" type="text" id="amobile"/>
                    </div>
                    <br />
                    <br />
                    <div class="form-group4">
                    <label for="class">Location:</label>
                    <input className="input" type="text" id="alocation"/>
                    </div>
                    <br />
                    <br />
                    <div class="btn">
                     <button id="aclear">Clear</button>
                     <button id="aregister">Register</button>
                     </div>
                     </form>
                     </div>
            </div>
        </div>
        )
    }
}

export default AdminRegister