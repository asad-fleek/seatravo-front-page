import Banner from './components/banner'
import Footer from './components/footer'
import GetTravel from './components/get-caribibean-travel'
import NavBar from './components/nav-bar'
import PlanYour from './components/plan your'
import FerryRoutes from './components/popular-ferry-routes'
import WelcomePage from './components/welcome-page'

function App() {
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

export default App
