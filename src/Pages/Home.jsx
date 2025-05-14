import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer/Footer";
import { Link } from "react-router-dom";

function Home() {
  const [designer, setDesigner] = useState();
  useEffect(() => {
    fetch("/design.json")
      .then((res) => res.json())
      .then((data) => setDesigner(data.designers));
  }, []);

  return (
    <div>
      <div className="container-fluid">
        <img src="/images/homebg.png" alt="home" className="w-100" />
      </div>

      <div
        className="container mx-auto banner-section py-4 mt-5"
        style={{ backgroundColor: "#471313", color: "white" }}
      >
        <div className="container mx-auto">
          <div className="row">
            <div className="col-12 pt-5">
              <h2 className="text-center mb-4">
                Imitation Jewellery Manufacturers, Wholesalers in Mumbai, India
              </h2>

              <div className="banner-content mb-4">
                <p className="text-center px-md-5">
                  www.acharya.com is the largest B2B fashion jewellery website
                  focused mainly on high quality imitation jewellery which is
                  authentic. Manse Ratna has its network established world wide,
                  we are imitation jewellery wholesalers and suppliers with
                  setup incountries like United States of America - USA , United
                  Kingdom - UK, Australia, Qatar, Riyadh, Germany, Mauritius and
                  many more. Temple Jewellery, Antique Jewellery,Kundan
                  Jewellery, Polki Jewellery, CZ Jewellery, Kemp Jewellery,
                  Thewa Jewellery, Jadau Jewellery, Fusion Jeweller
                </p>
              </div>

              <div className="text-center d-flex justify-content-around">
                <button className="btn btn-light me-3 mb-2 p-2 mb-md-0">
                  Register With Us
                </button>
                <button className="btn btn-light">Schedule Appointment</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid ordersa mt-4">
        <div className="container mx-auto">
          <h3 className="text-center py-4 fw-semibold fs-2">
            MEHENDI RUST & PAKISTANI COLLECTION
          </h3>
          <div className="divider">
            <div className="divider-circle"></div>
          </div>
          <div className="row mt-5  banner-two mx-auto">
            <div className="col-md-6">
              <img
                src="/images/11.webp"
                className="img-fluid w-75 imagebig mx-auto d-block"
                alt=""
              />
            </div>
            <div className="col-md-6">
              <img
                src="/images/11.jpg"
                className="img-fluid w-75 mx-auto imagebig d-block h-75"
                alt=""
              />
            </div>
          </div>
          <div className="row  banner-two mx-auto ">
            <div className="col-12">
              <img
                src="/images/rec.png"
                className="img-fluid w-100 imagebig d-block mx-auto"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="container banner-three mx-auto mt-2">
          <h3 className="text-center pt-5 pb-2 fw-semibold fs-2">
            BROWSE BY ARTIFICIAL JEWELLERY COLLECTION
          </h3>
          <div className="divider">
            <div className="divider-circle"></div>
          </div>
          <div
            className="category-nav mt-4 py-4"
            style={{ backgroundColor: "#fff5e6" }}
          >
            <div className="container ">
              <div className="row g-4 justify-content-center gap-4">
                {/* Earring */}
                <div className="col-md-2 text-center">
                  <div className="category-item">
                    <Link to="/earring">
                    <img
                      src="/images/13.jpg"
                      alt="Earring"
                      className="rounded-circle mb-2 earring"
                      style={{
                        width: "100%",
                        height: "230px",
                        objectFit: "cover",
                      }}
                    /></Link>
                    <p className="mb-0 fs-3 fw-bold">Earring</p>
                  </div>
                </div>

                {/* Pendant */}
                <div className="col-md-2 text-center">
                  <div className="category-item">
                   <Link to={'/pedant'}>
                    <img
                      src="/images/13.webp"
                      alt="Pendant"
                      className="rounded-circle mb-2 earring"
                      style={{
                        width: "100%",
                        height: "230px",
                        objectFit: "cover",
                      }}
                    />
                   </Link>
                    <p className="mb-0 fs-3 fw-bold">Pendant</p>
                  </div>
                </div>

                {/* Necklace Set */}
                <div className=" col-md-2 text-center">
                  <div className="category-item">
                    <img
                      src="/images/14.jpg"
                      alt="Necklace Set"
                      className="rounded-circle mb-2 earring"
                      style={{
                        width: "100%",
                        height: "230px",
                        objectFit: "cover",
                      }}
                    />
                    <p className="mb-0 fs-3 fw-bold">Necklace Set</p>
                  </div>
                </div>

                {/* Anklet */}
                <div className="col-md-2 text-center">
                  <div className="category-item">
                    <img
                      src="/images/154.jpg"
                      alt="Anklet"
                      className="rounded-circle mb-2 earring"
                      style={{
                        width: "100%",
                        height: "230px",
                        objectFit: "cover",
                      }}
                    />
                    <p className="mb-0 fs-3 fw-bold">Anklet</p>
                  </div>
                </div>

                {/* Necklace */}
                <div className="col-md-2 text-center">
                  <div className="category-item">
                    <img
                      src="/images/09.jpg"
                      alt="Necklace"
                      className="rounded-circle mb-2 earring"
                      style={{
                        width: "100%",
                        height: "230px",
                        objectFit: "cover",
                      }}
                    />
                    <p className="mb-0 fs-3 fw-bold">Necklace</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container banner-four mx-auto mt-2">
          <h3 className="text-center py-4 fw-semibold fs-2">
            DESIGNER JEWELLERY
          </h3>
          <div className="divider">
            <div className="divider-circle"></div>
          </div>
          <div className="row gap-5">
            {designer &&
              designer.map((val, index) => (
                <div
                  className="col-md-4 mx-auto card border-0 mx-2 setwid"
                  key={index}
                  style={{ width: "380px" }}
                >
                  <img
                    src={val.designsrc}
                    alt="Green & Red Kemp chain"
                    className="card-img-top"
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                  <div
                    className="card-body text-center"
                    style={{ backgroundColor: "#4a1c03", color: "white" }}
                  >
                    <h6 className="mb-0 py-3">{val.title}</h6>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="container-fluid py-5 section-background">
          <div className="row justify-content-center">
            <div className="col-12 text-center mb-4">
              <h2 className="section-heading">Imitation Jewellery</h2>
              <div className="heading-underline"></div>
            </div>
            <div className="col-lg-10">
              <div className="row align-items-center rounded-3 shadow-sm">
                <div className="col-md-6 p-0 image-container">
                  <img
                    src="/images/24.webp"
                    alt="CZ Kemp & Temple Jewellery"
                    className="img-fluid rounded image-style d-block mx-auto"
                    style={{ maxWidth: "400px" }}
                  />
                </div>
                <div className="col-md-6 p-4 text-column">
                  <h3 className="text-center section-title">
                    CZ Kemp & Temple Jewellery
                  </h3>
                  <p className="text-start text-muted fs-5 mt-3">
                    Most trending jewellery in South Indian States of India
                    which includes Hyderabad, Telangana, Tamil Nadu, Karnataka,
                    Kerala. South Indian Jewels / Jewellery Collection can now
                    be purchased online at one place for all your Wholesale /
                    Export / reselling needs, this includes Temple Jewellery,
                    Kemp Jewellery, Hyderabadi Jewellery, Kemp Necklace, Temple
                    Jewellery set in Gold & Antique, Temple & Kemp Jhumka &
                    Earrings.
                  </p>
                  <div className="text-center mt-3">
                    <button className="btn btn-lg p-2 explore-button">
                      Explore Collection
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="scroll-container overflow-scroll bg-light p-3">
            <div
              className="d-flex gap-5 setwid"
              style={{ minWidth: "min-content" }}
            >
              <div
                className="card border-0 mx-2 setwid"
                style={{ width: "380px" }}
              >
                <img
                  src="images/35.webp"
                  alt="Green & Red Kemp chain"
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div
                  className="card-body text-center"
                  style={{ backgroundColor: "#4a1c03", color: "white" }}
                >
                  <h6 className="mb-0 py-3">Necklace</h6>
                </div>
              </div>
              <div
                className="card border-0 mx-2 setwid"
                style={{ width: "380px" }}
              >
                <img
                  src="images/34.jpg"
                  alt="Green & Red Kemp chain"
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div
                  className="card-body text-center"
                  style={{ backgroundColor: "#4a1c03", color: "white" }}
                >
                  <h6 className="mb-0 py-3">Necklace with Earrings</h6>
                </div>
              </div>
              <div
                className="card border-0 mx-2 setwid"
                style={{ width: "380px" }}
              >
                <img
                  src="images/33.jpg"
                  alt="Green & Red Kemp chain"
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div
                  className="card-body text-center"
                  style={{ backgroundColor: "#4a1c03", color: "white" }}
                >
                  <h6 className="mb-0 py-3">Stone Necklace</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid py-5 section-background">
          <div className="row justify-content-center">
            <div className="col-12 text-center mb-4">
              <h2 className="section-heading">CNC Bangles</h2>
              <div className="heading-underline"></div>
            </div>
            <div className="col-lg-10">
              <div className="row rounded-3 shadow-sm">
                <div className="col-md-6 p-0 image-container">
                  <img
                    src="/images/35.jpg"
                    alt="CZ Kemp & Temple Jewellery"
                    className="img-fluid rounded image-style d-block mx-auto"
                    style={{ maxWidth: "400px", maxHeight: "350px" }}
                  />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-between p-4 text-column">
                  <h3 className="text-center section-title">CNC Bangles</h3>
                  <p className="text-start text-muted fs-5 mt-3">
                    Gold Forming CNC Bangles
                  </p>
                  <div className="text-center">
                    <button className="btn btn-lg p-2 d-block mx-auto mt-3 explore-button">
                      Explore Collection
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="scroll-container overflow-scroll bg-light p-3">
            <div
              className="d-flex gap-5 setwid"
              style={{ minWidth: "min-content" }}
            >
              <div
                className="card border-0 mx-2 setwid"
                style={{ width: "380px" }}
              >
                <img
                  src="images/46.webp"
                  alt="Green & Red Kemp chain"
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div
                  className="card-body text-center"
                  style={{ backgroundColor: "#4a1c03", color: "white" }}
                >
                  <h6 className="mb-0 py-3">Kundan Bangles</h6>
                </div>
              </div>
              <div
                className="card border-0 mx-2 setwid"
                style={{ width: "380px" }}
              >
                <img
                  src="images/44.jpg"
                  alt="Green & Red Kemp chain"
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div
                  className="card-body text-center"
                  style={{ backgroundColor: "#4a1c03", color: "white" }}
                >
                  <h6 className="mb-0 py-3">Cut Bangles</h6>
                </div>
              </div>
              <div
                className="card border-0 mx-2 setwid"
                style={{ width: "380px" }}
              >
                <img
                  src="images/43.jpg"
                  alt="Green & Red Kemp chain"
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div
                  className="card-body text-center"
                  style={{ backgroundColor: "#4a1c03", color: "white" }}
                >
                  <h6 className="mb-0 py-3">Anitque Bangles</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid py-5 section-background">
          <div className="row justify-content-center">
            <div className="col-12 text-center mb-4">
              <h2 className="section-heading">CZ AD Jeweller</h2>
              <div className="heading-underline"></div>
            </div>
            <div className="col-lg-10">
              <div className="row rounded-3 shadow-sm">
                <div className="col-md-6 p-0 image-container">
                  <img
                    src="/images/45.jpg"
                    alt="CZ Kemp & Temple Jewellery"
                    className="img-fluid rounded image-style d-block mx-auto"
                    style={{ maxWidth: "400px", maxHeight: "350px" }}
                  />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-between p-4 text-column">
                  <h3 className="text-center section-title">CZ AD Jeweller</h3>
                  <p className="text-start text-muted fs-5 mt-3">
                    CZ / American Diamond Premium Quality Setted Jewellery
                  </p>
                  <div className="text-center">
                    <button className="btn btn-lg p-2 d-block mx-auto mt-3 explore-button">
                      Explore Collection
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="scroll-container overflow-scroll bg-light p-3">
            <div
              className="d-flex gap-5 setwid"
              style={{ minWidth: "min-content" }}
            >
              <div
                className="card border-0 mx-2 setwid"
                style={{ width: "380px" }}
              >
                <img
                  src="images/48.jpg"
                  alt="Green & Red Kemp chain"
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div
                  className="card-body text-center"
                  style={{ backgroundColor: "#4a1c03", color: "white" }}
                >
                  <h6 className="mb-0 py-3">Heavy Diamond Necklace</h6>
                </div>
              </div>
              <div
                className="card border-0 mx-2 setwid"
                style={{ width: "380px" }}
              >
                <img
                  src="images/47.webp"
                  alt="Green & Red Kemp chain"
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div
                  className="card-body text-center"
                  style={{ backgroundColor: "#4a1c03", color: "white" }}
                >
                  <h6 className="mb-0 py-3">Bangles</h6>
                </div>
              </div>
              <div
                className="card border-0 mx-2 setwid"
                style={{ width: "380px" }}
              >
                <img
                  src="images/47.png"
                  alt="Green & Red Kemp chain"
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div
                  className="card-body text-center"
                  style={{ backgroundColor: "#4a1c03", color: "white" }}
                >
                  <h6 className="mb-0 py-3">Earring</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid py-5 section-background">
          <div className="row justify-content-center">
            <div className="col-12 text-center mb-4">
              <h2 className="section-heading">Gold Forming Collection</h2>
              <div className="heading-underline"></div>
            </div>
            <div className="col-lg-10">
              <div className="row rounded-3 shadow-sm">
                <div className="col-md-6 p-0 image-container">
                  <img
                    src="/images/61.webp"
                    alt="CZ Kemp & Temple Jewellery"
                    className="img-fluid rounded image-style d-block mx-auto"
                    style={{ maxWidth: "400px", maxHeight: "350px" }}
                  />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-between p-4 text-column">
                  <h3 className="text-center section-title">
                    Gold Forming Collection
                  </h3>
                  <p className="text-start text-muted fs-5 mt-3">
                    Beautiful Turkish Gold Forming Jewelry Collection with
                    latest designs at Manek Ratna. USP of this Turkish Jewelry
                    is that its extremely light weighted.
                  </p>
                  <div className="text-center">
                    <button className="btn btn-lg p-2 d-block mx-auto mt-3 explore-button">
                      Explore Collection
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="scroll-container overflow-scroll bg-light p-3">
            <div
              className="d-flex gap-5 setwid"
              style={{ minWidth: "min-content" }}
            >
              <div
                className="card border-0 mx-2 setwid"
                style={{ width: "380px" }}
              >
                <img
                  src="images/56.jpg"
                  alt="Green & Red Kemp chain"
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div
                  className="card-body text-center"
                  style={{ backgroundColor: "#4a1c03", color: "white" }}
                >
                  <h6 className="mb-0 py-3">Necklace Set</h6>
                </div>
              </div>
              <div
                className="card border-0 mx-2 setwid"
                style={{ width: "380px" }}
              >
                <img
                  src="images/30.jpg"
                  alt="Green & Red Kemp chain"
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div
                  className="card-body text-center"
                  style={{ backgroundColor: "#4a1c03", color: "white" }}
                >
                  <h6 className="mb-0 py-3">Chain Set</h6>
                </div>
              </div>
              <div
                className="card border-0 mx-2 setwid"
                style={{ width: "380px" }}
              >
                <img
                  src="images/57.webp"
                  alt="Green & Red Kemp chain"
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div
                  className="card-body text-center"
                  style={{ backgroundColor: "#4a1c03", color: "white" }}
                >
                  <h6 className="mb-0 py-3">Antique Set</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid py-5 section-background">
          <div className="row justify-content-center">
            <div className="col-12 text-center mb-4">
              <h2 className="section-heading">Oxidized Jewellery</h2>
              <div className="heading-underline"></div>
            </div>
            <div className="col-lg-10">
              <div className="row rounded-3 shadow-sm">
                <div className="col-md-6 p-0 image-container">
                  <img
                    src="/images/62.webp"
                    alt="CZ Kemp & Temple Jewellery"
                    className="img-fluid rounded image-style d-block mx-auto"
                    style={{ maxWidth: "400px", maxHeight: "350px" }}
                  />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-between p-4 text-column">
                  <h3 className="text-center section-title">
                    Oxidized Jewellery
                  </h3>
                  <p className="text-start text-muted fs-5 mt-3">
                    Oxidized Jewelry Fancy Design Guttapusalu Design Fancy Style
                    Oxidised Silver Designer Fancy Guttapusalu Design Beautiful
                    Oxidised Silver Polish Guttapu Beautiful Oxidised Silver
                    Guttapusalu Design Oxidised Temple Jewellery Oxidised Silver
                    God Laxmi Design
                  </p>
                  <div className="text-center">
                    <button className="btn btn-lg p-2 d-block mx-auto mt-3 explore-button">
                      Explore Collection
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="scroll-container overflow-scroll bg-light p-3">
            <div
              className="d-flex gap-5 setwid"
              style={{ minWidth: "min-content" }}
            >
              <div
                className="card border-0 mx-2 setwid"
                style={{ width: "380px" }}
              >
                <img
                  src="images/65.webp"
                  alt="Green & Red Kemp chain"
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div
                  className="card-body text-center"
                  style={{ backgroundColor: "#4a1c03", color: "white" }}
                >
                  <h6 className="mb-0 py-3">Necklace Set</h6>
                </div>
              </div>
              <div
                className="card border-0 mx-2 setwid"
                style={{ width: "380px" }}
              >
                <img
                  src="images/69.webp"
                  alt="Green & Red Kemp chain"
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div
                  className="card-body text-center"
                  style={{ backgroundColor: "#4a1c03", color: "white" }}
                >
                  <h6 className="mb-0 py-3">Jhumka With Pearl</h6>
                </div>
              </div>
              <div
                className="card border-0 mx-2 setwid"
                style={{ width: "380px" }}
              >
                <img
                  src="images/64.webp"
                  alt="Green & Red Kemp chain"
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div
                  className="card-body text-center"
                  style={{ backgroundColor: "#4a1c03", color: "white" }}
                >
                  <h6 className="mb-0 py-3">Necklace Set</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid py-5 section-background">
          <div className="row justify-content-center">
            <div className="col-12 text-center mb-4">
              <h2 className="section-heading">German Silver Jewellery</h2>
              <div className="heading-underline"></div>
            </div>
            <div className="col-lg-10">
              <div className="row rounded-3 shadow-sm">
                <div className="col-md-6 p-0 image-container">
                  <img
                    src="/images/88.webp"
                    alt="CZ Kemp & Temple Jewellery"
                    className="img-fluid rounded image-style d-block mx-auto"
                    style={{ maxWidth: "400px", maxHeight: "350px" }}
                  />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-between p-4 text-column">
                  <h3 className="text-center section-title">
                    Oxidized Jewellery
                  </h3>
                  <p className="text-start text-muted fs-5 mt-3">
                    Exclusive German Silver Jewellery Collection.
                  </p>
                  <div className="text-center">
                    <button className="btn btn-lg p-2 d-block mx-auto mt-3 explore-button">
                      Explore Collection
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="scroll-container overflow-scroll bg-light p-3">
            <div
              className="d-flex gap-5 setwid"
              style={{ minWidth: "min-content" }}
            >
              <div
                className="card border-0 mx-2 setwid"
                style={{ width: "380px" }}
              >
                <img
                  src="images/96.webp"
                  alt="Green & Red Kemp chain"
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div
                  className="card-body text-center"
                  style={{ backgroundColor: "#4a1c03", color: "white" }}
                >
                  <h6 className="mb-0 py-3">Blue Stone Silver Chain</h6>
                </div>
              </div>
              <div
                className="card border-0 mx-2 setwid"
                style={{ width: "380px" }}
              >
                <img
                  src="images/94.jpg"
                  alt="Green & Red Kemp chain"
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div
                  className="card-body text-center"
                  style={{ backgroundColor: "#4a1c03", color: "white" }}
                >
                  <h6 className="mb-0 py-3">Purple Silver Chain Set</h6>
                </div>
              </div>
              <div
                className="card border-0 mx-2 setwid"
                style={{ width: "380px" }}
              >
                <img
                  src="images/89.webp"
                  alt="Green & Red Kemp chain"
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div
                  className="card-body text-center"
                  style={{ backgroundColor: "#4a1c03", color: "white" }}
                >
                  <h6 className="mb-0 py-3">Earing With Beed</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid py-5 section-background">
          <div className="row justify-content-center">
            <div className="col-12 text-center mb-4">
              <h2 className="section-heading">Exclusive Fusion Collection</h2>
              <div className="heading-underline"></div>
            </div>
            <div className="col-lg-10">
              <div className="row rounded-3 shadow-sm">
                <div className="col-md-6 p-0 image-container">
                  <img
                    src="/images/98.webp"
                    alt="CZ Kemp & Temple Jewellery"
                    className="img-fluid rounded image-style d-block mx-auto"
                    style={{ maxWidth: "400px", maxHeight: "350px" }}
                  />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-between p-4 text-column">
                  <h3 className="text-center section-title">
                    Exclusive Fusion Collection
                  </h3>
                  <p className="text-start text-muted fs-5 mt-3">
                    Gold Forming CNC Bangles.
                  </p>
                  <div className="text-center">
                    <button className="btn btn-lg p-2 d-block mx-auto mt-3 explore-button">
                      Explore Collection
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="scroll-container overflow-scroll bg-light p-3">
            <div
              className="d-flex gap-5 setwid"
              style={{ minWidth: "min-content" }}
            >
              <div
                className="card border-0 mx-2 setwid"
                style={{ width: "380px" }}
              >
                <img
                  src="images/102.jpeg"
                  alt="Green & Red Kemp chain"
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div
                  className="card-body text-center"
                  style={{ backgroundColor: "#4a1c03", color: "white" }}
                >
                  <h6 className="mb-0 py-3">Tribal Necklace Set</h6>
                </div>
              </div>
              <div
                className="card border-0 mx-2 setwid"
                style={{ width: "380px" }}
              >
                <img
                  src="images/101.webp"
                  alt="Green & Red Kemp chain"
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div
                  className="card-body text-center"
                  style={{ backgroundColor: "#4a1c03", color: "white" }}
                >
                  <h6 className="mb-0 py-3">Peacock Necklace</h6>
                </div>
              </div>
              <div
                className="card border-0 mx-2 setwid"
                style={{ width: "380px" }}
              >
                <img
                  src="images/100.jpeg"
                  alt="Green & Red Kemp chain"
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div
                  className="card-body text-center"
                  style={{ backgroundColor: "#4a1c03", color: "white" }}
                >
                  <h6 className="mb-0 py-3">Peacock Earing</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
