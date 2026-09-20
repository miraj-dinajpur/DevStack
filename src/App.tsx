
import { Suspense } from "react";
import Banner from "./Components/Banner"
import ExploreTech from "./Components/ExploreTech"
import Nav from "./Components/Nav"
import Technologies from "./Components/TechComp/Technologies";
import Footer from "./Components/TechComp/Footer";
import { Toaster } from 'react-hot-toast';

const techFetch = async() => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data
} 

function App() {
  const techPromise = techFetch();
  // console.log(techPromise);
  return (
    <>
    <Toaster position="top-right" reverseOrder={false} />
      <Nav />
      <Banner />
      <ExploreTech />
      <Suspense fallback={<h2 className="container mx-auto text-3xl text-gray-600 text-center">Loading Technologies... </h2>}>
        <Technologies techPromise={techPromise}/>
      </Suspense>
      <Footer />

      
    </>
  )
}

export default App
