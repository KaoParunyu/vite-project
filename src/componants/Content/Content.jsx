import Home from "./Home"
import Contact from "./Contact.jsx"
import Profile from "./Profile.jsx"
function Content() {
  return (
    <section id="content" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <Home></Home>
      <Contact></Contact>
      <Profile></Profile>
      </section>
  )
}

export default Content
