import React from 'react'
import { Route, BrowserRouter } from "react-router-dom"

import Home from "./pages/home"
import CreatePoint from './pages/createPoint'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact ></Route>
      <Route component={CreatePoint} path="/create-point" exact ></Route>
    </BrowserRouter>
  )
}

export default Routes