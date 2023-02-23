import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

export default function MainSlider() {
    var $ = require("jquery");
    if (typeof window !== "undefined") {
        window.$ = window.jQuery = require("jquery");
    }

    const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
        ssr: false,
    });

    const Responsive = {
        0: {
            items: 1
        }
    };

    return (
        <OwlCarousel className="carousel-single banner-top owl-carousel owl-drag owl-theme" loop margin={0} dots autoplay smartSpeed={1000} responsive={Responsive}>
            <div className="carousel-item w-100 d-flex align-items-center">
                <div className="showcase">
                    <img src="/images/banner-1.png" className="img-fluid" alt="Picture" />
                    <div className="overlay">
                        <div className="container">
                            <div className="row">
                                <div className="col text-center text-white">
                                    <h1 className="h1 text-uppercase text-white py-2">This is the 1st Slide</h1>
                                    <h4 className="text-uppercase text-white py-2">You can change with the dots below</h4>
                                    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
                                    <div className="create_your_mt-5">
                                        <a href="#" className="btn create_your_account">CREATE YOUR ACCOUNT</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item w-100 d-flex align-items-center">
                <div className="showcase">
                    <img src="https://source.unsplash.com/random/1920x1080" alt="Picture" />
                    <div className="overlay">
                        <div className="container">
                            <div className="row">
                                <div className="col text-center text-white">
                                    <h1 className="h1 text-uppercase text-white py-2">This is the 1st Slide</h1>
                                    <h4 className="text-uppercase text-white py-2">You can change with the dots below</h4>
                                    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
                                    <div className="create_your_mt-5">
                                        <a href="#" className="btn create_your_account">CREATE YOUR ACCOUNT</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item w-100 d-flex align-items-center">
                <div className="showcase">
                    <img src="https://source.unsplash.com/random/1920x1080" alt="Picture" />
                    <div className="overlay">
                        <div className="container">
                            <div className="row">
                                <div className="col text-center text-white">
                                    <h1 className="h1 text-uppercase text-white py-2">This is the 1st Slide</h1>
                                    <h4 className="text-uppercase text-white py-2">You can change with the dots below</h4>
                                    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
                                    <div className="create_your_mt-5">
                                        <a href="#" className="btn create_your_account">CREATE YOUR ACCOUNT</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item w-100 d-flex align-items-center">
                <div className="showcase">
                    <img src="https://source.unsplash.com/random/1920x1080" alt="Picture" />
                    <div className="overlay">
                        <div className="container">
                            <div className="row">
                                <div className="col text-center text-white">
                                    <h1 className="h1 text-uppercase text-white py-2">This is the 1st Slide</h1>
                                    <h4 className="text-uppercase text-white py-2">You can change with the dots below</h4>
                                    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
                                    <div className="create_your_mt-5">
                                        <a href="#" className="btn create_your_account">CREATE YOUR ACCOUNT</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </OwlCarousel>
    );
}