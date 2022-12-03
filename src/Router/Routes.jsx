import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Booking from "../Pages/Booking/Booking";
import Sell from "../Pages/Sell/Sell";
import Setting from "../Pages/Setting/Setting";
import Details from "../Pages/Setting/settingFolder/details/details";
import Email from "../Pages/Setting/settingFolder/email/email";
import Password from "../Pages/Setting/settingFolder/password/password";
import Notification from "../Pages/Setting/settingFolder/notification/notification";
import Button from "../component/button/button";
import Card from "../component/Cards/Card";
import Icon from "../component/Icons/Icon";
import ProgrssBar from "../component/progressBar/ProgrssBar";
import Stats from "../component/stats/Stats";
import Login from "../Pages/Forms/Login/Login";
import User from "../Pages/Forms/user/User";
import Reset from "../Pages/Forms/Reset/Reset";
import Protected from "../Pages/Forms/Protected/protected";
const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/dashboard" element={<Protected Component={Dashboard}/>} />
        <Route path="/booking" element={<Protected Component={Booking}/>} />
        <Route path="/sell" element={<Protected Component={Sell}/>} />
        <Route path="/setting" element={<Protected Component={Setting}/>} />
        <Route path="/details" element={<Protected Component={Details}/>} />
        <Route path="/email" element={<Protected Component={Email}/>} />
        <Route path="/password" element={<Protected Component={Password}/>} />
        <Route path="/notification" element={<Protected Component={Notification}/>} />
        <Route path="/btn" element={<Protected Component={Button}/>} />
        <Route path="/card" element={<Protected Component={Card}/>} />
        <Route path="/icon" element={<Protected Component={Icon}/>} />
        <Route path="/progressbar" element={<Protected Component={ProgrssBar}/>} />
        <Route path="/stats" element={<Protected Component={Stats}/>} />
      </Routes>
    </>
  );
};

export default Router;
