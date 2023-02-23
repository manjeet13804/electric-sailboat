import Head from 'next/head'
import Accordion from 'react-bootstrap/Accordion';
import GeneralFooter from "@/components/General/Footer";
import AuthHeader from "@/components/General/AuthHeader";
import MediaSlider from "@/components/Slider/MediaSlider";
import Link from "next/link";

export default function SailboatDetails() {
  return (
    <>
      <Head>
        <title>Electric Sail Boat</title>
        <meta name="description" content="Electric Sail Boat" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="main" id="top">
        <AuthHeader />
        <section className="sailboat-profiles section-padding pb-5">
          <div className="container">
            <div className="breadcrumb">
              <div className="d-flex">
                <Link href="/" className="me-3"><i className="fas fa-home" /></Link>
                <p className="text-dark"><i className="fas fa-chevron-right" /></p>
                <Link href="/sailboat/search" className="menu-text-tab mx-3">Search</Link>
                <p className="text-dark"><i className="fas fa-chevron-right" /></p>
                <Link href="/sailboat/browse" className="menu-text-tab mx-3">Results</Link>
                <p className="text-dark"><i className="fas fa-chevron-right" /></p>
                <span className="menu-text-tab ms-3">Sun Odyssey 440</span>
              </div>
            </div>
          </div>
        </section>
        <section className="likes-favorites-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h4 className="fs-cg">Jeanneau</h4>
              </div>
              <div className="col-lg-6 text-lg-end">
                <div className="d-inline-flex align-items-center">
                  <div className="likes me-3">
                    <p><span className="text-dark align-middle"><i className="fas fa-thumbs-up fs-3" /></span> <span className="fw-bold align-middle">12,345</span> <span className="align-middle">Likes</span></p>
                  </div>
                  <div className="heart">
                    <p><span className="text-red align-middle"><i className="far fa-heart fs-3 align-middle" /></span> <span className="fw-bold align-middle">56,789,012</span> <span>Favorites</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bot-view-details">
          <div className="container">
            <div className="title-text">
              <h2 className="fs-gotham fs-gotham-400 text-uppercase">1892 - Sun Odyssey 440</h2>
            </div>
            <div className="row mt-4">
              <div className="col-lg-6">
                <div className="boat-full-img">
                  <img src="/images/boat-img-view.jpg" alt="full Image" className="img-fluid w-100" />
                </div>
                <div className="row mt-3">
                  <div className="col-md-3 col-3">
                    <img src="/images/boat-img.jpg" alt="img" className="img-fluid w-100" />
                  </div>
                  <div className="col-md-3 col-3">
                    <img src="/images/boat-img.jpg" alt="img" className="img-fluid w-100" />
                  </div>
                  <div className="col-md-3 col-3">
                    <img src="/images/boat-img.jpg" alt="img" className="img-fluid w-100" />
                  </div>
                  <div className="col-md-3 col-3">
                    <img src="/images/boat-img.jpg" alt="img" className="img-fluid w-100" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-md-6 col-12 py-1">
                    <div className="title-text">
                      <p>LOA:</p>
                      <h4>43 ft 11 in</h4>
                    </div>
                  </div>
                  <div className="col-md-6 col-12 py-1">
                    <div className="title-text">
                      <p>Displacement:</p>
                      <h4>Monohull</h4>
                    </div>
                  </div>
                  <div className="col-md-6 col-12 py-1">
                    <div className="title-text">
                      <p>Motor:</p>
                      <h4>inboard</h4>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="title-text">
                      <p>Battery Brand:</p>
                      <h4>Yanmar</h4>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="title-text">
                      <p>Battery Type:</p>
                      <h4>8 cell</h4>
                    </div>
                  </div>
                  <div className="col-md-12 py-1">
                    <div className="title-text">
                      <p>Solar Panel:</p>
                      <h4>Photonic Universe - Model 123b</h4>
                    </div>
                  </div>
                  <div className="col-md-6 col-12 py-1">
                    <div className="title-text">
                      <p>Wind Generator:</p>
                      <h4>three-bladed</h4>
                    </div>
                  </div>
                  <div className="col-md-6 col-12 py-1">
                    <div className="title-text">
                      <p>Genset:</p>
                      <h4>Portable</h4>
                    </div>
                  </div>
                  <div className="col-md-6 col-12 py-1">
                    <div className="title-text">
                      <p>Controller:</p>
                      <h4>Lorem Ipsum</h4>
                    </div>
                  </div>
                  <div className="col-md-6 col-12 py-1">
                    <div className="title-text">
                      <p>Type of Sailing:</p>
                      <h4>Cruising</h4>
                    </div>
                  </div>
                  <div className="col-md-12 py-1">
                    <div className="title-text">
                      <p>Description:</p>
                      <p className="fs-gotham-18 mt-3">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum
                        nulla sed consectetur. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue... <span className="text-uppercase fs-gotham fs-gotham-800"><a className="text-danger" href="#">READ MORE</a></span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="question-section">
          <div className="container">
            <Accordion className="accordion accordion-flush">
              <Accordion.Item className="accordion-item my-4" eventKey="0">
                <Accordion.Header className="accordion-header fs-cg-800">
                  <span className="fs-cg-800">Question #1</span>
                </Accordion.Header>
                <Accordion.Body className="accordion-body">
                  <p>The 440 launched the proprietary Walk Around Decks, an incredible feature that has been incorporated in every successive design. This, combined with unobstructed side decks from bow to stern make movement on deck easier than ever before. The huge cockpit is perfect for entertaining guests, and the convertible cockpit lounge turns the aft eight feet of the boat into a gigantic sunpad!</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="accordion-item my-4" eventKey="1">
                <Accordion.Header className="accordion-header fs-cg-800">
                  <span className="fs-cg-800">Question #2</span>
                </Accordion.Header>
                <Accordion.Body>
                  <p>The 440 launched the proprietary Walk Around Decks, an incredible feature that has been incorporated in every successive design. This, combined with  unobstructed side decks from bow to stern make movement on deck easier than ever before. The huge cockpit is perfect for entertaining guests, and the convertible cockpit lounge turns the aft eight feet of the boat into a gigantic sunpad!</p>
                  <p>The 440 launched the proprietary Walk Around Decks, an incredible feature that has been incorporated in every successive design. This, combined with  unobstructed side decks from bow to stern make movement on deck easier than ever before. The huge cockpit is perfect for entertaining guests, and the convertible cockpit lounge turns the aft eight feet of the boat into a gigantic sunpad!</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="accordion-item my-4" eventKey="2">
                <Accordion.Header className="accordion-header fs-cg-800">
                  <span className="fs-cg-800">Question #3</span>
                </Accordion.Header>
                <Accordion.Body className="accordion-body">
                  <p>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </section>
        <section className="photos-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-12 align-self-center">
                <h4 className="fs-cg fs-cg-800 fs-cg-42 text-uppercase mb-0">Photos</h4>
              </div>
              <div className="col-lg-3 col-12 text-end align-self-center">
                <div className="row align-items-center">
                  <div className="col-6 photo-video-filter">
                    <select className="form-select" aria-label="Default select example">
                      <option>SORT</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </div>
                  <div className="col-6 photo-video-filter">
                    <select className="form-select" aria-label="Default select example">
                      <option>FILTER</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <MediaSlider />
          </div>
        </section>
        <section className="videos-section mt-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-4 align-self-center">
                <h4 className="fs-cg fs-cg-800 fs-cg-42 text-uppercase mb-0">Videos</h4>
              </div>
              <div className="col-lg-3 col-12 text-end align-self-center">
                <div className="row align-items-center">
                  <div className="col-6 photo-video-filter">
                    <select className="form-select" aria-label="Default select example">
                      <option>SORT</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </div>
                  <div className="col-6 photo-video-filter">
                    <select className="form-select" aria-label="Default select example">
                      <option>FILTER</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <MediaSlider />
          </div>
        </section>
        <section className="comment-section py-5">
          <div className="container">
            <div className="comment-section-scroll border">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-12">
                  <div>
                    <div className="card-body p-4">
                      <div className="row mb-3">
                        <div className="col-lg-9 col-4 align-self-center">
                          <h4 className="fs-gotham fs-gotham-18 fs-gotham-800  text-uppercase mb-0">Videos</h4>
                        </div>
                        <div className="col-lg-3 col-12 text-end align-self-center">
                          <div className="row align-items-center">
                            <div className="col-6 photo-video-filter">
                              <select className="form-select" aria-label="Default select example">
                                <option>SORT</option>
                                <option value={1}>One</option>
                                <option value={2}>Two</option>
                                <option value={3}>Three</option>
                              </select>
                            </div>
                            <div className="col-6 photo-video-filter">
                              <select className="form-select" aria-label="Default select example">
                                <option>FILTER</option>
                                <option value={1}>One</option>
                                <option value={2}>Two</option>
                                <option value={3}>Three</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="d-flex flex-start">
                            <div className="flex-grow-1 flex-shrink-1">
                              <div className="bg-white comment-box p-3">
                                <div className="d-flex justify-content-between align-items-center">
                                  <p className="mb-1"><img className="rounded-circle shadow-1-strong me-2" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar" width={32} height={32} /> <span className="fs-gotham-800">Capt. Ron</span>                                                                <span className="small">1 month ago</span>
                                  </p>
                                  <div>
                                    <a className="me-3" href="#"><i className="fas fa-exclamation-triangle" /></a>
                                    <a className="me-3" href="#"><i className="fas fs-gotham-20 fa-thumbs-up" /></a>
                                    <a className="me-3" href="#!"><i className="fas fa-reply" /><span className="fs-gotham-800"> Reply</span></a>
                                  </div>
                                </div>
                                <p className="small mb-0">
                                  Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
                                  Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut... SEE MORE
                                </p>
                              </div>
                              {/*A*/}
                              <div className="border-start-red ms-2">
                                <div className="bg-white d-flex flex-start mt-5 p-3 ms-2">
                                  <div className="flex-grow-1 flex-shrink-1">
                                    <div>
                                      <div className="d-flex justify-content-between align-items-center">
                                        <p className="mb-1"><img className="rounded-circle shadow-1-strong me-2" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar" width={32} height={32} /> <span className="fs-gotham-800">Capt. Ron</span>                                                                            <span className="small">1 month ago</span>
                                        </p>
                                        <div>
                                          <a className="me-3" href="#"><i className="fas fa-exclamation-triangle" /></a>
                                          <a className="me-3" href="#"><i className="fas fs-gotham-20 fa-thumbs-up" /></a>
                                          <a className="me-3" href="#!"><i className="fas fa-reply" /><span className="fs-gotham-800"> Reply</span></a>
                                        </div>
                                      </div>
                                      <p className="small mb-0">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Curabitur
                                        blandit tempus porttitor.</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="ms-2">
                                  <div className="border-start-green reply-3 ms-2">
                                    <div className="bg-white comment-box d-flex flex-start mt-5 p-3 ms-2">
                                      <div className="flex-grow-1 flex-shrink-1">
                                        <div>
                                          <div className="d-flex justify-content-between align-items-center">
                                            <p className="mb-1"><img className="rounded-circle shadow-1-strong me-2" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar" width={32} height={32} /> <span className="fs-gotham-800">Capt. Ron</span>                                                                                    <span className="small">1 month ago</span>
                                            </p>
                                            <div>
                                              <a className="me-3" href="#"><i className="fas fa-exclamation-triangle" /></a>
                                              <a className="me-3" href="#"><i className="fas fs-gotham-20 fa-thumbs-up" /></a>
                                              <a className="me-3" href="#!"><i className="fas fa-reply" /><span className="fs-gotham-800"> Reply</span></a>
                                            </div>
                                          </div>
                                          <p className="small mb-0">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper.
                                            Curabitur blandit tempus porttitor.</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="ms-2">
                                      <div className="border-start-gray reply-3 ms-2">
                                        <div className="bg-white comment-box d-flex flex-start mt-5 p-3 ms-2">
                                          <div className="flex-grow-1 flex-shrink-1">
                                            <div>
                                              <div className="d-flex justify-content-between align-items-center">
                                                <p className="mb-1"><img className="rounded-circle shadow-1-strong me-2" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar" width={32} height={32} /> <span className="fs-gotham-800">Capt. Ron</span>                                                                                            <span className="small">1 month ago</span>
                                                </p>
                                                <div>
                                                  <a className="me-3" href="#"><i className="fas fa-exclamation-triangle" /></a>
                                                  <a className="me-3" href="#"><i className="fas fs-gotham-20 fa-thumbs-up" /></a>
                                                  <a className="me-3" href="#!"><i className="fas fa-reply" /><span className="fs-gotham-800"> Reply</span></a>
                                                </div>
                                              </div>
                                              <p className="small mb-0">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod
                                                semper. Curabitur blandit tempus porttitor.</p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="ms-2">
                                          <div className="border-start-blue reply-3 ms-2">
                                            <div className="bg-white comment-box d-flex flex-start mt-5 p-3 ms-2">
                                              <div className="flex-grow-1 flex-shrink-1">
                                                <div>
                                                  <div className="d-flex justify-content-between align-items-center">
                                                    <p className="mb-1"><img className="rounded-circle shadow-1-strong me-2" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar" width={32} height={32} />
                                                      <span className="fs-gotham-800">Capt. Ron</span> <span className="small">1 month ago</span>
                                                    </p>
                                                    <div>
                                                      <a className="me-3" href="#"><i className="fas fa-exclamation-triangle" /></a>
                                                      <a className="me-3" href="#"><i className="fas fs-gotham-20 fa-thumbs-up" /></a>
                                                      <a className="me-3" href="#!"><i className="fas fa-reply" /><span className="fs-gotham-800"> Reply</span></a>
                                                    </div>
                                                  </div>
                                                  <p className="small mb-0">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis
                                                    euismod semper. Curabitur blandit tempus porttitor.</p>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="ms-2">
                                              <div className="border-start-black reply-3 ms-2">
                                                <div className="bg-white comment-box d-flex flex-start mt-5 p-3 ms-2">
                                                  <div className="flex-grow-1 flex-shrink-1">
                                                    <div>
                                                      <div className="d-flex justify-content-between align-items-center">
                                                        <p className="mb-1"><img className="rounded-circle shadow-1-strong me-2" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar" width={32} height={32} /> <span className="fs-gotham-800">Capt. Ron</span> <span className="small">1 month ago</span>
                                                        </p>
                                                        <div>
                                                          <a className="me-3" href="#"><i className="fas fa-exclamation-triangle" /></a>
                                                          <a className="me-3" href="#"><i className="fas fs-gotham-20 fa-thumbs-up" /></a>
                                                          <a className="me-3" href="#!"><i className="fas fa-reply" /><span className="fs-gotham-800"> Reply</span></a>
                                                        </div>
                                                      </div>
                                                      <p className="small mb-0">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta
                                                        felis euismod semper. Curabitur blandit tempus porttitor.</p>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="bg-white comment-box d-flex flex-start mt-5 p-3 ms-2">
                                                  <div className="flex-grow-1 flex-shrink-1">
                                                    <div>
                                                      <div className="d-flex justify-content-between align-items-center">
                                                        <p className="mb-1"><img className="rounded-circle shadow-1-strong me-2" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar" width={32} height={32} /> <span className="fs-gotham-800">Capt. Ron</span> <span className="small">1 month ago</span>
                                                        </p>
                                                        <div>
                                                          <a className="me-3" href="#"><i className="fas fa-exclamation-triangle" /></a>
                                                          <a className="me-3" href="#"><i className="fas fs-gotham-20 fa-thumbs-up" /></a>
                                                          <a className="me-3" href="#!"><i className="fas fa-reply" /><span className="fs-gotham-800"> Reply</span></a>
                                                        </div>
                                                      </div>
                                                      <p className="small mb-0">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta
                                                        felis euismod semper. Curabitur blandit tempus porttitor.</p>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="bg-white comment-box d-flex flex-start mt-5 p-3 ms-2">
                                              <div className="flex-grow-1 flex-shrink-1">
                                                <div>
                                                  <div className="d-flex justify-content-between align-items-center">
                                                    <p className="mb-1"><img className="rounded-circle shadow-1-strong me-2" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar" width={32} height={32} />
                                                      <span className="fs-gotham-800">Capt. Ron</span> <span className="small">1 month ago</span>
                                                    </p>
                                                    <div>
                                                      <a className="me-3" href="#"><i className="fas fa-exclamation-triangle" /></a>
                                                      <a className="me-3" href="#"><i className="fas fs-gotham-20 fa-thumbs-up" /></a>
                                                      <a className="me-3" href="#!"><i className="fas fa-reply" /><span className="fs-gotham-800"> Reply</span></a>
                                                    </div>
                                                  </div>
                                                  <p className="small mb-0">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis
                                                    euismod semper. Curabitur blandit tempus porttitor.</p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="bg-white comment-box d-flex flex-start mt-5 p-3 ms-2">
                                          <div className="flex-grow-1 flex-shrink-1">
                                            <div>
                                              <div className="d-flex justify-content-between align-items-center">
                                                <p className="mb-1"><img className="rounded-circle shadow-1-strong me-2" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar" width={32} height={32} /> <span className="fs-gotham-800">Capt. Ron</span>                                                                                            <span className="small">1 month ago</span>
                                                </p>
                                                <div>
                                                  <a className="me-3" href="#"><i className="fas fa-exclamation-triangle" /></a>
                                                  <a className="me-3" href="#"><i className="fas fs-gotham-20 fa-thumbs-up" /></a>
                                                  <a className="me-3" href="#!"><i className="fas fa-reply" /><span className="fs-gotham-800"> Reply</span></a>
                                                </div>
                                              </div>
                                              <p className="small mb-0">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod
                                                semper. Curabitur blandit tempus porttitor.</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="bg-white comment-box d-flex flex-start mt-5 p-3 ms-2">
                                      <div className="flex-grow-1 flex-shrink-1">
                                        <div>
                                          <div className="d-flex justify-content-between align-items-center">
                                            <p className="mb-1"><img className="rounded-circle shadow-1-strong me-2" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar" width={32} height={32} /> <span className="fs-gotham-800">Capt. Ron</span>                                                                                    <span className="small">1 month ago</span>
                                            </p>
                                            <div>
                                              <a className="me-3" href="#"><i className="fas fa-exclamation-triangle" /></a>
                                              <a className="me-3" href="#"><i className="fas fs-gotham-20 fa-thumbs-up" /></a>
                                              <a className="me-3" href="#!"><i className="fas fa-reply" /><span className="fs-gotham-800"> Reply</span></a>
                                            </div>
                                          </div>
                                          <p className="small mb-0">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper.
                                            Curabitur blandit tempus porttitor.</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white d-flex flex-start mt-5 p-3 ms-2">
                                  <div className="flex-grow-1 flex-shrink-1">
                                    <div>
                                      <div className="d-flex justify-content-between align-items-center">
                                        <p className="mb-1"><img className="rounded-circle shadow-1-strong me-2" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar" width={32} height={32} /> <span className="fs-gotham-800">Capt. Ron</span>                                                                            <span className="small">1 month ago</span>
                                        </p>
                                        <div>
                                          <a className="me-3" href="#"><i className="fas fa-exclamation-triangle" /></a>
                                          <a className="me-3" href="#"><i className="fas fs-gotham-20 fa-thumbs-up" /></a>
                                          <a className="me-3" href="#!"><i className="fas fa-reply" /><span className="fs-gotham-800"> Reply</span></a>
                                        </div>
                                      </div>
                                      <p className="small mb-0">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Curabitur
                                        blandit tempus porttitor.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/*A*/}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-5">
                        <div className="col-lg-12">
                          <div className="d-flex flex-start">
                            <div className="flex-grow-1 flex-shrink-1">
                              <div className="bg-white comment-box p-3">
                                <div className="d-flex justify-content-between align-items-center">
                                  <p className="mb-1"><img className="rounded-circle shadow-1-strong me-2" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar" width={32} height={32} /> <span className="fs-gotham-800">Capt. Ron</span>                                                                <span className="small">1 month ago</span>
                                  </p>
                                  <div>
                                    <a className="me-3" href="#"><i className="fas fa-exclamation-triangle" /></a>
                                    <a className="me-3" href="#"><i className="fas fs-gotham-20 fa-thumbs-up" /></a>
                                    <a className="me-3" href="#!"><i className="fas fa-reply" /><span className="fs-gotham-800"> Reply</span></a>
                                  </div>
                                </div>
                                <p className="small mb-0">
                                  Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
                                  Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut... SEE MORE
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-5">
                        <div className="col-lg-12">
                          <div className="d-flex flex-start">
                            <div className="flex-grow-1 flex-shrink-1">
                              <div className="bg-white comment-box p-3">
                                <div className="d-flex justify-content-between align-items-center">
                                  <p className="mb-1"><img className="rounded-circle shadow-1-strong me-2" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar" width={32} height={32} /> <span className="fs-gotham-800">Capt. Ron</span>                                                                <span className="small">1 month ago</span>
                                  </p>
                                  <div>
                                    <a className="me-3" href="#"><i className="fas fa-exclamation-triangle" /></a>
                                    <a className="me-3" href="#"><i className="fas fs-gotham-20 fa-thumbs-up" /></a>
                                    <a className="me-3" href="#!"><i className="fas fa-reply" /><span className="fs-gotham-800"> Reply</span></a>
                                  </div>
                                </div>
                                <p className="small mb-0">
                                  Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
                                  Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut... SEE MORE
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-5">
                        <a href="#" className="btn see-more-btn w-100">SEE MORE</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row mt-5">
              <div className="col-lg-12">
                <div className="d-flex">
                  <h4 className="fs-cg fs-cg-28 fs-cg-800 text-uppercase align-middle">Comments as:</h4>
                  <p className="align-middle ps-3 mt-2 fs-cg-800">User123</p>
                </div>
              </div>
              <div className="col-lg-12">
                <form>
                  <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: '100px'}} defaultValue={""} />
                    <label htmlFor="floatingTextarea2">Write your comments here...</label>
                  </div>
                  <div className="mt-3">
                    <a href="#" className="btn create_your_account w-100">POST YOUR COMMENT</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <GeneralFooter />
    </>
  )
}
