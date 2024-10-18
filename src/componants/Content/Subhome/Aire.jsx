/* eslint-disable react/no-unescaped-entities */
import "./Aire.css";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
function Aire() {
  return (
    <section className="aire  ">
      <div className="close">
        <Link to="/" > 
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
          <h1 className="headSubhome">A better way to deal with every day</h1>

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
              Aire
            </div>
          </div>
        </div>
      </div>
      <div className="allgallery">
        <div className="gallerySubhome">
          <img
            src="https://framerusercontent.com/images/mGxIaDhGjujbfshox24OyOTIc9E.jpg?scale-down-to=2048"
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

        <div className="container">
          <div>
            <img
              src="https://framerusercontent.com/images/KAXNtzMy2AYmtasCLdNEKIU2wI.jpg?scale-down-to=2048"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://framerusercontent.com/images/yU8ZKQFThmUFqfC2FYZqcGbWw.jpg?scale-down-to=2048"
              alt=""
            />
          </div>
        </div>
        <div className="overview">
          <div className="two">Overview</div>
          <div>
            I worked with Aire to develop a brand that firmly positions them as
            a premium lifestyle brand. The name Aire was inspired by the
            companies conception in Aire Street Workshops, in addition to
            aligning well with how the product makes you feel. The wordmark has
            been designed to convey the feeling of ease and simplicity whilst
            encapsulating a premium feel. Aire believes in the power of CBD to
            help people manage the day to day a little better — so I developed a
            strap-line which embodied that message. A better way to deal with
            every day.
          </div>
        </div>
        <div className="gallerySubhome">
          <img
            src="https://framerusercontent.com/images/1ZNxQVbQdraZjjmKyBwxrioAwvc.jpg?scale-down-to=2048"
            alt=""
          />
        </div>

        <div className="container">
          <div>
            <img
              src="https://framerusercontent.com/images/wQuOrcu37DXYfaXafEJ6y6Uo.jpg?scale-down-to=2048"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://framerusercontent.com/images/kfr022WaJ8YJUyZFmdwCB3pXhs.jpg?scale-down-to=2048"
              alt=""
            />
          </div>
        </div>
        <div className="gallerySubhome">
          <img
            src="https://framerusercontent.com/images/DmSvG2vRgGHkjr2izJsUcpWPs.jpg?scale-down-to=2048"
            alt=""
          />
        </div>
        <div className="gallerySubhome">
          <img
            src="https://framerusercontent.com/images/XyMJtcTk4JgOgG8gvE7Xo9ssy3E.gif"
            alt=""
          ></img>
        </div>
        <div className="gallerySubhome">
          <img
            src="https://framerusercontent.com/images/pRhnMswaeFkyMfJX0Hwwh0QTQ.jpg?scale-down-to=2048"
            alt=""
          />
        </div>
        <div className="gallerySubhome">
          <img
            src="https://framerusercontent.com/images/3wAtzo0qvmxyJhsWXvruyTZtRU.jpg?scale-down-to=2048"
            alt=""
          />
        </div>
        <div className="container">
          <div>
            <img
              src="https://framerusercontent.com/images/XaVdbFmdnBjuIAO6uR2K4xlQ.jpg?scale-down-to=2048"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://framerusercontent.com/images/i3WtVhahDcZd4OywmX9rXkq7yPo.jpg?scale-down-to=2048"
              alt=""
            />
          </div>
        </div>
      </div>

      <Footer></Footer>
    </section>
  );
}

export default Aire;
