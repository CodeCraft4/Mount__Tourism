import React from 'react'
import Navbar from './Component/Hero/Navbar/Index'
import Header from './Component/Hero/Header/Index'
import TrailCard from './Component/TrailCard/Index'
import FooterArea from './Component/Footer/Index'

const News = () => {
    return (
        <div>
           <header>
            <nav>
                <Navbar/>
            </nav>
            <Header/>
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

export default News
