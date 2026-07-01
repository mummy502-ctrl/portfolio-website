import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-6">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;