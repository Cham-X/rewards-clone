import BigNews from './components/BigNews';
import FAQS from './components/FAQS';
import Footer from './components/Footer';
import JoinCommunity from './components/JoinCommunity';
import OrganizeDiscoverAndEarnOnTheGo from './components/OrganizeDiscoverAndEarnOnTheGoal';
import SimpleRewardingCalm from './components/SimpleRewardingCalm';
import StatAndParagraphText from './components/Stat';
import StayProductive from './components/StayProductive';
import './index.css';

function App() {
  return (
    <div className="">
      <BigNews />
      <StatAndParagraphText />
      <OrganizeDiscoverAndEarnOnTheGo />
      <SimpleRewardingCalm />
      <JoinCommunity />
      <FAQS />
      <StayProductive />
      <Footer />
    </div>
  );
}

export default App;
