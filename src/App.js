import React, { Component } from 'react';
// import Landingpage from './registration/page/landingpage';
//import Loginpage from './registration/page/loginpage';
import { BrowserRouter as Router, Switch, Route,hashHistory} from 'react-router-dom';
// import InterviewRegister from './interviewer/interviewer-register';
// import AdminRegister from './admin/admin-register';
// import DriveRegister from './admin/drive/drive-register';
import Event_adminview from './Admin-View/Event-adminview';
import Event_adminupdate from './Admin-View/Event-adminupdate';
import Landingpage_eventadmin from './Admin-View/Admin-ViewLandingpage';
class App extends Component {
  render() {
    return (
      <div>
      {/* <Landingpage />
      <InterviewRegister />
      <AdminRegister />
      <DriveRegister /> */}
     <Landingpage_eventadmin /> 
    
      {/* <Event_adminupdate /> */}
        <Router history={hashHistory}>
          <Switch>
              <Route path="/view" exact component={Event_adminview} />
              <Route path="/update" component={Event_adminupdate} />
              </Switch>
        </Router>
      </div>
      
    );
  }
}

export default App;
