import Head from 'next/head'
import Link from 'next/link'
import GeneralFooter from "@/components/General/Footer";
import GeneralHeader from "@/components/General/Header";
import MainSlider from "@/components/Slider/MainSlider";

export default function Home() {
  return (
    <>
      <Head>
        <title>Electric Sail Boat</title>
        <meta name="description" content="Electric Sail Boat" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="main" id="top">
        <GeneralHeader />
        <div className="bg-video-wrap">
          <video src="/videos/ElectrictSailBoat.mp4" loop="" muted="1" autoPlay=""></video>
        </div>
        <section className="sed-posuere-consectetur section-padding">
          <div className="container">
            <div className="text-center">
              <h2>Sed posuere consectetur est at lobortis dolor.</h2>
              <p className="sub-title py-2">This is where you will put a description of what this section entails. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed consectetur.</p>
            </div>
            <div className="row g-4 pt-5">
              <div className="col-lg-6">
                <div className="content">
                  <div className="content-overlay" />
                  <img className="content-image" src="/images/img-1.jpg" alt="" loading="lazy" />
                  <div className="content-details fadeIn-top">
                    <a href="#">
                      <h3 className="text-center">Electric<br />Sailing tutorials</h3>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="content">
                  <div className="content-overlay" />
                  <img className="content-image" src="/images/img-4.jpg" alt="" loading="lazy" />
                  <div className="content-details fadeIn-top">
                    <a href="#">
                      <h3 className="text-center">Electric<br />SAILING VENDORS</h3>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="content">
                  <div className="content-overlay" />
                  <img className="content-image" src="/images/img-3.jpg" alt="" loading="lazy" />
                  <div className="content-details fadeIn-top">
                    <a href="#">
                      <h3 className="text-center">Electric<br />Sailing Groups</h3>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="content">
                  <div className="content-overlay" />
                  <img className="content-image" src="/images/img-3.jpg" alt="" loading="lazy" />
                  <div className="content-details fadeIn-top">
                    <Link href="/sailboat">
                      <h3 className="text-center">Electric<br />Sailboat Gallery</h3>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <GeneralFooter />
    </>
  )
}
