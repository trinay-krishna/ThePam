import Navbar from "/src/pages/index/components/Navbar";
import About from "/src/pages/index/components/About";
import Services from "/src/pages/index/components/Services";
import Subscribe from "/src/pages/index/components/Subscribe";
import Footer from "/src/Components-Common/Footer.jsx";

const Index = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <div>
          <Navbar />
        </div>
        <div className="overflow-scroll">
          <section id="about">
            <About />
          </section>
          <br />
          <section id="services">
            <Services />
          </section>
          <section id="subscribe" className="my-16">
            <Subscribe />
          </section>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Index;
