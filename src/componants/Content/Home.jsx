import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section id="Homes" className="tabscontent">
      {/* <div style={{ height: "110px", width: "100%" }}></div> */}
      <div className="h   animate__animated animate__fadeInUp" >
        <div className="heading">
          {/* <div></div> */}
          <div className="head  ">
            A brand and product designer working with clients globally
          </div>

          <div className="subhead">
            <div
              style={{
                // width: "45px",
                // height: "15px",
                gap: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>Expertise</div>
            </div>
            <div
              style={{
                backgroundColor: "#e8e5e480",
                // width: "45px",
                // height: "15px",
                borderRadius: "100px",
                gap: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "8px 12px",
              }}
            >
              <div>Branding</div>
            </div>
            <div
              style={{
                backgroundColor: "#e8e5e480",
                // width: "45px",
                // height: "15px",
                borderRadius: "100px",
                gap: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "8px 12px",
              }}
            >
              <div>Product </div>
            </div>
            <div
              style={{
                backgroundColor: "#e8e5e480",
                // width: "96px",
                // height: "15px",
                borderRadius: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "8px 12px",
              }}
            >
              <div>Design Systems</div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="gallery   animate__animated animate__fadeInUp ">
        <div className="g1">
          <Link to="/aire">
            {" "}
            <a href="aire.jsx"></a>
            <div className="gname">
              <div>Aire</div>
            </div>
            <div className="g3">
              <div className="g3dot1">
                <img
                  src="https://framerusercontent.com/images/kfr022WaJ8YJUyZFmdwCB3pXhs.jpg?scale-down-to=1024"
                  alt=""
                />
              </div>
            </div>
            <div className="g2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(0, 0, 0)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
          </Link>
        </div>

        <div className="g1">
          <Link to="/Correlated">
            <div className="gname">
              <div>Correlated</div>
            </div>

            <div className="g3">
              <div className="g3dot1">
                <img
                  src="https://framerusercontent.com/images/QVKFKT3dyGxloXfzzpurVKNMM6M.jpg?scale-down-to=1024"
                  alt=""
                />
              </div>
            </div>
            <div className="g2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(0, 0, 0)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
          </Link>
        </div>
      </div>
      <div className="gallery   animate__animated animate__fadeInUp">
        <div className="g1">
          <Link to="">
            <div className="gname">
              <div>Aire</div>
            </div>
            <div className="g3">
              <div className="g3dot1">
                <img
                  src="https://framerusercontent.com/images/AX9PukosNfGVcfXw3YapiYpl9g.jpg?scale-down-to=2048"
                  alt=""
                />
              </div>
            </div>
            <div className="g2" style={{filter:"invert(1)"}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(0, 0, 0)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>{" "}
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
          </Link>
        </div>

        <div className="g1">
          <Link to="">
            <div className="gname">
              <div>Aire</div>
            </div>
            <div className="g3">
              <div className="g3dot1">
                <img
                  src="https://framerusercontent.com/images/BAXywubxN8sAhfJg3AgGgFI.jpg?scale-down-to=1024"
                  alt=""
                />
              </div>
            </div>
            <div className="g2" style={{filter:"invert(1)"}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(0, 0, 0)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>{" "}
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
          </Link>
        </div>
      </div>
      <div className="gallery   animate__animated animate__fadeInUp">
        <div className="g1">
          <Link to="">
            <div className="gname">
              <div>Aire</div>
            </div>

            <div className="g3">
              <div className="g3dot1">
                <video
                  src="https://framerusercontent.com/assets/XuzMZ3Z1QQHKltPqRjzGnsWs27M.mp4"
                  loop
                  autoPlay
                  playsInline
                  muted
                  alt=""
                />
              </div>
            </div>
            <div className="g2" style={{filter:"invert(1)"}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(0, 0, 0)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>{" "}
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
          </Link>
        </div>

        <div className="g1">
          <Link to="">
            <div className="gname">
              <div>Aire</div>
            </div>

            <div className="g3">
              <div className="g3dot1">
                <img
                  src="https://framerusercontent.com/images/3WALBX7nnuG7p85CLjlVmWPDHw.jpg?scale-down-to=1024"
                  alt=""
                />
              </div>
            </div>
            <div className="g2" style={{filter:"invert(1)"}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(0, 0, 0)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>{" "}
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
          </Link>
        </div>
      </div>
      <div className="gallery   animate__animated animate__fadeInUp">
        <div className="g1">
          <Link to="">
            <div className="gname">
              <div>Aire</div>
            </div>
            <div className="g3">
              <div className="g3dot1">
                <img
                  src="https://framerusercontent.com/images/e3moUZXfgtjYQY4ILakIMaz4n7s.jpg?scale-down-to=2048"
                  alt=""
                />
              </div>
            </div>
            <div className="g2" style={{filter:"invert(1)"}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(0, 0, 0)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>{" "}
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
          </Link>
        </div>

        <div className="g1">
          <Link to="">

            <div className="gname">
              <div>Aire</div>
            </div>
            <div className="g3">
              <div className="g3dot1">
                <video
                  src="https://framerusercontent.com/assets/SGjFvgcbK7s4yKh0xwuNjriMNII.mp4"
                  muted
                  autoPlay
                  loop
                  playsInline
                  alt=""
                />
              </div>
            </div>
            <div className="g2" style={{filter:"invert(1)"}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(0, 0, 0)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>{" "}
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
          </Link>
        </div>
      </div>{" "}
      <div className="gallery   animate__animated animate__fadeInUp">
        <div className="g1">
          <Link to="">
           <div className="gname">
              <div>Aire</div>
            </div>
            <div className="g3">
              <div className="g3dot1">
                <img
                  src="https://framerusercontent.com/images/aH1eUgCIIIrbJF7TUlaKAehoI.jpg?scale-down-to=1024"
                  alt=""
                />
              </div>
            </div>
            <div className="g2" style={{filter:"invert(1)"}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(0, 0, 0)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>{" "}
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
          </Link>
        </div>

        <div className="g1">
          <Link to="">

            <div className="gname">
              <div>Aire</div>
            </div>
            <div className="g3">
              <div className="g3dot1">
                <img
                  src="https://framerusercontent.com/images/UbS7rWmAwWxjtwM7oaWwRuGo.jpg?scale-down-to=1024"
                  alt=""
                />
              </div>
            </div>
            <div className="g2" style={{filter:"invert(1)"}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(0, 0, 0)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>{" "}
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
          </Link>
        </div>
      </div>
      <div className="gallery  animate__animated animate__fadeInUp" style={{ padding: "40px" }}>
        <div className="g1">
          <Link to="">
            <div className="gname">
              <div>Aire</div>
            </div>
            <div className="g3">
              <div className="g3dot1">
                <img
                  src="https://framerusercontent.com/images/hQVBeiDNGU2TfeDJALuhawlcto.jpg?scale-down-to=1024"
                  alt=""
                />
              </div>
            </div>
            <div className="g2" style={{filter:"invert(1)"}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(0, 0, 0)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>{" "}
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
          </Link>
        </div>

        <div className="g1">
          <Link to="">
            <div className="gname">
              <div>Aire</div>
            </div>
            <div className="g3">
              <div className="g3dot1">
                <video
                  src="https://framerusercontent.com/assets/NieGBlxBdgpz9QCHV5Aj89rWjVg.mp4"
                  muted
                  loop
                  autoPlay
                  playsInline
                  alt=""
                />
              </div>
            </div>
            <div className="g2" style={{filter:"invert(1)"}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(0, 0, 0)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>{" "}
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
