import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import NavSm from "../components/NavSm/NavSm";
import LandingHeader from '../components/LandingHeader/LandingHeader';
import SliderSection from '../components/SliderSection/SliderSection';
import ExSeries from '../components/ExclusiveSeries/ExSeries';
import PerksSection from '../components/PerksSection/PerksSection';
import RoadmapSection from '../components/RoadmapSection/RoadmapSection';
import FooterBefore from '../components/FooterBefore/FooterBefore';
import Footer from '../components/Footer/Footer';
import styles from '../styles/landing.module.scss';

let roadmap_data = [
  { 
    heading_1: 'Eddie',
    heading_2: 'Evan Fong AKA VanossGaming',
    description: `
        Eddie is driven, focused, and the only guy you want in the foxhole when your life's on the line. He’s the first into a charge, the last to give up, and the undisputed team leader in every situation. Without Eddie, Alpha Team would be lost. But, occasionally, his type-A, try- hard demeanor can get a little old. Taking Eddie down a peg is one of Alpha’s Team’s favorite pastimes.`,
    image: '/Assets/alpha_new/team/t_1.png',
    b_image:"/Assets/alpha_new/roadmap/b1.png",
    align:"flex-start"
  },
  {
    heading_1: 'Tommy',
    heading_2: 'Tyler Wine AKA I AM WILDCAT',
    description: `Tommy is a natural born risk taker, and the kind of ultra-confident guy who makes quick decisions. Tommy believes that if you say something with confidence, people will believe pretty much anything. Especially when it comes to his specialty: driving. Whether it’s cars, boats, or a hang-glider, if it takes you from point A to point B, Tommy can handle it.`,
    image: '/Assets/alpha_new/team/t_2.png',
    b_image:"/Assets/alpha_new/roadmap/b2.png",
    align:"center"
  },
  {
    heading_1: 'Buck',
    heading_2: 'Brian Hanby AKA Terroriser',
    description: `More often than not, Alpha Team needs a stash of grenades or a well-placed detonation to get them out of a bind. Luckily, they’ve got Buck, their intrepid munitions expert. His hothead demeanor can get Alpha Team in trouble at times, but his endearing Irish accent and selflessness make it hard to stay mad at him.`,
    image: '/Assets/alpha_new/team/t_3.png',
    b_image:"/Assets/alpha_new/roadmap/b3.png",
    align:"flex-start"
  },
  {
    heading_1: 'Mason',
    heading_2: 'Marcel Cunningham AKA BasicallyIDoWrk',
    description: `Mason is a big picture contrarian who’s always thinking outside the box and has a real penchant for boundary-pushing social commentary. Something Alpha Team might be more annoyed by if Mason wasn’t behind the business end of a sniper rifle. In game, his gun brings a deadly combination of ruthlessness and precision from anywhere on the map. Out of game, his mouth does exactly the same thing.        `,
    image: '/Assets/alpha_new/team/t_4.png',
    b_image:"/Assets/alpha_new/roadmap/b4.png",
    align:"center"
  },
];
const landing = () => {
  return (
    <div className={styles.landing_container}>
      <Navbar />
      <NavSm/>
      <LandingHeader showButton={false} />
      <SliderSection heading={true} />
      <ExSeries />
      <PerksSection backImage='/Assets/alpha_new/perks_2.png' />
      <RoadmapSection data={roadmap_data} />
      <FooterBefore image='/Assets/alpha_new/l_bottom_banner.png' />
      <Footer />
    </div>
  );
};

export default landing;
