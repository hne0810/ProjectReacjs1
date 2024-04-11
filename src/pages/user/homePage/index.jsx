import React, {memo} from "react"
import "./style.scss"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { imageApp } from "../../../asset/user/img/categories";

function Body() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }

    return( 
        <div className="container container__categories__slider">
            <Carousel responsive={responsive} className="categories__slider">
                <div className="categories__slider__item" style={{backgroundImage: `url(${imageApp.Apple})`}}>
                    <p>Táo fresh</p>
                </div>
                <div className="categories__slider__item" style={{backgroundImage: `url(${imageApp.Durian})`}}>
                    <p>Sầu riêng fresh</p>
                </div>
                <div className="categories__slider__item" style={{backgroundImage: `url(${imageApp.Jack})`}}>
                    <p>Mít fresh</p>
                </div>
                <div className="categories__slider__item" style={{backgroundImage: `url(${imageApp.Orange})`}}>
                    <p>Cam fresh</p>
                </div>

            </Carousel>
        </div>
    )
};

export default memo(Body)
