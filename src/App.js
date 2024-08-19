import Frame1 from "./components/Frame1";
import Frame2 from "./components/Frame2";
import Frame3 from "./components/Frame3";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  return (
    <div className="app">
      <Header />
      <Search />
      <Frame1 />
      <Frame2 />
      <Frame3 />
    </div>
  );
}

export default App;
