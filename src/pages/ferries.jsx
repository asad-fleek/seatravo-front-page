import React from 'react'
import NavBar from '../components/nav-bar';
import Footer from '../components/footer';
import FerryRoutes from '../components/popular-ferry-routes';

const Ferries = () => {
  return (
    <div>
      <NavBar />
      <FerryRoutes />
      <Footer />
    </div>
  )
}

export default Ferries;
