import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MyProjects from './MyProjects'

function Routes() {

    return (
        <Router>
            <Route
                path='/home'
                exact render={({ match }) =>
                    <MyProjects
                        match={match}
                    />
                }
            />
            {/* <Route path="/home">
                <MyProjects />
            </Route> */}
            {/* <Route
                path='/login'
                exact render={({ match }) =>
                    <Login
                        match={match}
                    />
                }
            />
            <Route
                path='/signup'
                exact render={({ match }) =>
                    <Signup
                    match={match}
                    />
                }
            />
            <Route
                path='/home'
                render={({ match }) =>
                    <Container
                    match={match}
                    />
                }
            >

            </Route> */}
        </Router>
    )
}

export default Routes