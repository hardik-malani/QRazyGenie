import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="flex flex-col overflow-x-hidden h-screen">
        <Navbar />
        <div className="flex flex-row">
          <Sidebar />
          <div>
            <Hero />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
