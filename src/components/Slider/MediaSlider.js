import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

export default function MediaSlider() {
    var $ = require("jquery");
    if (typeof window !== "undefined") {
        window.$ = window.jQuery = require("jquery");
    }

    const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
        ssr: false,
    });

    const Responsive = {
        0: {
            items: 2
        },
        576: {
            items: 3
        },
        768: {
            items: 4
        },
        992: {
            items: 6
        }
    };

    const NavText = ['<p><img src="/images/left-arrow.svg" class="img-fluid" alt="Left arrow" /></p>', '<p><img src="/images/right-arrow.svg" class="img-fluid" alt="Right arrow" /></p>'];

    return (
        <OwlCarousel className="owl-carousel logo-slide mt-3" loop margin={20} dots smartSpeed={1000} navText={NavText} responsive={Responsive}>
            <div className="item">
                <img src="/images/boat-img.jpg" className="img-fluid" />
            </div>
            <div className="item">
                <img src="/images/boat-img.jpg" className="img-fluid" />
            </div>
            <div className="item">
                <img src="/images/boat-img.jpg" className="img-fluid" />
            </div>
            <div className="item">
                <img src="/images/boat-img.jpg" className="img-fluid" />
            </div>
            <div className="item">
                <img src="/images/boat-img.jpg" className="img-fluid" />
            </div>
            <div className="item">
                <img src="/images/boat-img.jpg" className="img-fluid" />
            </div>
            <div className="item">
                <img src="/images/boat-img.jpg" className="img-fluid" />
            </div>
            <div className="item">
                <img src="/images/boat-img.jpg" className="img-fluid" />
            </div>
        </OwlCarousel>
    );
}