import './scss/KMS.scss';
import 'swiper/swiper-bundle.css'; // Swiper 스타일 시트 import
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'; // Swiper 필수 모듈 import
import { Swiper, SwiperSlide } from 'swiper/react'; // Swiper 컴포넌트 import

import 'aos/dist/aos'

const App = () => {
const mytext ='내가 이집의 주인공' 
  return <div className="App">
      {mytext}이랍니다.
    </div>
  ;
}

const App2 = () => {
  const 오늘평가날 = 627
  return (
    <div className="App">
      <h1>리엑트훈련</h1>
      {
        오늘평가날 == 627&&
        <div>
          오늘은 평가날입니다.
        </div>
      }
    </div>
  );
}

export { App , App2}


