import "./Aire.css";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
function Correlated() {
  return (
    <section className="aire">
      <div className="close">
        <Link to="/">
          <div
            style={{
              backgroundColor: "rgba(232, 229, 228, 0.5)",
              borderRadius: "40px",
              display: "flex",
              width: "48px",
              height: "48px",
              placeContent: "center",
              alignItems: "center",
              backdropFilter: "blur(16px)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgb(0, 0, 0)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>
        </Link>
      </div>

      <div className="navtabspacing"></div>
      <div className="h">
        <div className="headingSubhome">
          <div className="headSubhome" style={{maxWidth:"1000px"}}>
            From onboarding to automation. A seamless user journey.
          </div>

          <div className="subheadSubhome">
            <div
              style={{
                width: "45px",
                height: "30px",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Correlated
            </div>
          </div>
        </div>
      </div>
      <div className="allgallery">
        <div className="gallerySubhome">
          <img
            src="https://framerusercontent.com/images/QVKFKT3dyGxloXfzzpurVKNMM6M.jpg?scale-down-to=2048"
            alt=""
          />
        </div>
        <div className="zero">
          <div className="one">
            <div className="two">Client</div>
            <div>Aire</div>
          </div>

          <div className="one">
            <div className="two">Studio</div>
            <div>OH&CO</div>
          </div>
          <div className="one">
            <div className="two">Role</div>
            <div>Creative Director</div>
          </div>
          <div className="one">
            <div className="two">Focus</div>
            <div>Brand Identity</div>
          </div>
        </div>
        <div className="gallerySubhome">
          <img
            src="https://framerusercontent.com/images/68Iqel3D27Y4JufI8Uy5OvefWbc.jpg?scale-down-to=2048"
            alt=""
          />
        </div>

        <div className="overview">
          <div className="two">Overview</div>
          <div>
            I helped the Correlated team improve functionality across their
            platform and develop a series of new features, all backed up by a
            robust and distinct design system.
          </div>
        </div>

        <div className="container">
          <div>
            <img
              src="https://framerusercontent.com/images/1p2fh6pUhyWU5wo0HuUhGBfq0.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://framerusercontent.com/images/vbrM0VmAH5DTwyk1LqtQmxL51s.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="gallerySubhome">
          <img
            src="https://framerusercontent.com/images/tN8jTohPTXn5uQRpJxyX92NH4MI.jpg?scale-down-to=2048"
            alt="dd"
          ></img>
        </div>
        <div className="gallerySubhome">
          <img
            src="https://framerusercontent.com/images/lFrqFqQHwbgjUIEdNoDqx0ByQbA.jpg?scale-down-to=2048"
            alt=""
          />
        </div>
        <div className="container">
          <div>
            <img
              src="https://framerusercontent.com/images/As3sZJW3p7ZozhuXUdkNipZNg.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://framerusercontent.com/images/cWbxOdQuIb89b5L55hjKxdF7Jhw.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="gallerySubhome">
          <img
            src="https://framerusercontent.com/images/7FjwLrD1PXJxWNaJnIs1otLhFI.jpg?scale-down-to=2048"
            alt=""
          />
        </div>
        <div className="container">
          <div>
            <img
              src="https://framerusercontent.com/images/QrI9yPy4AnRCf2rL3ZPEXaqeD2A.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://framerusercontent.com/images/aiUDhsoiJ5PXdrBkmKQaCCyt8NE.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <Footer></Footer>
    </section>
  );
}

export default Correlated;
