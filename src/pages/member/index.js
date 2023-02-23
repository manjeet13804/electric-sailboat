import Head from 'next/head'
import Link from 'next/link'
import AdminSidebar from "@/components/General/AdminSidebar";
import AdminHeader from "@/components/General/AdminHeader";
import AdminFooter from "@/components/General/AdminFooter";

export default function MemberHome() {
  return (
    <>
      <Head>
        <title>Dashboard | Electric Sailboat Boat</title>
        <meta name="description" content="Electric Sail Boat" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="container-fluid">
        <div id="layout-wrapper">
          <AdminHeader />
          <AdminSidebar />

          <div className="main-content">
            <div className="page-content">
              <div className="row">
                <div className="col-12">
                  <div className="page-title-box d-flex align-items-center justify-content-between">
                    <h4 className="page-title mb-0 font-size-18">Dashboard</h4>
                    <div className="page-title-right">
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item active">Welcome to Electric Sailboat Boat</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex align-items-start">
                        <div className="avatar-lg me-3">
                          <span className="avatar-title text-primary bg-green">
                            <img src="/images/boat-icon.svg" alt="Boat Icon" />
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="font-size-16 mt-2">Total Boat</div>
                          <h4 className="mt-4">2,456</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex align-items-start">
                        <div className="avatar-lg font-size-48 me-3">
                          <span className="avatar-title bg-red text-primary">
                            <img src="/images/like.svg" alt="Boat Icon" />
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="font-size-16 mt-2">Total Number of likes</div>
                          <h4 className="mt-4">2,456</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex align-items-start">
                        <div className="avatar-lg font-size-48 me-3">
                          <span className="avatar-title bg-blue text-primary">
                            <img src="/images/friends.svg" alt="Boat Icon" />
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="font-size-16 mt-2">Total Friends</div>
                          <h4 className="mt-4">2,456</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-8">
                  <div className="card">
                    <div className="card-body">
                      <div className="border-bottom">
                        <h4 className="card-title mb-4">Recent Add Boat</h4>
                      </div>
                      <div className="table-list">
                        <div className="row border-bottom">
                          <div className="col-lg-2 col-3 align-self-center">
                            <div className="boat-img">
                              <img src="/images/boat-img.jpg" className="img-fluid" alt="Boat Img" />
                            </div>
                          </div>
                          <div className="col-lg-3 col-6 align-self-center py-3">
                            <div className="row">
                              <div className="col-lg-12 d-none d-sm-none d-md-block d-lg-block">
                                <div className="title-text">
                                  <p className="mb-0">Manufacture:</p>
                                  <h5 className="text-uppercase">Ford</h5>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="title-text">
                                  <p className="mb-0">Model:</p>
                                  <h5 className="text-uppercase">Alpha</h5>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-5 col-12 align-self-center d-none d-lg-block">
                            <div className="title-text py-2">
                              <p className="mb-0">Displacement:</p>
                              <h5 className="text-uppercase">Lorem Ipsum</h5>
                            </div>
                            <div className="title-text">
                              <div className="row">
                                <div className="col-6">
                                  <p className="mb-0">Status:</p>
                                  <h5 className="text-uppercase"><i className="fas fa-circle" /> Complete</h5>
                                </div>
                                <div className="col-6">
                                  <p className="mb-0">&nbsp;</p>
                                  <h5 className="deactivate text-uppercase"><i className="far fa-circle" /> In process</h5>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2 col-3 align-self-center">
                            <a href="" className="btn btn-success btn-md px-3">View</a>
                          </div>
                        </div>
                        <div className="row border-bottom">
                          <div className="col-lg-2 col-3 align-self-center">
                            <div className="boat-img">
                              <img src="/images/boat-img.jpg" className="img-fluid" alt="Boat Img" />
                            </div>
                          </div>
                          <div className="col-lg-3 col-6 align-self-center py-3">
                            <div className="row">
                              <div className="col-lg-12 d-none d-sm-none d-md-block d-lg-block">
                                <div className="title-text">
                                  <p className="mb-0">Manufacture:</p>
                                  <h5 className="text-uppercase">Ford</h5>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="title-text">
                                  <p className="mb-0">Model:</p>
                                  <h5 className="text-uppercase">Alpha</h5>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-5 col-12 align-self-center d-none d-lg-block">
                            <div className="title-text py-2">
                              <p className="mb-0">Displacement:</p>
                              <h5 className="text-uppercase">Lorem Ipsum</h5>
                            </div>
                            <div className="title-text">
                              <div className="row">
                                <div className="col-6">
                                  <p className="mb-0">Status:</p>
                                  <h5 className="text-uppercase"><i className="fas fa-circle" /> Complete</h5>
                                </div>
                                <div className="col-6">
                                  <p className="mb-0">&nbsp;</p>
                                  <h5 className="deactivate text-uppercase"><i className="far fa-circle" /> In process</h5>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2 col-3 align-self-center">
                            <a href="" className="btn btn-success btn-md px-3">View</a>
                          </div>
                        </div>
                        <div className="row border-bottom">
                          <div className="col-lg-2 col-3 align-self-center">
                            <div className="boat-img">
                              <img src="/images/boat-img.jpg" className="img-fluid" alt="Boat Img" />
                            </div>
                          </div>
                          <div className="col-lg-3 col-6 align-self-center py-3">
                            <div className="row">
                              <div className="col-lg-12 d-none d-sm-none d-md-block d-lg-block">
                                <div className="title-text">
                                  <p className="mb-0">Manufacture:</p>
                                  <h5 className="text-uppercase">Ford</h5>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="title-text">
                                  <p className="mb-0">Model:</p>
                                  <h5 className="text-uppercase">Alpha</h5>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-5 col-12 align-self-center d-none d-lg-block">
                            <div className="title-text py-2">
                              <p className="mb-0">Displacement:</p>
                              <h5 className="text-uppercase">Lorem Ipsum</h5>
                            </div>
                            <div className="title-text">
                              <div className="row">
                                <div className="col-6">
                                  <p className="mb-0">Status:</p>
                                  <h5 className="text-uppercase"><i className="fas fa-circle" /> Complete</h5>
                                </div>
                                <div className="col-6">
                                  <p className="mb-0">&nbsp;</p>
                                  <h5 className="deactivate text-uppercase"><i className="far fa-circle" /> In process</h5>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2 col-3 align-self-center">
                            <a href="" className="btn btn-success btn-md px-3">View</a>
                          </div>
                        </div>
                        <div className="row border-bottom">
                          <div className="col-lg-2 col-3 align-self-center">
                            <div className="boat-img">
                              <img src="/images/boat-img.jpg" className="img-fluid" alt="Boat Img" />
                            </div>
                          </div>
                          <div className="col-lg-3 col-6 align-self-center py-3">
                            <div className="row">
                              <div className="col-lg-12 d-none d-sm-none d-md-block d-lg-block">
                                <div className="title-text">
                                  <p className="mb-0">Manufacture:</p>
                                  <h5 className="text-uppercase">Ford</h5>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="title-text">
                                  <p className="mb-0">Model:</p>
                                  <h5 className="text-uppercase">Alpha</h5>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-5 col-12 align-self-center d-none d-lg-block">
                            <div className="title-text py-2">
                              <p className="mb-0">Displacement:</p>
                              <h5 className="text-uppercase">Lorem Ipsum</h5>
                            </div>
                            <div className="title-text">
                              <div className="row">
                                <div className="col-6">
                                  <p className="mb-0">Status:</p>
                                  <h5 className="text-uppercase"><i className="fas fa-circle" /> Complete</h5>
                                </div>
                                <div className="col-6">
                                  <p className="mb-0">&nbsp;</p>
                                  <h5 className="deactivate text-uppercase"><i className="far fa-circle" /> In process</h5>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2 col-3 align-self-center">
                            <a href="" className="btn btn-success btn-md px-3">View</a>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3">
                        <ul className="pagination pagination-rounded justify-content-end mb-0">
                          <li className="page-item">
                            <a className="page-link" href="">View More <i className="fas fa-arrow-right" /></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title mb-4">Recents Comments </h4>
                      <ul className="inbox-wid list-unstyled">
                        <li className="inbox-list-item">
                          <a href="">
                            <div className="d-flex align-items-start">
                              <div className="me-3 align-self-center">
                                <img src="/images/users/avatar-3.jpg" alt="avatar-3" className="avatar-sm rounded-circle" />
                              </div>
                              <div className="flex-1 overflow-hidden">
                                <h5 className="font-size-16 mb-1 fw-semibold">John Deo, <span className="font-size-14 fw-medium">commented on your</span> Skyline Boat</h5>
                                <p className="text-truncate mb-0">Hey! there I'm available</p>
                              </div>
                              <div className="font-size-12 ms-auto">
                                05 min
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="inbox-list-item">
                          <a href="">
                            <div className="d-flex align-items-start">
                              <div className="me-3 align-self-center">
                                <img src="/images/users/avatar-3.jpg" alt="avatar-3" className="avatar-sm rounded-circle" />
                              </div>
                              <div className="flex-1 overflow-hidden">
                                <h5 className="font-size-16 mb-1 fw-semibold">John Deo, <span className="font-size-14 fw-medium">commented on your</span> Skyline Boat</h5>
                                <p className="text-truncate mb-0">Hey! there I'm available</p>
                              </div>
                              <div className="font-size-12 ms-auto">
                                05 min
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="inbox-list-item">
                          <a href="">
                            <div className="d-flex align-items-start">
                              <div className="me-3 align-self-center">
                                <img src="/images/users/avatar-3.jpg" alt="avatar-3" className="avatar-sm rounded-circle" />
                              </div>
                              <div className="flex-1 overflow-hidden">
                                <h5 className="font-size-16 mb-1 fw-semibold">John Deo, <span className="font-size-14 fw-medium">commented on your</span> Skyline Boat</h5>
                                <p className="text-truncate mb-0">Hey! there I'm available</p>
                              </div>
                              <div className="font-size-12 ms-auto">
                                05 min
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="inbox-list-item">
                          <a href="">
                            <div className="d-flex align-items-start">
                              <div className="me-3 align-self-center">
                                <img src="/images/users/avatar-3.jpg" alt="avatar-3" className="avatar-sm rounded-circle" />
                              </div>
                              <div className="flex-1 overflow-hidden">
                                <h5 className="font-size-16 mb-1 fw-semibold">John Deo, <span className="font-size-14 fw-medium">commented on your</span> Skyline Boat</h5>
                                <p className="text-truncate mb-0">Hey! there I'm available</p>
                              </div>
                              <div className="font-size-12 ms-auto">
                                05 min
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="inbox-list-item">
                          <a href="">
                            <div className="d-flex align-items-start">
                              <div className="me-3 align-self-center">
                                <img src="/images/users/avatar-3.jpg" alt="avatar-3" className="avatar-sm rounded-circle" />
                              </div>
                              <div className="flex-1 overflow-hidden">
                                <h5 className="font-size-16 mb-1 fw-semibold">John Deo, <span className="font-size-14 fw-medium">commented on your</span> Skyline Boat</h5>
                                <p className="text-truncate mb-0">Hey! there I'm available</p>
                              </div>
                              <div className="font-size-12 ms-auto">
                                05 min
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="inbox-list-item">
                          <a href="">
                            <div className="d-flex align-items-start">
                              <div className="me-3 align-self-center">
                                <img src="/images/users/avatar-3.jpg" alt="avatar-3" className="avatar-sm rounded-circle" />
                              </div>
                              <div className="flex-1 overflow-hidden">
                                <h5 className="font-size-16 mb-1 fw-semibold">John Deo, <span className="font-size-14 fw-medium">commented on your</span> Skyline Boat</h5>
                                <p className="text-truncate mb-0">Hey! there I'm available</p>
                              </div>
                              <div className="font-size-12 ms-auto">
                                05 min
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="inbox-list-item">
                          <a href="">
                            <div className="d-flex align-items-start">
                              <div className="me-3 align-self-center">
                                <img src="/images/users/avatar-3.jpg" alt="avatar-3" className="avatar-sm rounded-circle" />
                              </div>
                              <div className="flex-1 overflow-hidden">
                                <h5 className="font-size-16 mb-1 fw-semibold">John Deo, <span className="font-size-14 fw-medium">commented on your</span> Skyline Boat</h5>
                                <p className="text-truncate mb-0">Hey! there I'm available</p>
                              </div>
                              <div className="font-size-12 ms-auto">
                                05 min
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="inbox-list-item">
                          <a href="">
                            <div className="d-flex align-items-start">
                              <div className="me-3 align-self-center">
                                <img src="/images/users/avatar-3.jpg" alt="avatar-3" className="avatar-sm rounded-circle" />
                              </div>
                              <div className="flex-1 overflow-hidden">
                                <h5 className="font-size-16 mb-1 fw-semibold">John Deo, <span className="font-size-14 fw-medium">commented on your</span> Skyline Boat</h5>
                                <p className="text-truncate mb-0">Hey! there I'm available</p>
                              </div>
                              <div className="font-size-12 ms-auto">
                                05 min
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <AdminFooter />
          </div>
        </div>
      </div>
    </>
  )
}
