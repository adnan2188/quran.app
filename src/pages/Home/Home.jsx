import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="container text-center">
        <h1 className="noble_heading">The Noble Quran</h1>
        <div className="img-div">
          <img
            src="https://previous.quran.com/assets/quran-logo-f5d0f128f5aa2a1949a3157d96bbd04a184e4a4ee0e05d464a3f2ae8d0bdcbdf.png"
            alt=""
          />
        </div>
        <div className=" col-lg-12 col-md-12 col-sm-12 main-div">
          <div className=" col-lg-1 col-md-3 col-sm-3 Card">
            <Link className="nav-link active" to="/surahCards">
              Surah
            </Link>
          </div>

          <div className=" col-lg-1 col-md-3 col-sm-3 Card">
            <Link className="nav-link active" to="/juzCards">
              Juz
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
