import { useState } from 'react';
import Booking from '../Booking/Booking';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Quote from '../Quote/Quote';
import Footer from '../Footer/Footer';
import InfoCenter from '../InfoCenter/InfoCenter';
import About from '../About/About';
import BookingForm from '../BookingForm/BookingForm';
import RatingForm from '../RatingForm/RatingForm';
import { Route, Routes, useLocation } from 'react-router-dom';
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import whatsapp from "../../images/whatsapp.png";

import './App.css';

function App() {
  const location = useLocation();
  const [bookingModalOpened, setBookingModalOpened] = useState(false);
  const [ratingModalOpened, setRatingModalOpened] = useState(false);

  function handleOpenBookingModal() {
    setBookingModalOpened(true);
  }

  function handleCloseBookingModal() {
    setBookingModalOpened(false);
  }

  function handleOpenRatingModal() {
    setRatingModalOpened(true);
  }

  function handleCloseRatingModal() {
    setRatingModalOpened(false);
  }

  return (
    <div className="page">
      
      <div className="page__home-page">
        <div className="page__background-image">

        </div>

        <Header></Header>
        <Routes>
          <Route path="/" element={<Main handleOpenBookingModal={handleOpenBookingModal} handleOpenRatingModal={handleOpenRatingModal}></Main>}></Route>
          <Route path="/info-center" element={<InfoCenter></InfoCenter>}></Route>
          <Route path="/about" element={<About></About>}></Route>
        </Routes>

        <div className="page__social-links">
          <a href=""><img src={facebook} className="page__social"></img></a>
          <a href=""><img src={instagram} className="page__social"></img></a>
          <a href="https://wa.me/9137310435" target="_blank"><img src={whatsapp} className="page__social"></img></a>
        </div>
      </div>
      
      <Routes>
        <Route path='/' element={<><Quote></Quote><Booking></Booking></>}></Route>
      </Routes>

      <BookingForm modalOpened={bookingModalOpened} handleClose={handleCloseBookingModal}></BookingForm>
      <RatingForm modalOpened={ratingModalOpened} handleClose={handleCloseRatingModal}></RatingForm>
      <Footer></Footer>
    </div>
  )
}

export default App
