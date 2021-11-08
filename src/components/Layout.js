import Header from "../templates/header";
import Banner from "../templates/banner";
import Testimonials from "../templates/testimonials";
import ContactUs from "../templates/contactUs";
import Footer from "../templates/footer";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Header />
      <Banner />
      {children}
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Layout;
