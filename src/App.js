import Cards from "./Components/Cards/Cards";
import Page from "./Components/Pages/page";
import Mainheader from "./Components/header/Mainheader";
import Image from "./Components/image/Image";
import Option from "./Components/options/option";
import './App.css'
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="maindiv">
      <Mainheader />
      <Option />
      <Image />
      <Cards />
      <Page />
      <Footer/>
    </div>
  );
}

export default App;
