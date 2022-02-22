import '../css/main.css';
import { TopBlock } from '../components/TopBlock';
import { Mission } from '../components/Mission';
import { Footer } from '../components/Footer';
import { Features } from '../components/Features';
import { Media } from '../components/Media';
import { GetInfo } from '../components/GetInfo';
import { Roadmap } from '../components/Roadmap';
import { Questions } from '../components/Questions';
import { Tokenomics } from '../components/Tokenomics';
import { Sent } from '../components/Sent';
import ScrollToTop from '../components/ScrollToTop';
import { useTranslation } from "react-i18next";

export function Main() {
   const { t } = useTranslation();

   return (
      <div className="wrap">
         <ScrollToTop />

         <main className='main index'>
            <TopBlock link="/presale" />
            <Mission />
            <Features />
            <Tokenomics />
            <Questions />
            <Roadmap />
            <Media />
            <GetInfo />
            <Sent />
         </main>

         <Footer link="/presale" text={t("footer.button-main-text")} />
      </div>
   );
}