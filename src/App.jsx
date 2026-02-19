
import Header from "./components/Header";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import Urgency from "./components/Urgency";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Profile from "./components/Profile";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Problem />
      <Process />
      <Portfolio />
      <Urgency />
      <Pricing />
      <FAQ />
      <Profile />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
