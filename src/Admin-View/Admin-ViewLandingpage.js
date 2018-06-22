import React, { Component } from 'react';
import { Link,Router } from 'react-router-dom';
class Landingpage_eventadmin extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Link to="/view">View</Link>
                    <Link to="/update">Update</Link>
                    </Router>
            </div>
        );
    }
}

export default Landingpage_eventadmin;