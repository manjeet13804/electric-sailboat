import Link from "next/link";

export default function GeneralFooter() {
    return(
        <footer className="pt-5 dark-background">
            <div className="container">
                <div className="footer-logo mb-5">
                    <img src="/images/logo.svg" alt="footer-logo" className="img-fluid footer-logo-img" />
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12 address-section">
                        <h5 className="text-white">Electric Sailboat Depot, LLC</h5>
                        <p className="text-white">1199 Amboy Ave. Suite 190F5<br />Edison, NJ 08837</p>
                        <p className="text-white">(646) 470-3692</p>
                        <p className="text-white">info@electricsailboat-depot.com</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="footer-menu">
                            <h5 className="text-white">Help and Information</h5>
                            <ul className="ps-0">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Partner Opportunities</a></li>
                                <li><a href="#">Showcase your Boat</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="footer-menu">
                            <h5 className="text-white">Contact Info</h5>
                            <ul className="ps-0">
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms &amp; Conditions</a></li>
                                <li><a href="#">Member Support</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="footer-menu">
                            <h5 className="text-white">Social</h5>
                            <ul className="ps-0">
                                <li><a href="#" className="text-white"><i className="fab fa-facebook-square" /><span className="ms-2">@ESD_Lorem Iqsum</span></a></li>
                                <li><a href="#" className="text-white"><i className="fab fa-twitter" /><span className="ms-2">@ESD_Lorem Iqsum</span></a></li>
                                <li><a href="#" className="text-white"><i className="fab fa-pinterest" /><span className="ms-2">@ESD_Lorem Iqsum</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row address-section">
                    <div className="col-lg-6 col-md-6 col-12">
                        <p className="text-white">© Copyright 2022-2023</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 text-end">
                        <ul className="footer-link ps-0">
                            <li className="me-3"><a href="#" className="text-white">Privacy &amp; Cookies</a></li>
                            <li className="me-3"><a href="#" className="text-white">Accessibility</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            </footer>
    );
}