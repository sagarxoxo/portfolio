import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import TopSection from './components/TopSection/TopSection';
import Portfolio from './components/Portfolio/Portfolio';
import Technologies from './components/Technology/Technologies';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='app'>
      <Header />
      <TopSection />
      <Portfolio />
      <Technologies />
      <About />
      <Footer />
    </div>
  );
}

export default App;
