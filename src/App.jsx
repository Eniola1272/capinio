import React from 'react'
import SecHeader from './Components/SecHeader/SecHeader'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Gallery from './Components/Gallery/Gallery'
import Booking from './Components/Booking/Booking'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
      <SecHeader />
      <Header />
      {/* <div className='text-green-500 text-center mt-4'>
        Hello
      </div> */}
      <Hero />
      <Gallery />
      <Booking />
      <Footer />
    </>
  )
}

export default App