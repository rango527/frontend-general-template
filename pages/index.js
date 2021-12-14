import React from "react";
import Navbar from "../components/Navbar/Navbar";
import NavSm from "../components/NavSm/NavSm";
import LandingHeader from "../components/LandingHeader/LandingHeader";
import HeaderAfter from "../components/HeaderAfter/HeaderAfter";
import Wellcome from "../components/Wellcome/Wellcome";
import TopSlider from "../components/TopSlider/SliderSection";
import SliderSection from "../components/SliderSection/SliderSection";
import College from "../components/College/College";
import PerksSection from "../components/PerksSection/PerksSection";
import RoadmapSection from "../components/RoadmapSection/RoadmapSection";
import FooterBefore from "../components/FooterBefore/FooterBefore";
import Footer from "../components/Footer/Footer";
import styles from "../styles/landing.module.scss";

let roadmap_data = [
  {
    heading_1: "25% SOLD",
    heading_2: "ALPHA BETAS CLUB",
    description: `Alpha Betas is a collection of 10,000 NFTs—unique digital collectibles living on the Ethereum blockchain. Your Alpha Betas Token doubles as your Membership to the Club and grants access to members-only benefits like access to the Alpha Betas Series, exclusive merch, and more! `,
    image: "/Assets/alpha_new/roadmap/r_1.png",
    b_image: "/Assets/alpha_new/roadmap/b1.png",
  },
  {
    heading_1: "50% SOLD",
    heading_2: "ALPHA BETAS CLUB",
    description: `Alpha Betas is a collection of 10,000 NFTs—unique digital collectibles living on the Ethereum blockchain. Your Alpha Betas Token doubles as your Membership to the Club and grants access to members-only benefits like access to the Alpha Betas Series, exclusive merch, and more! `,
    image: "/Assets/alpha_new/roadmap/r_2.png",
    b_image: "/Assets/alpha_new/roadmap/b2.png",
  },
  {
    heading_1: "75% SOLD",
    heading_2: "ALPHA BETAS CLUB",
    description: `Alpha Betas is a collection of 10,000 NFTs—unique digital collectibles living on the Ethereum blockchain. Your Alpha Betas Token doubles as your Membership to the Club and grants access to members-only benefits like access to the Alpha Betas Series, exclusive merch, and more! `,
    image: "/Assets/alpha_new/roadmap/r_3.png",
    b_image: "/Assets/alpha_new/roadmap/b3.png",
  },
  {
    heading_1: "100% SOLD",
    heading_2: "ALPHA BETAS CLUB",
    description: `Alpha Betas is a collection of 10,000 NFTs—unique digital collectibles living on the Ethereum blockchain. Your Alpha Betas Token doubles as your Membership to the Club and grants access to members-only benefits like access to the Alpha Betas Series, exclusive merch, and more! `,
    image: "/Assets/alpha_new/roadmap/r_4.png",
    b_image: "/Assets/alpha_new/roadmap/b4.png",
  },
];

const Landing = () => {
  return (
    <div className={styles.landing_container}>
      <Navbar />
      <NavSm />
      <div className="d-block d-md-none">
        <TopSlider />
      </div>
      <div className="d-none d-md-block">
        <LandingHeader showButton={true} />
      </div>
      <HeaderAfter />
      <Wellcome />
      <College/>
      {/* <SliderSection /> */}
      <PerksSection backImage="/Assets/bad_bears/perks_back.jpg" />
      <RoadmapSection isShow={true} data={roadmap_data} />
      <FooterBefore image="/Assets/bad_bears/footer_before.png" />
      <Footer />
    </div>
  );
};

export default Landing;
