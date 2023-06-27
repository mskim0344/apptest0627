import 'swiper/swiper-bundle.css'; // Swiper 스타일 시트 import
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Autoplay, Pagination, Navigation } from "swiper";
const Portfolio = () =>{
    return(
        <>
            <header id="hd" className="fixed-top">
                <div className="d-flex justify-content-between align-items-center container">
                    <h1><a href=""> <img src='img/logo.svg'/></a></h1>
                    <ul id="gnb" className="d-flex ">
                        <li className="p-3"><a href="#about">나의 소개</a></li>
                        <li className="p-3"><a href="#review">나의 작업</a></li>
                        <li className="p-3"><a href="#contact">나의 연락처</a></li>
                    </ul>
                    <ul id="sns" className="d-flex">
                        <li><a href=""><i class="bi bi-git"></i></a></li>
                        <li><a href=""><i class="bi bi-journals"></i></a></li>
                    </ul>

                </div>

            </header>
            <div id="slide" className="vh-100" >
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                >         
                <SwiperSlide><div style={{ background : "url(img/bg1.jpg) no-repeat center"}}></div></SwiperSlide>
                <SwiperSlide><div style={{ background : "url(img/bg2.jpg) no-repeat center"}}></div></SwiperSlide>
                <SwiperSlide><div style={{ background : "url(img/bg3.jpg) no-repeat center"}}></div></SwiperSlide>                
            </Swiper>
            
  

            </div>

            <div id="about" className="vh-100 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-4">1</div>
                        <div className="col-4">2</div>
                        <div className="col-4">3</div>
                    </div>
                </div>
            </div>
            
            
            <div id="review" className="vh-100">
                <div className="container">
                    <div className="row">
                        <div className="col-4">1</div>
                        <div className="col-4">2</div>
                        <div className="col-4">3</div>
                    </div>
                </div>
            </div>

            <div id="contact" className="vh-100 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-4">1</div>
                        <div className="col-4">2</div>
                        <div className="col-4">3</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio