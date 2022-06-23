import "./App.css";
import Header from "./App/components/Header";
import Hero from "./App/components/Hero";
import Shiping from "./App/components/Shiping";
import Shop from "./App/components/shop";
import Product from "./App/components/Product";
import Design from "./App/components/Design";
import Customers from "./App/components/Customers";
import Subscribe from "./App/components/Subscribe";
import Footer from "./App/components/Footer";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Shiping/>
      <Shop/>
      <Product/>
      <Design/>
      <Customers/>
      <Subscribe/>
       <Footer/>
    </>
  );
}

export default App;
