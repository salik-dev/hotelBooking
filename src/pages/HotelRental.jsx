import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../config/config';
import useFetch from '../hooks/useFetch';
import ReactPaginate from 'react-paginate';
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import '../styles/pagination.css';
import Helmet from '../components/Helmet';
import CommonSection from '../components/CommonSection';
import { Container, Row } from 'reactstrap';
import CarCard from '../components/CarCard';

const HotelRental = () => {
  let jsonData = {
    "cars": [
      {
        "id": 1,
        "brand": "Tesla",
        "rating": 112,
        "carName": "Tesla Malibu",
        "imgUrl": "https://www.carrental.kkia.my/wp-content/uploads/2019/11/Honda-HRV-Auto.jpg",
        "model": "Model 3",
        "price": 50,
        "speed": "20kmpl",
        "gps": "GPS Navigation",
        "seatType": "Heated seats",
        "automatic": "Automatic",
        "description": " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        "id": 2,
        "brand": "Toyota",
        "rating": 102,
        "carName": "Toyota Aventador",
        imgUrl: "https://www.carrental.kkia.my/wp-content/uploads/2023/02/Toyota-rush-2023-HD.jpg",
        // "imgUrl": "http://localhost:5000/images/offer-toyota.4b2435e4.png",
        "model": "Model-2022",
        "price": 50,
        "speed": "20kmpl",
        "gps": "GPS Navigation",
        "seatType": "Heated seats",
        "automatic": "Automatic",
        "description": " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        "id": 3,
        "brand": "BMW",
        "rating": 132,
        "carName": "BMW X3",
        "imgUrl": "https://www.carrental.kkia.my/wp-content/uploads/2019/11/Honda-HRV-Auto.jpg",
        "model": "Model-2022",
        "price": 65,
        "speed": "20kmpl",
        "gps": "GPS Navigation",
        "seatType": "Heated seats",
        "automatic": "Automatic",
        "description": " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        "id": 4,
        "brand": "Nissan",
        "rating": 102,
        "carName": "Nissan Mercielago",
        "imgUrl": "https://www.carrental.kkia.my/wp-content/uploads/2023/02/Toyota-rush-2023-HD.jpg",
        "model": "Model-2022",
        "price": 70,
        "speed": "20kmpl",
        "gps": "GPS Navigation",
        "seatType": "Heated seats",
        "automatic": "Automatic",
        "description": " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        "id": 5,
        "brand": "Ferrari",
        "rating": 94,
        "carName": "Ferrari Camry",
        "imgUrl": "https://www.carrental.kkia.my/wp-content/uploads/2019/11/Honda-HRV-Auto.jpg",
        "model": "Model-2022",
        "price": 45,
        "speed": "20kmpl",
        "gps": "GPS Navigation",
        "seatType": "Heated seats",
        "automatic": "Automatic",
        "description": " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        "id": 6,
        "brand": "Mercedes",
        "rating": 119,
        "carName": "Mercedes Benz XC90",
        "imgUrl": "https://www.carrental.kkia.my/wp-content/uploads/2023/02/Toyota-rush-2023-HD.jpg",
        "model": "Model-2022",
        "price": 85,
        "speed": "20kmpl",
        "gps": "GPS Navigation",
        "seatType": "Heated seats",
        "automatic": "Automatic",
        "description": " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        "id": 7,
        "brand": "Audi",
        "rating": 82,
        "carName": "Audi Fiesta",
        "imgUrl": "https://www.carrental.kkia.my/wp-content/uploads/2019/11/Honda-HRV-Auto.jpg",
        "model": "Model 3",
        "price": 50,
        "speed": "20kmpl",
        "gps": "GPS Navigation",
        "seatType": "Heated seats",
        "automatic": "Automatic",
        "description": " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        "id": 8,
        "brand": "Colorado",
        "rating": 52,
        "carName": "Rolls Royce Colorado",
        "imgUrl": "https://www.carrental.kkia.my/wp-content/uploads/2023/02/Toyota-rush-2023-HD.jpg",
        "model": "Model 3",
        "price": 50,
        "speed": "20kmpl",
        "gps": "GPS Navigation",
        "seatType": "Heated seats",
        "automatic": "Automatic",
        "description": " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      }
    ],
  }
  const { data: carData, isPending, error } = useFetch(`${BASE_URL}/cars`);

  const [pageNumber, setPageNumber] = useState(0);
  const carPerPage = 6;
  const visitedPage = pageNumber * carPerPage;
  const displayPage = carData
    .slice(visitedPage, visitedPage + carPerPage)
    .map(item => <CarCard item={item} />);

  const pageCount = Math.ceil(carData.length / carPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [carData]);

  return (
    <Helmet title="Car-Listing">
      <section className="pt-0">
        <CommonSection title="Hotel Listing" />
      </section>
      <section className="pt-0">
        <Container>
          <Row style={{ 
            justifyContent: "center"
          }}>
            {/* {isPending && <h6 className="text-center">Loading......</h6>}
            {error && <h6 className="text-center">{error}</h6>} */}
            <div className=" d-flex align-items-center mb-5 gap-3 car__sorting">
              <span className=" d-flex align-items-center  gap-1">
                <i class="ri-sort-asc"></i> Sort By
              </span>
              <select name="" id="">
                <option value="Default">Default</option>
                <option value="Low-High">Price ( Low to High )</option>
                <option value="High-Low">Price ( High to Low )</option>
              </select>
            </div>
            {displayPage}
            {
              Object.keys(jsonData).map((key) => {
                return jsonData[key].map((item, index) => (
                  <ServiceBox item={item} key={index} />
                ));
              })
            }
            <div>
              <ReactPaginate
                previousLabel={'Prev'}
                nextLabel={'Next'}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName="paginationBttns"
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
const ServiceBox = ({ item }) => {
  console.log('servicebox item', item);
  return (
    <Col lg="4" md="4" sm="6" className="mb-3">
      <div className="service__box">
        <span className="mb-3 d-inline-block">
          {/* <i class={item.imgUrl}></i> */}
          <img src={item.imgUrl} alt='car image' style={{
            "width": "85%",
            maxWidth: "61%"
          }} />
        </span>
        <h6>
          <Link to={`/service-details/${item.id}`}>{item.carName}</Link>
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

export default HotelRental;
