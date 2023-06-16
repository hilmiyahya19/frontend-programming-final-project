import Footer from "../components/Footer";
import Hello from "../components/Hello";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero/Hero";
import { useState } from "react";
import Global from "../components/Global/Global";
import data_global from "../utils/constants/indonesia"
import Provinsi from "../components/Provinsi/Provinsi";
import data_provinces from "../utils/constants/provinces";
import Form from "../components/Form/Form";
import Alert from "../components/Alert/Alert";

function Main() {
  const dataglobe = data_global.indonesia;
  const [provinces, setProvinces] = useState(data_provinces.provinces);

  return (
    <main>
      <Hero />
      <Global dataglobe={dataglobe}/>
      <Provinsi provinces={provinces}/>
      <Form provinces={provinces} setProvinces={setProvinces}/>
      <Alert/>
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;