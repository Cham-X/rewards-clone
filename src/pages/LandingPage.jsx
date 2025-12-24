import { useState } from 'react';
import BigNews from '../components/BigNews';
import EverythingInOnePlace from '../components/EverythingInOnePlace';
import FAQS from '../components/FAQS';
import Footer from '../components/Footer';
import HeroSection1 from '../components/HeroSection1';
import JoinCommunity from '../components/JoinCommunity';
import Navbar from '../components/Navbar';
import OrganizeDiscoverAndEarnOnTheGo from '../components/OrganizeDiscoverAndEarnOnTheGoal';
import SimpleRewardingCalm from '../components/SimpleRewardingCalm';
import StatAndParagraphText from '../components/Stat';
import StayProductive from '../components/StayProductive';
import TabSwitcher from '../components/TabSwitcher';
import AnimatedSection from '../layouts/AnimatedSection';
import HeroSection2 from '../components/HeroSection2';

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState('users');
  return (
    <div className="">
      <BigNews />
      <Navbar />
      <TabSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />

      <AnimatedSection active={activeTab === 'users'}>
        {activeTab === 'users' && (
          <>
            <HeroSection1 />
            <StatAndParagraphText />
            <EverythingInOnePlace />
            <OrganizeDiscoverAndEarnOnTheGo />
            <SimpleRewardingCalm />
            <JoinCommunity />
            <FAQS />
            <StayProductive />
          </>
        )}
      </AnimatedSection>

      <AnimatedSection active={activeTab === 'brands'}>
        {activeTab === 'brands' && (
          <>
            <HeroSection2 />
          </>
        )}
      </AnimatedSection>
      <Footer />
    </div>
  );
};

export default LandingPage;
