import Header from "../templates/header";
import Banner from "../templates/banner";
import Testimonials from "../templates/testimonials";
import ContactUs from "../templates/contactUs";
import Footer from "../templates/footer";
import BrandSlider from "../templates/brands";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Header />
      <Banner />
      {children}
      <Testimonials />
      <BrandSlider />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Layout;
