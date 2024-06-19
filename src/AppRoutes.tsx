import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import LinearPlot from './components/LinearPlot'
import ReduxExample from './components/ReduxExample'
import UserComponent from './components/UserComponent'
import UserActivityPage from './components/UserActivityPage/UserActivityPage'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/user-activity" element={<UserActivityPage/>} />
        <Route path="/linear-plot" element={<LinearPlot/>} />
        <Route path="/redux-example" element={<ReduxExample/>} />
        <Route path="/user-component" element={<UserComponent/>} />
    </Routes>
  )
}

export default AppRoutes