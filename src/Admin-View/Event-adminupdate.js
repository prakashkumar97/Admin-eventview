import React, { Component } from 'react';
import Event_adminheader from './Event-adminheader';
class Event_adminupdate extends Component {
    render() {
        return (
            <div>
                <div className="main-container" id="main-con">
                <Event_adminheader />
                <div className="Updatetabbox">
                <div className="Updatetabinnerbox">
            <br/>
            <br/>
            <div class="container">
            <div class="row">
                <div class="col-sm">
                 <label>sudheer</label>
                 </div>
                <div class="col-sm">
                     2
                 </div>
                <div class="col-sm">
                    <button>Approve</button>
                 </div>
            </div>
  <div class="row">
    <div class="col-sm">
      <label>kumar</label>
    </div>
    <div class="col-sm">
      1
    </div>
    <div class="col-sm">
        <button>Approve</button>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <label>Antar</label>
    </div>
    <div class="col-sm">
      3
    </div>
    <div class="col-sm">
        <button>Approve</button>
    </div>
  </div>
</div>
<div className="CloseEventbtn">
    <button>Close Event</button>
    </div>
 </div>
 </div>
 </div>
            </div>
        );
    }
}

export default Event_adminupdate;