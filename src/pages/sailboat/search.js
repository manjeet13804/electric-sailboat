import Head from 'next/head'
import Link from "next/link";
import GeneralFooter from "@/components/General/Footer";
import AuthHeader from "@/components/General/AuthHeader";

export default function SailboatSearch() {
  return (
    <>
      <Head>
        <title>Electric Sail Boat</title>
        <meta name="description" content="Electric Sail Boat" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="main" id="top">
        <AuthHeader />
        <section className="banner-two-page p-0">
          <div className="showcase">
            <img src="/images/search-sailboat-profiles.jpg" className="img-fluid w-100" alt="Picture" />
            <div className="overlay">
              <div className="container">
                <div className="row">
                  <div className="col text-center text-white">
                    <h1 className="h1 text-uppercase text-white py-2">SEARCH SAILBOAT<br />PROFILES</h1>
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
              <div className="col-lg-4 col-md-6 col-12">
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
              <div className="col-lg-4 col-md-6 col-12">
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
              <div className="col-lg-4 col-md-6 col-12">
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
        <section className="form-box-search section-padding pt-0">
          <div className="container">
            <form>
              <div className="form-section">
                <div className="row g-4 mb-4">
                  <div className="col-lg-4 col-md-6 col-12">
                    <select className="form-select form-control" aria-label="Default select example">
                      <option>Length</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <select className="form-select form-control" aria-label="Default select example">
                      <option>Displacement</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <select className="form-select form-control" aria-label="Default select example">
                      <option>Boat Make</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12 text-center">
                    <label htmlFor="customRange1" className="form-label">Age Range</label>
                    <input type="range" className="form-range" id="customRange1" />
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <select className="form-select form-control" aria-label="Default select example">
                      <option>Motor Size</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <select className="form-select form-control" aria-label="Default select example">
                      <option>Brand of Motor</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <select className="form-select form-control" aria-label="Default select example">
                      <option>Type of Batteries</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="text-center">
                      <label htmlFor="customRange1" className="form-label">Age Range</label>
                    </div>
                    <div className="row text-center">
                      <div className="col-6">
                        <div className="form-check">
                          <input type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                          <label htmlFor="customRange1" className="form-label">Yes</label>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-check">
                          <input type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                          <label htmlFor="customRange1" className="form-label">No</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <select className="form-select form-control" aria-label="Default select example">
                      <option>Genset</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <select className="form-select form-control" aria-label="Default select example">
                      <option>Type of Sailing</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <select className="form-select form-control" aria-label="Default select example">
                      <option>Stage of Project</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <a href="#" className="btn create_your_account w-100">SEARCH</a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
      <GeneralFooter />
    </>
  )
}
