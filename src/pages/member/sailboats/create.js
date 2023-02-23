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
                    <h4 className="page-title mb-0 font-size-18">Create Sailboat</h4>
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
                      <div className="row">
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="validationCustom01">Title</label>
                            <input type="text" className="form-control" id="validationCustom01" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="validationCustom01">Year</label>
                            <input type="text" className="form-control" id="validationCustom01" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="validationCustom01">Manufacturer</label>
                            <input type="text" className="form-control" id="validationCustom01" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="validationCustom01">Model</label>
                            <input type="text" className="form-control" id="validationCustom01" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="validationCustom01">Displacement</label>
                            <input type="text" className="form-control" id="validationCustom01" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">Status</label>
                            <select className="form-control form-select mb-3">
                              <option>Select Status</option>
                              <option value="Complete">Complete</option>
                              <option value="In Process">In Process</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="validationCustom01">LOA</label>
                            <input type="text" className="form-control" id="validationCustom01" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="validationCustom01">Motor</label>
                            <input type="text" className="form-control" id="validationCustom01" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="validationCustom01">Solar Panel</label>
                            <input type="text" className="form-control" id="validationCustom01" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="validationCustom01">Wind Generator</label>
                            <input type="text" className="form-control" id="validationCustom01" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="validationCustom01">Genset</label>
                            <input type="text" className="form-control" id="validationCustom01" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="validationCustom01">Controller</label>
                            <input type="text" className="form-control" id="validationCustom01" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="validationCustom01">Type of Sailing</label>
                            <input type="text" className="form-control" id="validationCustom01" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="validationCustom01">Description</label>
                            <div>
                              <textarea required className="form-control" rows={5} defaultValue={""} />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <h4 className="card-title">Frequently Asked Questions</h4>
                            <div className="frequently-asked-questions p-3">
                              <div className="faq-add">
                                <div className="mb-3">
                                  <label className="form-label" htmlFor="validationCustom01">Question</label>
                                  <input type="text" className="form-control" id="validationCustom01" />
                                </div>
                                <div className="mb-3">
                                  <label className="form-label" htmlFor="validationCustom01">Answer</label>
                                  <input type="text" className="form-control" id="validationCustom01" />
                                </div>
                                <div className="row">
                                  <div className="col-lg-6">
                                    <button type="button" className="btn btn-dark waves-effect waves-light">ADD QUESTION</button>
                                  </div>
                                  <div className="col-lg-6 text-end">
                                    <button type="button" className="btn btn-danger waves-effect waves-light">Remove</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <h4 className="card-title">Upload Images</h4>
                            <div>
                              <form action="#" className="dropzone">
                                <div className="fallback">
                                  <input name="file" type="file" />
                                </div>
                                <div className="dz-message needsclick">
                                  <h4>Click here to select images to upload</h4>
                                  <p className="font-size-14">(Or drag images to the page)</p>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <h4 className="card-title">Upload Video</h4>
                            <div>
                              <form action="#" className="dropzone">
                                <div className="fallback">
                                  <input name="file" type="file" />
                                </div>
                                <div className="dz-message needsclick">
                                  <h4>Click here to select videos to upload</h4>
                                  <p className="font-size-14">(Or drag videos to the page)</p>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 text-end">
                          <button type="button" className="btn btn-dark waves-effect waves-light">SAVE DETAILS</button>
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
