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
      {/* .................................carousel................ */}
      <section id="carouselSection">
        <div className="container">
          <div
            id="carouselExampleDark"
            class="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                class="active"
                aria-current="true"
                data-bs-slide-to="0"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className="row">
                  <div className="col-md-4">
                    <div class="card p-0" style={{ width: "25rem" }}>
                      {/* col-md-6 col-xl-3 col-lg-4 p-0 */}
                      <img
                        src={newImage}
                        class="card-img-top w-100 hover-zoom"
                        style={{ maxHeight: "15rem" }}
                        alt="..."
                      />
                      <div class="card-img-overlay">
                        <p class="card-text">Last updated 1 mins ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div class="card p-0" style={{ width: "25rem" }}>
                      {/* col-md-6 col-xl-3 col-lg-4 p-0 */}
                      <img
                        src={newImage}
                        class="card-img-top w-100 hover-zoom"
                        style={{ maxHeight: "15rem" }}
                        alt="..."
                      />
                      <div class="card-img-overlay">
                        <p class="card-text">Last updated 1 mins ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div class="card p-0" style={{ width: "25rem" }}>
                      {/* col-md-6 col-xl-3 col-lg-4 p-0 */}
                      <img
                        src={newImage}
                        class="card-img-top w-100 hover-zoom"
                        style={{ maxHeight: "15rem" }}
                        alt="..."
                      />
                      <div class="card-img-overlay">
                        <p class="card-text">Last updated 1 mins ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item ">
                <div className="row">
                  <div className="col-md-4">
                    <div class="card p-0" style={{ width: "25rem" }}>
                      {/* col-md-6 col-xl-3 col-lg-4 p-0 */}
                      <img
                        src={newImage2}
                        class="card-img-top w-100 hover-zoom"
                        style={{ maxHeight: "15rem" }}
                        alt="..."
                      />
                      <div class="card-img-overlay">
                        <p class="card-text">Last updated 1 mins ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div class="card p-0" style={{ width: "25rem" }}>
                      {/* col-md-6 col-xl-3 col-lg-4 p-0 */}
                      <img
                        src={newImage2}
                        class="card-img-top w-100 hover-zoom"
                        style={{ maxHeight: "15rem" }}
                        alt="..."
                      />
                      <div class="card-img-overlay">
                        <p class="card-text">Last updated 1 mins ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div class="card p-0" style={{ width: "25rem" }}>
                      {/* col-md-6 col-xl-3 col-lg-4 p-0 */}
                      <img
                        src={newImage2}
                        class="card-img-top w-100 hover-zoom"
                        style={{ maxHeight: "15rem" }}
                        alt="..."
                      />
                      <div class="card-img-overlay">
                        <p class="card-text">Last updated 1 mins ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item ">
                <div className="row">
                  <div className="col-md-4">
                    <div class="card p-0" style={{ width: "25rem" }}>
                      {/* col-md-6 col-xl-3 col-lg-4 p-0 */}
                      <img
                        src={newImage}
                        class="card-img-top w-100 hover-zoom"
                        style={{ maxHeight: "15rem" }}
                        alt="..."
                      />
                      <div class="card-img-overlay">
                        <p class="card-text">Last updated 1 mins ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div class="card p-0" style={{ width: "25rem" }}>
                      {/* col-md-6 col-xl-3 col-lg-4 p-0 */}
                      <img
                        src="data:image/jpeg;base64,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"
                        class="card-img-top w-100 hover-zoom"
                        style={{ maxHeight: "15rem" }}
                        alt="..."
                      />
                      <div class="card-img-overlay">
                        <p class="card-text">Last updated 1 mins ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div class="card p-0" style={{ width: "25rem" }}>
                      {/* col-md-6 col-xl-3 col-lg-4 p-0 */}
                      <img
                        src="data:image/jpeg;base64,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"
                        class="card-img-top w-100 hover-zoom"
                        style={{ maxHeight: "15rem" }}
                        alt="..."
                      />
                      <div class="card-img-overlay">
                        <p class="card-text">Last updated 1 mins ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
      {/* ......................banneer2..................... */}
      <section id="CardBannar">
        <div className="container">
          <div className="row gap-5 justify-content-center justify-content-lg-start">
            <h2>Popular Search Rooms</h2>
            <RoomDataCard />
          </div>
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
