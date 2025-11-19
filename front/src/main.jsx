import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import MainPage from './MainPage/MainPage.jsx'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import AboutUs from "./AboutUsPage/AboutUs.jsx";
import Properties from "./PropertiesPage/Properties.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <Header />
          <Routes>
              <Route path='/' index element={<MainPage />}></Route>
              <Route path='/AboutUs' element={<AboutUs />}></Route>
              <Route path='/Properties' element={<Properties />}></Route>
          </Routes>
          <Footer />
      </BrowserRouter>
  </StrictMode>,
)
