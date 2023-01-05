import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import "../styles/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useSiteMetadata from "./SiteMetadata";
import MyNavbar from "../components/Navbar";
import SEO from "../components/SEO";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata(); 
  return (
    <div>
      <SEO title={children?.props?.title || title} description={children?.props?.description || description}></SEO>
      <MyNavbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
