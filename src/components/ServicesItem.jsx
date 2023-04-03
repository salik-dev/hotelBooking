import React, { useEffect } from 'react';
import { Col } from 'reactstrap';
import '../styles/servicebox.css';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../config/config';

const ServicesItem = () => {
  let serviceData = {
    "services": [
      {
        "id": 1,
        "title": "City Transfer",
        "icon": "ri-map-pin-2-line",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        "id": 2,
        "title": "Whole  City Tour",
        "icon": "ri-community-line",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        "id": 3,
        "title": "Unlimited Miles Car Rental",
        "icon": "ri-roadster-line",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        "id": 4,
        "title": "Fast & Easy Booking",
        "icon": "ri-timer-flash-line",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        "id": 5,
        "title": "Many Pickup Locations",
        "icon": "ri-map-pin-line",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        "id": 6,
        "title": "Airport Transfer",
        "icon": "ri-flight-takeoff-line",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      }
    ]
  }
  // const { data: services, isPending, error } = useFetch(`${BASE_URL}/services`);
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [services]);
  return (
    <>
      {/* {isPending && <h6 className="text-center">Loading....</h6>}
      {error && <h6 className="text-center">{error}</h6>}
      {services &&
        services.map((item, index) => <ServiceBox item={item} key={index} />)} */}
      {
      Object.keys(serviceData).map((key) => {
        return serviceData[key].map((item, index) => (
          <ServiceBox item={item} key={index} />
        ));
      })  
      }
    </>

  );
};

const ServiceBox = ({ item }) => {
  return (
    <Col lg="4" md="4" sm="6" className="mb-3">
      <div className="service__box">
        <span className="mb-3 d-inline-block">
          <i class={item.icon}></i>
        </span>
        <h6>
          <Link to={`/service-details/${item.id}`}>{item.title}</Link>
        </h6>
        <p className="section__description">
          {item.description.length > 120
            ? item.description.substr(0, 120)
            : item.description}
        </p>
      </div>
    </Col>
  );
};

export default ServicesItem;