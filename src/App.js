import Footer from "./components/Footer";
import Frame1 from "./components/Frame1";
import Frame2 from "./components/Frame2";
import Frame3 from "./components/Frame3";
import Frame4 from "./components/Frame4";
import Frame5 from "./components/Frame5";
import Header from "./components/Header";
import Search from "./components/Search";
import background from './imgs/background.png'

function App() {
  return (
    <div className="app">
      <Header />
      <Search />
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <img className='background' src={background}></img>
      <div className="shadow-4"></div>
      <Frame4 />
      <Frame5 />
      <Footer />
    </div>
  );
}

export default App;
