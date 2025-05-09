import React from "react";
import Footer from "../Components/Footer/Footer";

function Home() {
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
                <div className="col-4 col-md-2 text-center">
                  <div className="category-item">
                    <img
                      src="/images/13.jpg"
                      alt="Earring"
                      className="rounded-circle mb-2"
                      style={{
                        width: "100%",
                        height: "230px",
                        objectFit: "cover",
                      }}
                    />
                    <p className="mb-0 fs-3 fw-bold">Earring</p>
                  </div>
                </div>

                {/* Pendant */}
                <div className="col-4 col-md-2 text-center">
                  <div className="category-item">
                    <img
                      src="/images/13.webp"
                      alt="Pendant"
                      className="rounded-circle mb-2"
                      style={{
                        width: "100%",
                        height: "230px",
                        objectFit: "cover",
                      }}
                    />
                    <p className="mb-0 fs-3 fw-bold">Pendant</p>
                  </div>
                </div>

                {/* Necklace Set */}
                <div className="col-4 col-md-2 text-center">
                  <div className="category-item">
                    <img
                      src="/images/14.jpg"
                      alt="Necklace Set"
                      className="rounded-circle mb-2"
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
                <div className="col-4 col-md-2 text-center">
                  <div className="category-item">
                    <img
                      src="/images/154.jpg"
                      alt="Anklet"
                      className="rounded-circle mb-2"
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
                <div className="col-4 col-md-2 text-center">
                  <div className="category-item">
                    <img
                      src="/images/09.jpg"
                      alt="Necklace"
                      className="rounded-circle mb-2"
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
      </div>
    </div>
  );
}

export default Home;
