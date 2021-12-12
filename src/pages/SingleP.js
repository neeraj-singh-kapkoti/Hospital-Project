import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import "./singleP.css"
import img from "../image/main.jpg"

function SingleP() {
    return (
        <div>
            <Navbar />
            <section id="singlePage" className="singlePage">

            <div className="container" data-aos="fade-up">
            <div className="section-title">
            <h2>About Us</h2>
            <img src={img} />
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quaTalk About S (stylized as Talk about S.) is the second extended play by South Korean singer and actress Gain. Released on October 5, 2012, the extended play was instead distributed solely by LOEN Entertainment, where she signed a solo contract back in 2011. Containing a total of five tracks that fall mostly in the genre of electronic and dance-pop, the extended play was Gain's first major release since her debut release Step 2/4 (2010), with the participation from long-time lyricist Kim Eana and producer Lee Min-soo, whom also acted as the release's executive producer. Other producers also participated in producing the album, including Jeong Seok-won, KZ, Postino and Yoon Jong-shin, whom also contributed vocally to one song in the extended play.

Upon its release, Talk about S received positive reviews from critics for its "sensual" nature and showcasing Gain's musical flexibility. It also attained commercial success for the singer, becoming her second top-two entry on the Gaon Album Chart and to date, her most best-selling release in South Korea. The extended play also spawned two singles, with "Bloom" becoming one of the singer's signature hits and to date, her most successful single in South Korea, reaching number two on the Gaon Digital Chart. The single eventually received several nominations, notably including the Bonsang Prize at the 22nd Seoul Music Awards and Best Pop Song at the 2012 Korean Music Awards, eventually winning Gain her first award for Song of the Year – October at the 2012 Gaon Chart K-Pop Awards.s.
            </p>
          </div>
          </div>
          </section>
            <Footer />
        </div>
    )
}

export default SingleP
