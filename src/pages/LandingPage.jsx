import { useState } from 'react';
import BigNews from '../components/landingPage/BigNews';
import EverythingInOnePlace from '../components/landingPage/EverythingInOnePlace';
import FAQS from '../components/landingPage/FAQS';
import Footer from '../components/landingPage/Footer';
import HeroSection1 from '../components/landingPage/HeroSection1';
import JoinCommunity from '../components/landingPage/JoinCommunity';
import Navbar from '../components/landingPage/Navbar';
import OrganizeDiscoverAndEarnOnTheGo from '../components/landingPage/OrganizeDiscoverAndEarnOnTheGoal';
import SimpleRewardingCalm from '../components/landingPage/SimpleRewardingCalm';
import StatAndParagraphText from '../components/landingPage/Stat';
import StayProductive from '../components/landingPage/StayProductive';
import TabSwitcher from '../components/landingPage/TabSwitcher';
import AnimatedSection from '../layouts/AnimatedSection';
import HeroSection2 from '../components/landingPage/HeroSection2';
import AnimatingCompanies from '../components/landingPage/AnimatingCompanies';
import TrustedBrands from '../components/landingPage/TrustedBrand';
import AmplifyBrandSuccess from '../components/landingPage/AmplifyBrandSuccess';
import WhySubscribeFlowva from '../components/landingPage/WhySubscribeFlowva';
import GrowthPlans from '../components/landingPage/GrowthPlan';
import HowItWorks from '../components/landingPage/HowItWorks';

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
            <FAQS activeTab={activeTab} />
            <StayProductive />
          </>
        )}
      </AnimatedSection>

      <AnimatedSection active={activeTab === 'brands'}>
        {activeTab === 'brands' && (
          <>
            <HeroSection2 />
            <AnimatingCompanies />
            <TrustedBrands />
            <AmplifyBrandSuccess />
            <WhySubscribeFlowva />
            <GrowthPlans />
            <HowItWorks />
            <FAQS activeTab={activeTab} />
          </>
        )}
      </AnimatedSection>
      <Footer />
    </div>
  );
};

export default LandingPage;
