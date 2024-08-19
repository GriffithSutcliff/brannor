import Frame1 from "./components/Frame1";
import Frame2 from "./components/Frame2";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  return (
    <div className="app">
      <Header />
      <Search />
      <Frame1 />
      <div className="dark-theme">
        <Frame2 />
      </div>
    </div>
  );
}

export default App;
