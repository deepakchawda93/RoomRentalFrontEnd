import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import home1png from "../../images/home1.svg";
import firstWave from "../../images/wave1.png";
import farnichar from "../../images/farnichar.svg";
import sanitizer from "../../images/sanitizer.png";
import security from "../../images/security1.svg";
import wifi from "../../images/wifi.svg";
import breakfast from "../../images/breakfast.svg";
import water from "../../images/water.svg";
import whyChooseUs from "../../images/whyChooceUs.svg";
import user2 from "../../images/ourClintBoy.jfif";
import user1 from "../../images/ourClintGirl.jfif";
import newImage from "../../images/RoomImage.jpg";
import newImage2 from "../../images/RoomImage2.jpg";
import "./home.css";
import RoomDataCard from "./RoomDataCard";
// floating button

import { Container, Button } from "react-floating-action-button";
import { Link } from "react-router-dom";
import CarouselDesign from "./Carousel/CarouselDesign";

const Home = () => {
  let history = useHistory();
  const cardData = [
    {
      image: farnichar,
      heading: "Best Farnichar for use",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, veniam. Quasi repellendus aliquid officiis laborumqui laboriosam architecto",
    },
    {
      image: sanitizer,
      heading: "Home Sanitisation",
      paragraph:
        " We offers range of sanitation services for home which including proactive measures for surface and spatial disinfection. Check out now!",
    },
    {
      image: security,
      heading: "3-Tier security",
      paragraph:
        "Regardless of where I sleep, whether it’s a hotel, a hostel,an AirBnb, or even my own home, I want to feel safe. It’s non-negotiable.",
    },
    {
      image: water,
      heading: "Ro-water",
      paragraph:
        "Does your hostel serve breakfast? Is it already included in the hostel price? Awesome! You just saved some time and money.",
    },
    {
      image: breakfast,
      heading: "Breakfast",
      paragraph:
        "Does your hostel serve breakfast? Is it already included in the hostel price? Awesome! You just saved some time and money.",
    },
    {
      image: wifi,
      heading: "All Over Wifi",
      paragraph:
        " Having consistent wifi throughout an entire hostel building isnt as critical as having basic security features throughout an entire hostel building, but ",
    },
  ];
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setVisible(true);
    } else if (scrolled <= 100) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);

  const [searchFilter, setsearchFilter] = useState({
    rentPlace: "",
    person: "",
    location: "",
  });
  const handleChangeSearch = (e) => {
    const { name, value } = e.target;
    setsearchFilter({ ...searchFilter, [name]: value });
  };

  var localUserData = JSON.parse(localStorage.getItem("userDetails"));
  console.log(localUserData);
  const SearchFuntion = () => {
    debugger;
    if (localUserData.role == "user" || localUserData.role == "owner") {
      console.log("search");
      history.push(
        `/Search/?rentPlace=${searchFilter.rentPlace}&person=${searchFilter.person}&location=${searchFilter.location}`
      );
    } else {
      console.log("login");
      history.push("/login");
    }
  };

  return (
    <>
      {/* ......................banneer1..................... */}
      <section id="banner1">
        <div className="container">
          <div className="row py-3">
            <div className="col-md-6 order-md-2 d-flex">
              <img
                src={home1png}
                alt=""
                srcset=""
                className="img-fluid  text-center p-4"
              />
            </div>
            <div className="col-md-6 order-md-1">
              <p className="promo_title">
                Find Room|Flats| <span className=" text-warning"> Hostel</span>{" "}
                |PG in easiest <span className=" text-warning"> way</span>
              </p>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                debitis qui illo dolorem quasi dolor perferendis blanditiis
                nulla aliquid maiores voluptatum explicabo nisi vero repellat
                ipsa, laudantium cum error! Modi. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Enim iusto laboriosam ex
                voluptatibus recusandae mollitia amet commodi assumenda quis
                voluptatum cumque asperiores, distinctio impedit voluptatem
                fugit voluptas sed illum reiciendis!
              </p>
              <form
                onSubmit={(e) => {
                  SearchFuntion();
                }}
              >
                <div class="row">
                  <div class="col-md-12 mb-4">
                    <select
                      class="select w-100 px-2 py-3 rounded-2 "
                      name="rentPlace"
                      onChange={handleChangeSearch}
                      required="required"
                    >
                      <option value="">What do you want to search ?</option>
                      <option value="Room">Room</option>
                      <option value="Flat">Flat</option>
                      <option value="Hostel">Hostel</option>
                      <option value="Pg">PG</option>
                    </select>
                  </div>
                  <div class="col-md-6 mb-4">
                    <select
                      class="select w-100 px-2 py-3 rounded-2 "
                      name="person"
                      onChange={handleChangeSearch}
                      required="required"
                    >
                      <option value="">Person</option>
                      <option value="Boys">Boys</option>
                      <option value="Girls">Girls</option>
                    </select>
                  </div>
                  <div class="col-md-6 mb-4">
                    <select
                      class="select w-100 px-2 py-3 rounded-2 "
                      name="location"
                      onChange={handleChangeSearch}
                      required="required"
                    >
                      <option value="">Select Location</option>
                      <option value="1">Old Palasia</option>

                      <option value="3">Bhawarkua Vishnupuri</option>

                      <option value="4">Bhawarkua Tower Chouraha</option>

                      <option value="6">Bhawarkua Bholaram Gate</option>

                      <option value="7">Saket Square</option>

                      <option value="9">Heera Nagar</option>

                      <option value="10">Nipania</option>

                      <option value="11">Manish Baug</option>

                      <option value="13">VijayNagar SCHEME NO. 54</option>

                      <option value="14">Vijay Nagar</option>

                      <option value="15">Scheme No 78</option>

                      <option value="16">GPO Parsi mohalla</option>

                      <option value="20">Mahalakshaminagar </option>

                      <option value="21">New Palasia</option>

                      <option value="22">Khajrana</option>

                      <option value="23">LIG</option>

                      <option value="24">Bapat Square</option>

                      <option value="25">Tilak Nagar</option>

                      <option value="26">Bhawarkua</option>

                      <option value="27">Scheme no. 74, Vijay Nagar</option>

                      <option value="28">Sukhlia</option>

                      <option value="29">Geeta Bhawan</option>

                      <option value="30">New Palasia</option>

                      <option value="31">Malviya Nagar</option>

                      <option value="32">Patnipura</option>

                      <option value="33">Nanda Nagar</option>

                      <option value="34">Bajrang Nagar</option>

                      <option value="35">Shalimar Township</option>

                      <option value="36">Scheme no. 78, Vijay Nagar</option>

                      <option value="37">Dewas Naka</option>
                    </select>
                  </div>

                  <div class="col-md-6  d-grid ">
                    <button type="submit" class="btn btn-success py-3 px-3">
                      Search <i class="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <img src={firstWave} alt="" srcset="" className="firstWave" />
      </section>
     
      {/* ......................banneer2..................... */}
      <section id="CardBannar" className="my-4">
        <div className="container">
          <div className="my-4">
            <h2>Popular Search Rooms</h2>
          </div>
          <div className="row gap-5 justify-content-center justify-content-lg-start">
            <RoomDataCard />
          </div>
        </div>
      </section>
       {/* .................................carousel................ */}
       <section id="carouselSection">
        <div className="container">
          <CarouselDesign />
        </div>
      </section>
      {/* ......................banneer2..................... */}
      {/* <div className="container"> */}
      <section id="banner2">
        <div className="container ">
          <div className="row text-center afterPro">
            <h1>What We Offer ? </h1>
            <p className="TitleOffer">
              Rental Accommodations Designed for Everyone.
            </p>

            {cardData.map((item) => {
              const { paragraph, heading, image } = item;
              return (
                <>
                  <div className="col-lg-4 col-md-6">
                    <div class="mt-4">
                      <img
                        src={image}
                        class="img-fluid service_img "
                        alt="image farnicher"
                      />
                      <div class="card-body">
                        <h2>{heading}</h2>
                        <p>{paragraph}</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}

            <div className="mt-5">
              <button type="button" class="btn btn-primary mar">
                All Services
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* </div> */}
      {/* ..................banner3.............. */}
      <section className="banner3">
        <div className="container">
          <h1 className="text-center">WHY CHOOSE US ?</h1>
          <div className="row">
            <div className="col-md-6 p-4">
              <img
                src={whyChooseUs}
                alt=""
                className="img-fluid text-center"
                srcset=""
              />
            </div>
            <div className="col-md-6 p-4">
              <h1 className="mt-4" style={{ paddingLeft: "30px" }}>
                Why we are different ?
              </h1>
              <ul style={{ listStyle: "none" }}>
                <li>
                  <i class="fas fa-chevron-circle-right"></i> we are believe in
                  strong relationship and bond
                </li>
                <li>
                  <i class="fas fa-chevron-circle-right"></i> Lorem ipsum dolor
                  sit amet, consectetur adipisicing elit. architecto
                </li>
                <li>
                  <i class="fas fa-chevron-circle-right"></i> nostrum nulla quae
                  praesentium quod autem deleniti, quas culpa perferendis sit
                  officia distinctio.
                </li>
                <li>
                  {" "}
                  <i class="fas fa-chevron-circle-right"></i> we are believe in
                  strong relationship and bond
                </li>
                <li>
                  <i class="fas fa-chevron-circle-right"></i> Labore nesciunt
                  eligendi dolore ipsa magnam est voluptatem
                </li>
                <li>
                  {" "}
                  <i class="fas fa-chevron-circle-right"></i> we are believe in
                  strong relationship and bond
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* .....................banner4.................. */}
      <section id="banner4">
        <div className="container">
          <h1 className=" text-center"> WHAT CLIENT SAY</h1>
          <div className="row offset-1">
            <div className="col-md-5 testiminal">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
                aperiam ipsum ducimus animi quas voluptatum asperiores iste,
                quisquam placeat earum libero iusto
              </p>
              <img src={user1} alt="testiminal1" />
              <p className="user_details">
                <b>
                  Agelina <br />
                  Co-founder at ayx
                </b>
              </p>
            </div>
            <div className=" col-md-5 testiminal">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
                aperiam ipsum ducimus animi quas voluptatum asperiores iste,
                quisquam placeat earum libero iusto
              </p>
              <img src={user2} alt="testiminal1" />
              <p className="user_details">
                <b>
                  John Doe <br />
                  Directer at ayx
                </b>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* npm i react-floating-action-button */}
      <div style={{ display: visible ? "inline" : "none" }}>
        <Container>
          <Button
            tooltip="PageUp"
            icon="fas fa-arrow-up"
            onClick={scrollToTop}
          />
        </Container>
      </div>
    </>
  );
};

export default Home;
