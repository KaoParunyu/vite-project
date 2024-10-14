import Navtab from "../componants/Navtab/Navtab"
import Content from "../componants/Content/Content"
import Footer from "../componants/Footer/Footer"
function MainLayout() {
  return (
    <section id="main-layout">
        <Navtab></Navtab>
        <Content></Content>
        <Footer></Footer>       
    </section>
  )
}

export default MainLayout

