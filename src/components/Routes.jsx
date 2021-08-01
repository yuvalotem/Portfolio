import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MyProjects from './MyProjects'
import Skills from './Skills'
import AboutMe from './AboutMe'

function Routes() {

    return (
        <Router>
            <Route
                path='/projects'
                exact render={({ match }) =>
                    <MyProjects
                        match={match}
                    />
                }
            />
            <Route
                path='/skills'
                exact render={({ match }) =>
                    <Skills
                        match={match}
                    />
                }
            />
            <Route
                path='/about'
                exact render={({ match }) =>
                    <AboutMe
                        match={match}
                    />
                }
            />

        </Router>
    )
}

export default Routes