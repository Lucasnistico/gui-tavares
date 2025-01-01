import "./Records.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Record from "../../assets/Images/record.avif";
import Record1 from "../../assets/Images/record1.jpg";
import Record2 from "../../assets/Images/record2.jpg";
import Record3 from "../../assets/Images/record3.jpg";
import Record4 from "../../assets/Images/record4.jpg";

const images = [Record4, Record2, Record3, Record1, Record];

export default function Records() {
  return (
    <section className="records">
      <div className="records__mobile-tablet">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="records__square">
                <img
                  className="records__img"
                  src={img}
                  alt={`Record ${index}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="records__desktop">
        {images.map((img, index) => (
          <div key={index} className="records__square">
            <img className="records__img" src={img} alt={`Record ${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
