import Head from 'next/head'
import Link from 'next/link'
import GeneralFooter from "@/components/General/Footer";
import AuthHeader from "@/components/General/AuthHeader";

export default function SailboatHome() {
  return (
    <>
      <Head>
        <title>Electric Sail Boat</title>
        <meta name="description" content="Electric Sail Boat" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="main" id="top">
        <AuthHeader />
        <section className="banner-home-page p-0">
          <div className="showcase">
            <img src="/images/banner-1.png" className="img-fluid" alt="Picture" />
            <div className="overlay">
              <div className="container">
                <div className="row">
                  <div className="col text-center text-white">
                    <h1 className="h1 text-uppercase text-white py-2">Electric<br />Sailboat Gallery</h1>
                    <h4 className="text-uppercase text-white py-2">Curabitur blandit tempus porttitor.</h4>
                    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
                    <div className="mt-5">
                      <a href="#" className="btn create_your_account">CREATE YOUR ACCOUNT</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sailboat-profiles py-5">
          <div className="container">
            <div className="breadcrumb">
              <div className="d-flex">
                <Link href="/" className="me-3"><i className="fas fa-home" /></Link>
                <p className="text-dark"><i className="fas fa-chevron-right" /></p>
                <span className="menu-text-tab ms-3">Electric Sailboat Gallery</span>
              </div>
            </div>
          </div>
        </section>
        <section className="sailboat-profiles section-padding pt-0">
          <div className="container">
            <div className="text-center">
              <h2 className="text-dark">Sailboat profiles</h2>
              <p className="sub-title py-2">Sailboat profile content. Vestibulum id ligula porta felis euismod semper. Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida at eget metus.</p>
            </div>
            <div className="row g-4 pt-5">
              <div className="col-lg-4">
                <div className="content">
                  <div className="content-overlay" />
                  <img className="content-image" src="/images/browse-all-boats.jpg" alt="" loading="lazy" />
                  <div className="content-details fadeIn-top">
                    <Link href="/sailboat/browse">
                      <h3 className="text-center">Browse all boats</h3>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="content">
                  <div className="content-overlay" />
                  <img className="content-image" src="/images/search.jpg" alt="" loading="lazy" />
                  <div className="content-details fadeIn-top">
                    <Link href="/sailboat/search">
                      <h3 className="text-center">Search</h3>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="content">
                  <div className="content-overlay" />
                  <img className="content-image" src="/images/add-my-boat.jpg" alt="" loading="lazy" />
                  <div className="content-details fadeIn-top">
                    <Link href="/member/sailboats/create">
                      <h3 className="text-center">ADD MY BOAT</h3>
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
