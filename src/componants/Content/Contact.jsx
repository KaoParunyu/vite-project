import "./Contact.css"
function Contact() {
    return (
      <div id="Contacts" className="tabscontent  " style={{width:"100%", height:"100%"}} >
        <div className="bcontacts  wow animate__animated animate__fadeInUp">
  <div className="contactme" style={{height:"70%"}}>
        <div style={{fontSize:"72px"}}> This's my pratice frontend</div>
        <div style={{fontSize:"72px"}}><a href="mailto:youremail@example.com" style={{color:"grey",textDecorationLine:"none"}}>Get in touch.</a>   </div>
      </div>
      <div className="foot">
        <div style={{display:"flex",flexDirection:"row",alignItems:"center", gap:"10px" ,paddingLeft:"20px"}}>
          <div className="iconfoot">
          <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 800"
      width="800"
      height="800"
      preserveAspectRatio="xMidYMid slice"
      className="animated-svg"
    >
      <defs>
        <clipPath id="clipPathId">
          <rect width="800" height="800" x="0" y="0"></rect>
        </clipPath>
      </defs>
      <g clipPath="url(#clipPathId)">
        <g className="animated-group">
          <path
            strokeLinecap="butt"
            strokeLinejoin="miter"
            fillOpacity="0"
            strokeMiterlimit="4"
            stroke="rgb(0,0,0)"
            className="animated-path"
            d="M-243.261,-243.229C-243.261,-243.229 243.261,243.229 243.261,243.229 
               M-243.229,243.26C-243.229,243.26 243.23,-243.261 243.23,-243.261 
               M-344.001,0.022C-344.001,0.022 344.001,-0.022 344.001,-0.022 
               M-0.022,-344C-0.022,-344 0.022,344 0.022,344"
          ></path>
        </g>
      </g>
    </svg>
          </div>
          <div>

          © Oli Harris 2023
          </div>
        </div>

        <div className="social" style={{paddingRight:"20px"}}>
          <div>Twitter</div>
          <div>Linkedin</div>
          <div>Mail</div>
        </div>
      </div>
      </div>
      </div>
    )
  }
  
  export default Contact