import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as ROUTE_PATH from './config'
import Countries from '../Screens/Countries'
import Weather from '../Screens/Weather'

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTE_PATH.COUNTRIES_PATH} element={<Countries />} />
        <Route path={ROUTE_PATH.WEATHER_PATH} element={<Weather />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
