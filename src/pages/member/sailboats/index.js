import Head from 'next/head'
import Link from 'next/link'
import AdminSidebar from "@/components/General/AdminSidebar";
import AdminHeader from "@/components/General/AdminHeader";
import AdminFooter from "@/components/General/AdminFooter";

export default function MemberProfile() {
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
                    <h4 className="page-title mb-0 font-size-18">Boat List</h4>
                    <div className="page-title-right">
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item active">Welcome to Electric Sailboat Boat</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="border-bottom">
                        <h4 className="card-title mb-4">Boat List</h4>
                      </div>
                      <div className="table-list">
                        <div className="row border-bottom py-3">
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
                          <div className="col-lg-2 col-3 align-self-center d-none d-lg-block">
                            <a href="" className="btn btn-success btn-md px-3 me-3">View</a>
                            <a href="" className="btn btn-danger btn-md px-3">Delete</a>
                          </div>
                          <div className="col-lg-2 col-3 align-self-center d-lg-none d-sm-block">
                            <a href="" className="btn text-success btn-md px-3 me-3"><i className="far fa-edit" /></a>
                            <a href="" className="btn text-danger btn-md px-3"><i className="fas fa-trash-alt" /></a>
                          </div>
                        </div>
                        <div className="row border-bottom py-3">
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
                          <div className="col-lg-2 col-3 align-self-center d-none d-lg-block">
                            <a href="" className="btn btn-success btn-md px-3 me-3">View</a>
                            <a href="" className="btn btn-danger btn-md px-3">Delete</a>
                          </div>
                          <div className="col-lg-2 col-3 align-self-center d-lg-none d-sm-block">
                            <a href="" className="btn text-success btn-md px-3 me-3"><i className="far fa-edit" /></a>
                            <a href="" className="btn text-danger btn-md px-3"><i className="fas fa-trash-alt" /></a>
                          </div>
                        </div>
                        <div className="row border-bottom py-3">
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
                          <div className="col-lg-2 col-3 align-self-center d-none d-lg-block">
                            <a href="" className="btn btn-success btn-md px-3 me-3">View</a>
                            <a href="" className="btn btn-danger btn-md px-3">Delete</a>
                          </div>
                          <div className="col-lg-2 col-3 align-self-center d-lg-none d-sm-block">
                            <a href="" className="btn text-success btn-md px-3 me-3"><i className="far fa-edit" /></a>
                            <a href="" className="btn text-danger btn-md px-3"><i className="fas fa-trash-alt" /></a>
                          </div>
                        </div>
                        <div className="row border-bottom py-3">
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
                          <div className="col-lg-2 col-3 align-self-center d-none d-lg-block">
                            <a href="" className="btn btn-success btn-md px-3 me-3">View</a>
                            <a href="" className="btn btn-danger btn-md px-3">Delete</a>
                          </div>
                          <div className="col-lg-2 col-3 align-self-center d-lg-none d-sm-block">
                            <a href="" className="btn text-success btn-md px-3 me-3"><i className="far fa-edit" /></a>
                            <a href="" className="btn text-danger btn-md px-3"><i className="fas fa-trash-alt" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3">
                        <ul className="pagination pagination-rounded justify-content-end mb-0">
                          <li className="page-item">
                            <a className="page-link previous-next" href="">Previous</a>
                          </li>
                          <li className="page-item"><a className="page-link" href="">1</a></li>
                          <li className="page-item active"><a className="page-link" href="">2</a></li>
                          <li className="page-item"><a className="page-link" href="">3</a></li>
                          <li className="page-item"><a className="page-link previous-next" href="">Next</a></li>
                        </ul>
                      </div>
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
