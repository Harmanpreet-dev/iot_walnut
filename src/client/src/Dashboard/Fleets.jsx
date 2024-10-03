import React from "react";
import Fleet from "./Fleet";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Empty } from "antd";

export default function Fleets({ filteredFleets, selectedFleet }) {
  const fleetsLength = filteredFleets?.length;

  return (
    <>
      {fleetsLength ? (
        <Swiper
          modules={[Pagination, Navigation]}
          slidesPerView={filteredFleets.length > 4 ? 4 : filteredFleets.length}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
        >
          {filteredFleets.map((fleet) => (
            <SwiperSlide key={fleet.id}>
              <Fleet fleet={fleet} selectedFleet={selectedFleet} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Empty />
      )}
    </>
  );
}
