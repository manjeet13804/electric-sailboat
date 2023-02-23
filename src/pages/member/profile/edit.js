import Head from 'next/head'
import Link from 'next/link'
import AdminSidebar from "@/components/General/AdminSidebar";
import AdminHeader from "@/components/General/AdminHeader";
import AdminFooter from "@/components/General/AdminFooter";

export default function MemberProfileEdit() {
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
                    <h4 className="page-title mb-0 font-size-18">Member Edit Profile</h4>
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
                      <div className="profile-widgets py-3">
                        <div className="text-center">
                          <div>
                            <img src="/images/users/avatar-2.jpg" alt="avatar-2" className="avatar-lg mx-auto img-thumbnail rounded-circle" />
                          </div>
                          <div className="mt-3 ">
                            <button type="button" className="btn btn-dark waves-effect waves-light">Upload Photo</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-8">
                  <div className="card">
                    <div className="card-body">
                      <div className="mb-3 row">
                        <label htmlFor="example-text-input" className="col-md-2 col-4 col-form-label">First Name</label>
                        <label htmlFor="example-text-input" className="col-md-1 col-1 col-form-label">:</label>
                        <div className="col-md-9 col-6">
                          <input className="form-control" type="text" defaultValue="Patrick" id="example-text-input" />
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="example-text-input" className="col-md-2 col-4 col-form-label">Last Name</label>
                        <label htmlFor="example-text-input" className="col-md-1 col-1 col-form-label">:</label>
                        <div className="col-md-9 col-6">
                          <input className="form-control" type="text" defaultValue="Becker" id="example-text-input" />
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="example-text-input" className="col-md-2 col-4 col-form-label">Gender</label>
                        <label htmlFor="example-text-input" className="col-md-1 col-1 col-form-label">:</label>
                        <div className="col-md-9 col-6">
                          <select className="form-select" aria-label="Default select example">
                            <option>Select</option>
                            <option selected>Male</option>
                            <option>Female</option>
                          </select>
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="example-text-input" className="col-md-2 col-4 col-form-label">Age</label>
                        <label htmlFor="example-text-input" className="col-md-1 col-1 col-form-label">:</label>
                        <div className="col-md-9 col-6">
                          <input className="form-control" type="text" defaultValue="38 Years" id="example-text-input" />
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="example-text-input" className="col-md-2 col-4 col-form-label">Email</label>
                        <label htmlFor="example-text-input" className="col-md-1 col-1 col-form-label">:</label>
                        <div className="col-md-9 col-6">
                          <input className="form-control" type="text" defaultValue="patrickbecker@gmail.com" id="example-text-input" />
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="example-text-input" className="col-md-2 col-4 col-form-label">Phone</label>
                        <label htmlFor="example-text-input" className="col-md-1 col-1 col-form-label">:</label>
                        <div className="col-md-9 col-6">
                          <input className="form-control" type="text" defaultValue="+1 987 4561 2305" id="example-text-input" />
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="example-text-input" className="col-md-2 col-4 col-form-label">City</label>
                        <label htmlFor="example-text-input" className="col-md-1 col-1 col-form-label">:</label>
                        <div className="col-md-9 col-6">
                          <input className="form-control" type="text" defaultValue="Edison" id="example-text-input" />
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="example-text-input" className="col-md-2 col-4 col-form-label">State</label>
                        <label htmlFor="example-text-input" className="col-md-1 col-1 col-form-label">:</label>
                        <div className="col-md-9 col-6">
                          <input className="form-control" type="text" defaultValue="NJ" id="example-text-input" />
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="example-text-input" className="col-md-2 col-4 col-form-label">Zip</label>
                        <label htmlFor="example-text-input" className="col-md-1 col-1 col-form-label">:</label>
                        <div className="col-md-9 col-6">
                          <input className="form-control" type="text" defaultValue={'08837'} id="example-text-input" />
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="example-text-input" className="col-md-2 col-4 col-form-label">Sailing experience</label>
                        <label htmlFor="example-text-input" className="col-md-1 col-1 col-form-label">:</label>
                        <div className="col-md-9 col-6">
                          <div className="row mt-2">
                            <div className="col">
                              <div className="form-check mb-2">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                  Beginner
                                </label>
                              </div>
                            </div>
                            <div className="col">
                              <div className="form-check mb-2">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                  Intermediate
                                </label>
                              </div>
                            </div>
                            <div className="col">
                              <div className="form-check mb-2">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                  Experienced
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="example-text-input" className="col-md-2 col-4 col-form-label">Preferred Type</label>
                        <label htmlFor="example-text-input" className="col-md-1 col-1 col-form-label">:</label>
                        <div className="col-md-9 col-6">
                          <div className="row mt-2">
                            <div className="col">
                              <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                  Day Sailing
                                </label>
                              </div>
                            </div>
                            <div className="col">
                              <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                  Racing
                                </label>
                              </div>
                            </div>
                            <div className="col">
                              <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                  Cruising
                                </label>
                              </div>
                            </div>
                            <div className="col">
                              <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                  Blue Water
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="example-text-input" className="col-md-2 col-4 col-form-label">Household income</label>
                        <label htmlFor="example-text-input" className="col-md-1 col-1 col-form-label">:</label>
                        <div className="col-md-9 col-6">
                          <select className="form-select" aria-label="Default select example">
                            <option>Select</option>
                            <option selected>$100,001 - $150,000</option>
                            <option>$1,000 - $1,500</option>
                          </select>
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="example-text-input" className="col-md-2 col-4 col-form-label">Own a Sailboat</label>
                        <label htmlFor="example-text-input" className="col-md-1 col-1 col-form-label">:</label>
                        <div className="col-md-9 col-6">
                          <div className="row mt-2">
                            <div className="col">
                              <div className="form-check mb-2">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                  Yes
                                </label>
                              </div>
                            </div>
                            <div className="col">
                              <div className="form-check mb-2">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                  No
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="example-text-input" className="col-md-2 col-4 col-form-label">Vendor ID</label>
                        <label htmlFor="example-text-input" className="col-md-1 col-1 col-form-label">:</label>
                        <div className="col-md-9 col-6">
                          <p className="col-form-label fw-semibold">ESB000512</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12 text-end">
                          <button type="button" className="btn btn-danger waves-effect waves-light">Save Profile</button>
                        </div>
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
