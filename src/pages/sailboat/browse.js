import Head from 'next/head'
import Link from "next/link";
import GeneralFooter from "@/components/General/Footer";
import AuthHeader from "@/components/General/AuthHeader";

export default function SailboatList() {
  return (
    <>
      <Head>
        <title>Electric Sail Boat - Browse Sailboats</title>
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
                    <h1 className="h1 text-uppercase text-white py-2">SAILBOAT PROFILE<br />RESULTS</h1>
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
                <Link href="/sailboat/search" className="menu-text-tab mx-3">Search</Link>
                <p className="text-dark"><i className="fas fa-chevron-right" /></p>
                <span className="menu-text-tab mx-3">Results</span>
              </div>
            </div>
          </div>
        </section>
        <section className="sailboat-profiles pb-5">
          <div className="container">
            <div className="text-center">
              <h2 className="text-dark">Sailboats matching you criteria</h2>
              <p className="sub-title py-2">Sailboat profile content. Vestibulum id ligula porta felis euismod semper. Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida at eget metus.</p>
            </div>
            <div className="boat-list-box">
              <div className="boat-list my-3 p-3">
                <div className="row">
                  <div className="col-lg-1 align-self-center">
                    <ul className="boat-list-icon text-center ps-0 mb-0">
                      <li className="py-2"><a href="#"><i className="far fa-heart" /></a></li>
                      <li className="py-2"><a href="#"><i className="far fa-paper-plane" /></a></li>
                      <li className="py-2"><a href="#"><i className="far fa-bell" /></a></li>
                      <li className="py-2"><a href="#"><i className="far fa-thumbs-up" /></a></li>
                    </ul>
                  </div>
                  <div className="col-lg-2 align-self-center">
                    <div className="boat-img">
                      <Link href="/sailboat/1" className="boat-img">
                        <img src="/images/boat-img.jpg" className="img-fluid w-100" alt="Boat Img" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-3 align-self-center py-3">
                    <div className="row">
                      <div className="col-lg-12 col-6">
                        <div className="title-text">
                          <p>Manufacture:</p>
                          <h4>Ford</h4>
                        </div>
                      </div>
                      <div className="col-lg-12 col-6">
                        <div className="title-text">
                          <p>Model:</p>
                          <h4>Alpha</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 align-self-center">
                    <div className="title-text py-4">
                      <p>Displacement:</p>
                      <h4>Lorem Ipsum</h4>
                    </div>
                    <div className="title-text">
                      <div className="row">
                        <div className="col-6">
                          <p>Status:</p>
                          <h4><i className="fas fa-circle" /> Complete</h4>
                        </div>
                        <div className="col-6">
                          <p>&nbsp;</p>
                          <h4 className="deactivate"><i className="far fa-circle" /> In process</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="boat-list my-3 p-3">
                <div className="row">
                  <div className="col-lg-1 align-self-center">
                    <ul className="boat-list-icon text-center ps-0 mb-0">
                      <li className="py-2"><a href="#"><i className="far fa-heart" /></a></li>
                      <li className="py-2"><a href="#"><i className="far fa-paper-plane" /></a></li>
                      <li className="py-2"><a href="#"><i className="far fa-bell" /></a></li>
                      <li className="py-2"><a href="#"><i className="far fa-thumbs-up" /></a></li>
                    </ul>
                  </div>
                  <div className="col-lg-2 align-self-center">
                    <div className="boat-img">
                      <Link href="/sailboat/1" className="boat-img">
                        <img src="/images/boat-img.jpg" className="img-fluid w-100" alt="Boat Img" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-3 align-self-center py-3">
                    <div className="row">
                      <div className="col-lg-12 col-6">
                        <div className="title-text">
                          <p>Manufacture:</p>
                          <h4>Ford</h4>
                        </div>
                      </div>
                      <div className="col-lg-12 col-6">
                        <div className="title-text">
                          <p>Model:</p>
                          <h4>Alpha</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 align-self-center">
                    <div className="title-text py-4">
                      <p>Displacement:</p>
                      <h4>Lorem Ipsum</h4>
                    </div>
                    <div className="title-text">
                      <div className="row">
                        <div className="col-6">
                          <p>Status:</p>
                          <h4><i className="fas fa-circle" /> Complete</h4>
                        </div>
                        <div className="col-6">
                          <p>&nbsp;</p>
                          <h4 className="deactivate"><i className="far fa-circle" /> In process</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="boat-list my-3 p-3">
                <div className="row">
                  <div className="col-lg-1 align-self-center">
                    <ul className="boat-list-icon text-center ps-0 mb-0">
                      <li className="py-2"><a href="#"><i className="far fa-heart" /></a></li>
                      <li className="py-2"><a href="#"><i className="far fa-paper-plane" /></a></li>
                      <li className="py-2"><a href="#"><i className="far fa-bell" /></a></li>
                      <li className="py-2"><a href="#"><i className="far fa-thumbs-up" /></a></li>
                    </ul>
                  </div>
                  <div className="col-lg-2 align-self-center">
                    <div className="boat-img">
                      <Link href="/sailboat/1" className="boat-img">
                        <img src="/images/boat-img.jpg" className="img-fluid w-100" alt="Boat Img" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-3 align-self-center py-3">
                    <div className="row">
                      <div className="col-lg-12 col-6">
                        <div className="title-text">
                          <p>Manufacture:</p>
                          <h4>Ford</h4>
                        </div>
                      </div>
                      <div className="col-lg-12 col-6">
                        <div className="title-text">
                          <p>Model:</p>
                          <h4>Alpha</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 align-self-center">
                    <div className="title-text py-4">
                      <p>Displacement:</p>
                      <h4>Lorem Ipsum</h4>
                    </div>
                    <div className="title-text">
                      <div className="row">
                        <div className="col-6">
                          <p>Status:</p>
                          <h4><i className="fas fa-circle" /> Complete</h4>
                        </div>
                        <div className="col-6">
                          <p>&nbsp;</p>
                          <h4 className="deactivate"><i className="far fa-circle" /> In process</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="boat-list my-3 p-3">
                <div className="row">
                  <div className="col-lg-1 align-self-center">
                    <ul className="boat-list-icon text-center ps-0 mb-0">
                      <li className="py-2"><a href="#"><i className="far fa-heart" /></a></li>
                      <li className="py-2"><a href="#"><i className="far fa-paper-plane" /></a></li>
                      <li className="py-2"><a href="#"><i className="far fa-bell" /></a></li>
                      <li className="py-2"><a href="#"><i className="far fa-thumbs-up" /></a></li>
                    </ul>
                  </div>
                  <div className="col-lg-2 align-self-center">
                    <div className="boat-img">
                      <Link href="/sailboat/1" className="boat-img">
                        <img src="/images/boat-img.jpg" className="img-fluid w-100" alt="Boat Img" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-3 align-self-center py-3">
                    <div className="row">
                      <div className="col-lg-12 col-6">
                        <div className="title-text">
                          <p>Manufacture:</p>
                          <h4>Ford</h4>
                        </div>
                      </div>
                      <div className="col-lg-12 col-6">
                        <div className="title-text">
                          <p>Model:</p>
                          <h4>Alpha</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 align-self-center">
                    <div className="title-text py-4">
                      <p>Displacement:</p>
                      <h4>Lorem Ipsum</h4>
                    </div>
                    <div className="title-text">
                      <div className="row">
                        <div className="col-6">
                          <p>Status:</p>
                          <h4><i className="fas fa-circle" /> Complete</h4>
                        </div>
                        <div className="col-6">
                          <p>&nbsp;</p>
                          <h4 className="deactivate"><i className="far fa-circle" /> In process</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="boat-list my-3 p-3">
                <div className="row">
                  <div className="col-lg-1 align-self-center">
                    <ul className="boat-list-icon text-center ps-0 mb-0">
                      <li className="py-2"><a href="#"><i className="far fa-heart" /></a></li>
                      <li className="py-2"><a href="#"><i className="far fa-paper-plane" /></a></li>
                      <li className="py-2"><a href="#"><i className="far fa-bell" /></a></li>
                      <li className="py-2"><a href="#"><i className="far fa-thumbs-up" /></a></li>
                    </ul>
                  </div>
                  <div className="col-lg-2 align-self-center">
                    <Link href="/sailboat/1" className="boat-img">
                      <img src="/images/boat-img.jpg" className="img-fluid w-100" alt="Boat Img" />
                    </Link>
                  </div>
                  <div className="col-lg-3 align-self-center py-3">
                    <div className="row">
                      <div className="col-lg-12 col-6">
                        <div className="title-text">
                          <p>Manufacture:</p>
                          <h4>Ford</h4>
                        </div>
                      </div>
                      <div className="col-lg-12 col-6">
                        <div className="title-text">
                          <p>Model:</p>
                          <h4>Alpha</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 align-self-center">
                    <div className="title-text py-4">
                      <p>Displacement:</p>
                      <h4>Lorem Ipsum</h4>
                    </div>
                    <div className="title-text">
                      <div className="row">
                        <div className="col-6">
                          <p>Status:</p>
                          <h4><i className="fas fa-circle" /> Complete</h4>
                        </div>
                        <div className="col-6">
                          <p>&nbsp;</p>
                          <h4 className="deactivate"><i className="far fa-circle" /> In process</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="boat-list my-3 p-3">
                <div className="row">
                  <div className="col-lg-1 align-self-center">
                    <ul className="boat-list-icon text-center ps-0 mb-0">
                      <li className="py-2"><a href="#"><i className="far fa-heart" /></a></li>
                      <li className="py-2"><a href="#"><i className="far fa-paper-plane" /></a></li>
                      <li className="py-2"><a href="#"><i className="far fa-bell" /></a></li>
                      <li className="py-2"><a href="#"><i className="far fa-thumbs-up" /></a></li>
                    </ul>
                  </div>
                  <div className="col-lg-2 align-self-center">
                    <div className="boat-img">
                      <Link href="/sailboat/1" className="boat-img">
                        <img src="/images/boat-img.jpg" className="img-fluid w-100" alt="Boat Img" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-3 align-self-center py-3">
                    <div className="row">
                      <div className="col-lg-12 col-6">
                        <div className="title-text">
                          <p>Manufacture:</p>
                          <h4>Ford</h4>
                        </div>
                      </div>
                      <div className="col-lg-12 col-6">
                        <div className="title-text">
                          <p>Model:</p>
                          <h4>Alpha</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 align-self-center">
                    <div className="title-text py-4">
                      <p>Displacement:</p>
                      <h4>Lorem Ipsum</h4>
                    </div>
                    <div className="title-text">
                      <div className="row">
                        <div className="col-6">
                          <p>Status:</p>
                          <h4><i className="fas fa-circle" /> Complete</h4>
                        </div>
                        <div className="col-6">
                          <p>&nbsp;</p>
                          <h4 className="deactivate"><i className="far fa-circle" /> In process</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pagination-section py-5">
              <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                  <li className="page-item">
                    <a className="pagination-previous-btn d-none d-lg-block" href="#" tabIndex={-1} aria-disabled="true"><i className="fas fa-arrow-left me-2" /> Previous</a>
                    <a className="pagination-previous-btn d-lg-none d-md-block" href="#" tabIndex={-1} aria-disabled="true"><i className="fas fa-arrow-left me-2" /></a>
                  </li>
                  <li className="page-item"><a className="pagenumber" href="#">1</a></li>
                  <li className="page-item"><a className="pagenumber active" href="#">2</a></li>
                  <li className="page-item d-none d-lg-block"><a className="pagenumber" href="#">3</a></li>
                  <li className="page-item d-none d-lg-block"><a className="pagenumber" href="#">4</a></li>
                  <li className="page-item d-none d-lg-block"><a className="pagenumber" href="#">5</a></li>
                  <li className="page-item d-none d-lg-block"><a className="pagenumber" href="#">6</a></li>
                  <li className="page-item d-none d-lg-block"><a className="pagenumber" href="#">7</a></li>
                  <li className="page-item d-none d-lg-block"><a className="pagenumber" href="#">8</a></li>
                  <li className="page-item d-none d-lg-block"><a className="pagenumber" href="#">9</a></li>
                  <li className="page-item d-none d-lg-block"><a className="pagenumber" href="#">10</a></li>
                  <li className="page-item">
                    <a className="pagination-previous-btn d-none d-lg-block" href="#">Next <i className="fas fa-arrow-right ms-2" /></a>
                    <a className="pagination-previous-btn d-lg-none d-md-block" href="#"><i className="fas fa-arrow-right ms-2" /></a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>
      </main>
      <GeneralFooter />
    </>
  )
}
