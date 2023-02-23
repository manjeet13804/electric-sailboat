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
                    <h4 className="page-title mb-0 font-size-18">Member Profile</h4>
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
                            <div className="online-circle"><i className="fas fa-circle text-success" />
                            </div>
                          </div>
                          <div className="mt-3 ">
                            <a href="" className="text-dark fw-medium font-size-16">Patrick
                              Becker</a>
                            <p className="text-body mt-1 mb-1"> <i className="fas fa-mars" /> Male</p>
                            <Link href="/member/profile/edit" className="btn btn-danger waves-effect waves-light"><i className="far fa-edit" /> Edit Profile</Link>
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
                          <p className="col-form-label fw-semibold">Patrick</p>
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="example-text-input" className="col-md-2 col-4 col-form-label">Last Name</label>
                        <label htmlFor="example-text-input" className="col-md-1 col-1 col-form-label">:</label>
                        <div className="col-md-9 col-6">
                          <p className="col-form-label fw-semibold">Becker</p>
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="example-text-input" className="col-md-2 col-4 col-form-label">Gender</label>
                        <label htmlFor="example-text-input" className="col-md-1 col-1 col-form-label">:</label>
                        <div className="col-md-9 col-6">
                          <p className="col-form-label fw-semibold">Male</p>
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="example-text-input" className="col-md-2 col-4 col-form-label">Age</label>
                        <label htmlFor="example-text-input" className="col-md-1 col-1 col-form-label">:</label>
                        <div className="col-md-9 col-6">
                          <p className="col-form-label fw-semibold">38 Years</p>
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="example-text-input" className="col-md-2 col-4 col-form-label">Email</label>
                        <label htmlFor="example-text-input" className="col-md-1 col-1 col-form-label">:</label>
                        <div className="col-md-9 col-6">
                          <p className="col-form-label fw-semibold">patrickbecker@gmail.com</p>
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="example-text-input" className="col-md-2 col-4 col-form-label">Phone</label>
                        <label htmlFor="example-text-input" className="col-md-1 col-1 col-form-label">:</label>
                        <div className="col-md-9 col-6">
                          <p className="col-form-label fw-semibold">+1 987 4561 2305</p>
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="example-text-input" className="col-md-2 col-4 col-form-label">City</label>
                        <label htmlFor="example-text-input" className="col-md-1 col-1 col-form-label">:</label>
                        <div className="col-md-9 col-6">
                          <p className="col-form-label fw-semibold">Edison</p>
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="example-text-input" className="col-md-2 col-4 col-form-label">State</label>
                        <label htmlFor="example-text-input" className="col-md-1 col-1 col-form-label">:</label>
                        <div className="col-md-9 col-6">
                          <p className="col-form-label fw-semibold">NJ</p>
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="example-text-input" className="col-md-2 col-4 col-form-label">Zip</label>
                        <label htmlFor="example-text-input" className="col-md-1 col-1 col-form-label">:</label>
                        <div className="col-md-9 col-6">
                          <p className="col-form-label fw-semibold">08837</p>
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="example-text-input" className="col-md-2 col-4 col-form-label">Sailing experience</label>
                        <label htmlFor="example-text-input" className="col-md-1 col-1 col-form-label">:</label>
                        <div className="col-md-9 col-6">
                          <p className="col-form-label fw-semibold">Experienced</p>
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="example-text-input" className="col-md-2 col-4 col-form-label">Preferred Type</label>
                        <label htmlFor="example-text-input" className="col-md-1 col-1 col-form-label">:</label>
                        <div className="col-md-9 col-6">
                          <p className="col-form-label fw-semibold">Day Sailing</p>
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="example-text-input" className="col-md-2 col-4 col-form-label">Household income</label>
                        <label htmlFor="example-text-input" className="col-md-1 col-1 col-form-label">:</label>
                        <div className="col-md-9 col-6">
                          <p className="col-form-label fw-semibold">$100,001 - $150,000</p>
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="example-text-input" className="col-md-2 col-4 col-form-label">Own a Sailboat</label>
                        <label htmlFor="example-text-input" className="col-md-1 col-1 col-form-label">:</label>
                        <div className="col-md-9 col-6">
                          <p className="col-form-label fw-semibold">Yes</p>
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="example-text-input" className="col-md-2 col-4 col-form-label">Vendor ID</label>
                        <label htmlFor="example-text-input" className="col-md-1 col-1 col-form-label">:</label>
                        <div className="col-md-9 col-6">
                          <p className="col-form-label fw-semibold">ESB000512</p>
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
