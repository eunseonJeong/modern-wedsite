import Benefits from "./components/Benefits/Benefits";
import {Collaboration} from "./components/Collaboration/Collaboration";
import { Footer } from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Roadmap from "./components/Roadmap/Roadmap";
import ButtonGradient from "./img/svg/ButtonGradient";

export default function App() {
    return (
        <> 
          <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden" > 
            <Header/>
            {/*  소개 */}
            <Hero/>
             {/*  내정보 */}
            <Benefits/>
            {/*  스킬 */}
            <Collaboration/>
            {/*  프로젝트 */}
            <Roadmap/>
            <Footer/>
          </div>
          <ButtonGradient/>
        </>
    )
}