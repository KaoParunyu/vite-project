import "./Navtab.css";
import { useEffect } from "react";


function Navtab() {
  useEffect(() => {
    // เมื่อคอมโพเนนต์ถูกแสดง ให้แท็บ "Home" แสดงเป็นค่าเริ่มต้น
    document.getElementById("Homes").style.display = "block";
    document.querySelector(".tablinks").classList.add("active");
    console.log("คอมโพเนนต์นี้ถูกเรนเดอร์ครั้งแรก");
  }, []);
  function clickTab(evt, tabsname) {
    let i, tabscontent, tablinks;

    tabscontent = document.getElementsByClassName("tabscontent");
    for (i = 0; i < tabscontent.length; i++) {
      tabscontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabsname).style.display = "block";
    evt.currentTarget.className += " active";
  }

  return (
    <section id="navtab">
      <div className="tab">
        <button
          className="tablinks"
          onClick={(e) => clickTab(e, "Homes")}
        >
          Home
        </button>
      
        <button
          className="tablinks"
          onClick={(e) => clickTab(e, "Profiles")}
        >
          Profile
        </button>
      
        <button
          className="tablinks"
          onClick={(e) => clickTab(e, "Contacts")}
        >
          Contact
        </button>
      </div>
    </section>
  );
}

export default Navtab;
