import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import TestSeries from './components/testSeries/TestSeries.jsx';
import ContactUs from './components/ContactUs.jsx';
import SignUp from './components/SignUp.jsx';
import Notes from './components/Notes.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="TestSeries" element={<TestSeries />} />
      <Route path="Notes" element={<Notes />} />
      <Route path="ContactUs" element={<ContactUs />} />
      <Route path="SignUp" element={<SignUp />} />
      <Route path="Login" element={<Login />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
    </RouterProvider>
)
