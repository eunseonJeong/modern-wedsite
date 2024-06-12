import { Footer } from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ButtonGradient from "./img/svg/ButtonGradient";

export default function App() {
    return (
        <> 
          <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden" > 
            <Header/>
            {/* <Hero/>
            <Benefits/>
            <Collaboration/>
            <Services/>
            <Pricing/>
            <Roadmap/> */}
            <Footer/>
          </div>

          <ButtonGradient/>
        </>
    )
}