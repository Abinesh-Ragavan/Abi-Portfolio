import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonals/Testimonals'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Loader from './components/loader/Loader'

const App = () => {
    return (
        <>
            <Loader />
            <Header />
            <Nav />
            <About />
            <Experience />
            {/* <Services /> */}
            <Portfolio />
            {/* <Testimonials /> */}
            <Contact />
            <Footer />


        </>
    )
}

export default App