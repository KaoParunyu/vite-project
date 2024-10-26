import "./Navtab.css";
import { useState, useEffect } from "react";

function Navtab() {
  const [currentTab, setCurrentTab] = useState(() => {
    return localStorage.getItem("currentTab") ;
  });

  useEffect(() => {
    // เมื่อคอมโพเนนต์ถูกแสดง ให้แท็บ "Home" แสดงเป็นค่าเริ่มต้น
    document.getElementById(currentTab).style.display = "block";

    // document.querySelector(".tablinks").classList.add("active");
    document.querySelector(`.tablinks[data-tab=${currentTab}]`).classList.add("active");
      

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
    localStorage.setItem("currentTab", tabsname);
    setCurrentTab(currentTab);
  }

  return (
    <section id="navtab">
      <div className="navtab">
        <div className="tab">
          <button className="tablinks" data-tab="Homes" onClick={(e) => clickTab(e, "Homes")}>
            Home
          </button>

          <button className="tablinks"  data-tab="Profiles" onClick={(e) => clickTab(e, "Profiles")}>
            Profile
          </button>

          <button className="tablinks" data-tab="Contacts" onClick={(e) => clickTab(e, "Contacts")}>
            Contact
          </button>
        </div>
      </div>
      <div className="navtabspacing"></div>
    </section>
  );
}

export default Navtab;
