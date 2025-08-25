import Header from "./components/header/Header";
//import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
//import Main_fetch from "./components/main/Main_fetch";
import Main_fetch_async from "./components/main/Main_fetch_async";
import Ferch_then from "./components/main/Ferch_then";

export default function App() {
  return (
    <>
      <Header />
      {/* <Main /> */}
      {/* <Main_fetch /> */}
      <Main_fetch_async />
      <Ferch_then />
      <Footer />
    </>
  )
}