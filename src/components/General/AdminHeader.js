import Link from "next/link";

export default function AdminHeader() {

    return(
        <header id="page-topbar">
          <div className="navbar-header">
            <div className="container-fluid">
              <div className="float-end">
                <div className="dropdown d-none d-sm-inline-block">
                  <Link href="/" className="btn header-item noti-icon waves-effect mt-4">
                    HOME
                  </Link>
                  <a href="#" className="btn header-item noti-icon waves-effect mt-4">
                    BLOG
                  </a>
                </div>
                <div className="dropdown d-inline-block">
                  <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="far fa-envelope" />
                    <span className="badge rounded-pill bg-danger ">3</span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-notifications-dropdown">
                    <div className="p-3">
                      <div className="row align-items-center">
                        <div className="col">
                          <h6 className="m-0"> Messages</h6>
                        </div>
                        <div className="col-auto">
                          <a href="" className="small"> View All</a>
                        </div>
                      </div>
                    </div>
                    <div data-simplebar style={{maxHeight: '230px'}}>
                      <a href="" className="text-reset notification-item">
                        <div className="d-flex align-items-start">
                          <div className="avatar-xs me-3">
                            <span className="avatar-title bg-primary rounded-circle font-size-16">
                              <i className="bx bx-cart" />
                            </span>
                          </div>
                          <div className="flex-1">
                            <h6 className="mb-1">Your order is placed</h6>
                            <div className="font-size-12 text-muted">
                              <p className="mb-1">If several languages coalesce the grammar</p>
                              <p className="mb-0"><i className="mdi mdi-clock-outline" /> 3 min ago</p>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="" className="text-reset notification-item">
                        <div className="d-flex align-items-start">
                          <img src="/images/users/avatar-3.jpg" className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                          <div className="flex-1">
                            <h6 className="mb-1">James Lemire</h6>
                            <div className="font-size-12 text-muted">
                              <p className="mb-1">It will seem like simplified English.</p>
                              <p className="mb-0"><i className="mdi mdi-clock-outline" /> 1 hours ago</p>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="" className="text-reset notification-item">
                        <div className="d-flex align-items-start">
                          <div className="avatar-xs me-3">
                            <span className="avatar-title bg-success rounded-circle font-size-16">
                              <i className="bx bx-badge-check" />
                            </span>
                          </div>
                          <div className="flex-1">
                            <h6 className="mb-1">Your item is shipped</h6>
                            <div className="font-size-12 text-muted">
                              <p className="mb-1">If several languages coalesce the grammar</p>
                              <p className="mb-0"><i className="mdi mdi-clock-outline" /> 3 min ago</p>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="" className="text-reset notification-item">
                        <div className="d-flex align-items-start">
                          <img src="/images/users/avatar-4.jpg" className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                          <div className="flex-1">
                            <h6 className="mb-1">Salena Layfield</h6>
                            <div className="font-size-12 text-muted">
                              <p className="mb-1">As a skeptical Cambridge friend of mine occidental.</p>
                              <p className="mb-0"><i className="mdi mdi-clock-outline" /> 1 hours ago</p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="p-2 border-top d-grid">
                      <a className="btn btn-sm btn-link font-size-14 " href="">
                        <i className="mdi mdi-arrow-right-circle me-1" /> View More..
                      </a>
                    </div>
                  </div>
                </div>
                <div className="dropdown d-inline-block">
                  <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="mdi mdi-bell-outline" />
                    <span className="badge rounded-pill bg-danger ">3</span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-notifications-dropdown">
                    <div className="p-3">
                      <div className="row align-items-center">
                        <div className="col">
                          <h6 className="m-0"> Notifications </h6>
                        </div>
                        <div className="col-auto">
                          <a href="" className="small"> View All</a>
                        </div>
                      </div>
                    </div>
                    <div data-simplebar style={{maxHeight: '230px'}}>
                      <a href="" className="text-reset notification-item">
                        <div className="d-flex align-items-start">
                          <div className="avatar-xs me-3">
                            <span className="avatar-title bg-primary rounded-circle font-size-16">
                              <i className="bx bx-cart" />
                            </span>
                          </div>
                          <div className="flex-1">
                            <h6 className="mb-1">Your order is placed</h6>
                            <div className="font-size-12 text-muted">
                              <p className="mb-1">If several languages coalesce the grammar</p>
                              <p className="mb-0"><i className="mdi mdi-clock-outline" /> 3 min ago</p>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="" className="text-reset notification-item">
                        <div className="d-flex align-items-start">
                          <img src="/images/users/avatar-3.jpg" className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                          <div className="flex-1">
                            <h6 className="mb-1">James Lemire</h6>
                            <div className="font-size-12 text-muted">
                              <p className="mb-1">It will seem like simplified English.</p>
                              <p className="mb-0"><i className="mdi mdi-clock-outline" /> 1 hours ago</p>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="" className="text-reset notification-item">
                        <div className="d-flex align-items-start">
                          <div className="avatar-xs me-3">
                            <span className="avatar-title bg-success rounded-circle font-size-16">
                              <i className="bx bx-badge-check" />
                            </span>
                          </div>
                          <div className="flex-1">
                            <h6 className="mb-1">Your item is shipped</h6>
                            <div className="font-size-12 text-muted">
                              <p className="mb-1">If several languages coalesce the grammar</p>
                              <p className="mb-0"><i className="mdi mdi-clock-outline" /> 3 min ago</p>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="" className="text-reset notification-item">
                        <div className="d-flex align-items-start">
                          <img src="/images/users/avatar-4.jpg" className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                          <div className="flex-1">
                            <h6 className="mb-1">Salena Layfield</h6>
                            <div className="font-size-12 text-muted">
                              <p className="mb-1">As a skeptical Cambridge friend of mine occidental.</p>
                              <p className="mb-0"><i className="mdi mdi-clock-outline" /> 1 hours ago</p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="p-2 border-top d-grid">
                      <a className="btn btn-sm btn-link font-size-14 " href="">
                        <i className="mdi mdi-arrow-right-circle me-1" /> View More..
                      </a>
                    </div>
                  </div>
                </div>
                <div className="dropdown d-inline-block">
                  <Link href="/member/profile" className="btn header-item waves-effect" id="page-header-user-dropdown">
                    <img className="rounded-circle header-profile-user" src="/images/users/avatar-2.jpg" alt="Header Avatar" />
                  </Link>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a className="dropdown-item" href="#"><i className="bx bx-user font-size-16 align-middle me-1" />
                      Profile</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item text-danger" href="#"><i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" /> Logout</a>
                  </div>
                </div>
              </div>
              <div>
                <div className="navbar-brand-box">
                  <Link href="/" className="logo logo-dark">
                    <span className="logo-sm">
                      <img src="/images/logo-sm.svg" alt="logo" height={20} />
                    </span>
                    <span className="logo-lg">
                      <img src="/images/logo-sm-dark.svg" alt="logo" height={17} />
                    </span>
                  </Link>
                  <Link href="/" className="logo logo-light">
                    <span className="logo-sm">
                      <img src="/images/logo-sm.svg" alt="logo" height={25} />
                    </span>
                    <span className="logo-lg">
                      <img src="/images/logo.svg" alt="logo" height={40} />
                    </span>
                  </Link>
                </div>
                <button type="button" className="btn btn-sm px-3 font-size-16 header-item toggle-btn waves-effect" id="vertical-menu-btn">
                  <i className="fa fa-fw fa-bars" />
                </button>
              </div>
            </div>
          </div>
        </header>    
    );
}