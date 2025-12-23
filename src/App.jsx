import BigNews from './components/BigNews';
import FAQS from './components/FAQS';
import Footer from './components/Footer';
import JoinCommunity from './components/JoinCommunity';
import StayProductive from './components/StayProductive';
import './index.css';

function App() {
  return (
    <div className="">
      <BigNews />
      <JoinCommunity />
      <FAQS />
      <StayProductive />
      <Footer />
    </div>
  );
}

export default App;
