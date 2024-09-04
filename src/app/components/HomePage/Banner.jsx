import next from "next";
import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="carousel w-full mt-12">
        {banners.map((banner, index) => (
          <div
            style={{
              backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${
                index + 1
              }.jpg)`,
            }}
            key={index}
            id={`slide${index + 1}`}
            className="carousel-item rounded-xl relative w-full h-[90vh] bg-top bg-no-repeat bg-cover"
          >
            <div className="h-full w-full flex items-center pl-36">
              <div className="space-y-6">
                <h1 className="text-5xl font-bold">{banner.title}</h1>
                <p>{banner.description}</p>
                <button className="btn btn-primary mr-4">Discover More</button>
                <button className="btn btn-primary btn-outline">Latest Project</button>
              </div>
            </div>
            <div className="absolute flex justify-between transform bottom-12 right-12">
              <a href={banner.prev} className="btn btn-circle mr-6">
                ❮
              </a>
              <a href={banner.next} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const banners = [
  {
    title: "Affordable Price For Car Servicing",
    description:
      "Whether it's routine maintenance or a major repair, our experienced technicians are here to get you back on the road quickly and safely. We offer comprehensive services, from oil changes to engine diagnostics, all backed by our commitment to quality and customer satisfaction. Drive with confidence knowing your vehicle is in expert hands. Book your appointment today!",
    next: "#slide2",
    prev: "#slide4",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "Whether it's routine maintenance or a major repair, our experienced technicians are here to get you back on the road quickly and safely. We offer comprehensive services, from oil changes to engine diagnostics, all backed by our commitment to quality and customer satisfaction. Drive with confidence knowing your vehicle is in expert hands. Book your appointment today!",
    next: "#slide3",
    prev: "#slide1",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "Whether it's routine maintenance or a major repair, our experienced technicians are here to get you back on the road quickly and safely. We offer comprehensive services, from oil changes to engine diagnostics, all backed by our commitment to quality and customer satisfaction. Drive with confidence knowing your vehicle is in expert hands. Book your appointment today!",
    next: "#slide4",
    prev: "#slide2",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "Whether it's routine maintenance or a major repair, our experienced technicians are here to get you back on the road quickly and safely. We offer comprehensive services, from oil changes to engine diagnostics, all backed by our commitment to quality and customer satisfaction. Drive with confidence knowing your vehicle is in expert hands. Book your appointment today!",
    next: "#slide1",
    prev: "#slide3",
  },
];

export default Banner;
