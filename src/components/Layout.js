import React from "react"

import Navbar from "../components/Navbar"
// import { BrowserRouter, Route, Switch } from "react-router-dom"

// import BadgeNew from "../pages/BadgeNew"
// import Badges from "../pages/Badges"

function Layout(props) {
  return (
    <React.Fragment>
      <Navbar />
      {props.children}
    </React.Fragment>
  )
}

export default Layout