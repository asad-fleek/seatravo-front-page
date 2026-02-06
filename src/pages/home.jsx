import React from 'react'
import NavBar from '../components/nav-bar'
import Banner from '../components/banner'
import WelcomePage from '../components/welcome-page'
import FerryRoutes from '../components/popular-ferry-routes'
import PlanYour from '../components/plan-your'
import GetTravel from '../components/get-caribibean-travel'
import Footer from '../components/footer'


const Home = () => {
    return (
        <>
            <NavBar />
            <Banner />
            <WelcomePage />
            <FerryRoutes />
            <PlanYour />
            <GetTravel />
            <Footer />
        </>
    )
}

export default Home;