import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LinearPlot from './components/LinearPlot'
import ReduxExample from './components/ReduxExample'
import UserComponent from './components/UserComponent'
import VirtualPostApp from './components/VirtualPost/VirtualPostApp'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<>Home</>} />
        <Route path="/user-activity" element={<VirtualPostApp/>} />
        <Route path="/linear-plot" element={<LinearPlot/>} />
        <Route path="/redux-example" element={<ReduxExample/>} />
        <Route path="/user-component" element={<UserComponent/>} />
    </Routes>
  )
}

export default AppRoutes