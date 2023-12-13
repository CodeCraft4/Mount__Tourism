import React from 'react'
import Navbar from './Components/Hero/Navbar/Index'
import Header from './Components/Hero/Header/Index'
import TrailCard from './Components/TrailCard/Index'
import FooterArea from './Components/Footer/Index'

const Trails = () => {
    return (
        <div>
            <header>
                <nav>
                    <Navbar />
                </nav>
                <Header />
            </header>
            <main>
                <section>
                    <TrailCard/>
                </section>
            </main>
            <footer>
                <FooterArea/>
            </footer>
        </div>
    )
}

export default Trails
