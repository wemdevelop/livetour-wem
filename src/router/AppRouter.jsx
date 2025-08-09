
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Home from "../components/Home";
// import LivePromo from "../components/LivePromo";
// import Bsnsneed from "../components2/Bsnsneed";
// import Impact from "../components2/Impact";
// import OrderCycle from "../components2/Cycle";
// import GrowthStats from "../components2/GrowthStats";
// import Testimonials from "../components/TestimonialsSection";

import Features from "../Pages/Features";
import CRMPlans from "../components/Pricing/Anuual";
import LogoSlider from "../components/Pricing/Logoslider";
import AllourPaid from "../components/Pricing/AllourPaid";
import FaqSection from "../components/Pricing/FaqAccordion ";

import Login from "../components/login-register/Loginm";
import Signup from "../components/login-register/Register";
// import ForgotPassword from "../components/login-register/ForgotPassword";

import LivetourSupport from "../components/Contacts/Contact";
import ContactDetails from "../components/Contacts/ContactDetails";

import NotFound from "../components/Notfoundpage";
import ThankYou from "../Pages/ThankyouPage";

import BlogHero from "../components/Blogs/BlogsHero";
import FeaturedSection from "../components/Blogs/FeaturedSection";
import BlogSection from "../components/Blogs/Sections";
import BlogDetailPage from "../components/Blogs/BlogDeatils";

import ResourcePages from "../components/ResourcesPage/ResourcePage";

import SocialAnalyticsHero from "../components/AboutUs/AboutHeader";
import AboutFeatures from "../components/AboutUs/AboutFeatures";
import LiveTourIndustries from "../components/AboutUs/Industries";
import BehindTheScenes from "../components/AboutUs/Testimonial";
import AboutFinalCTA from "../components/AboutUs/AboutFinalCTA";

import CareerHero from "../components/careerpage/Careers";
import CareerDetails from "../components/careerpage/careerHero";

import HelpCenter from "../components/Helpcenter/HelpCenter";
import VideoTutorials from "../Linkspage/videopage/Videos";
import ContactSupportForm from "../Linkspage/supporttickt/Supporttickt";
import SupportHeader from "../Linkspage/supporttickt/SupportHeader";
import SupportArticles from "../Linkspage/supporttickt/SupportArticles";
import PowerTips from "../Linkspage/supporttickt/PowerTips";

import BrandGrid from "../components/Clientspage/Clientgrid";
import TestimonialSection from "../components/Clientspage/ClientsFeedback";

import ContactForm from "../components/Resellers/Resellers";
import InvestorForm from "../components/investor/InvestorForm";

import PrivacyPolicy from "../Pages/Privacypolicy";
import TermsOfService from "../Pages/TermsOfService";

import ComingSoon from "../Pages/ComingSoon";
import ContactHelp from "../components/Helpcenter/SubmitQuery";
import Layout from "../layout/CustomLayout";
import HomePage from "../Pages/HomePage";
import Pricing from "../Pages/Pricing";
import ContactUs from "../Pages/ContactUs";
import AboutUs from "../Pages/AboutUs";
import Resource from "../Pages/Resource";
import Blog from "../Pages/Blog";
import Career from "../Pages/Career";
import Help from "../Pages/Help";
import ResellersPage from "../components/Resellers/Resellers";
import Investor from "../Pages/Investor";
import Clients from "../Pages/Clients";
import Supporttickt from "../Linkspage/supporttickt/Supporttickt";
import SupportTicker from "../Pages/SupportTicker";
import ScrollToTop from "../components/ScrollToTop";
import Credentials from "../Pages/Credentials";
import CredentialsLayout from "../layout/CredentialsLayout";
import SignIn from "../components/auth/SignIn";
import Register from "../components/auth/Register";
import ForgotPassword from "../components/auth/ForgotPassword";

const AppRouter = () => {
  return (
    <BrowserRouter>
      {/* <ScrollToTop />  */}
      <Routes>
        {/* Layout wrapper */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/resources" element={<Resource />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/career" element={<Career />} />
          <Route path="/helpcenter" element={<Help />} />
          <Route path="/resellers" element={<ResellersPage />} />
          <Route path="/investor" element={<Investor />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/videos" element={<VideoTutorials />} />
          <Route path="/supertickt" element={<SupportTicker />} />

          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/termsservice" element={<TermsOfService />} />
          <Route path="/blogs/:id" element={<BlogDetailPage />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/knowmore" element={<FaqSection />} />
          <Route path="/comingson" element={<ComingSoon />} />
          <Route path="/submitquery" element={<ContactHelp />} />
        </Route>

        {/* Auth & error routes - no layout */}
        {/* <Route path="/Forgotpassword" element={<ForgotPassword />} /> */}
        {/* <Route path="/signin" element={<Login />} /> */}
        <Route path="/register" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/credentials" element={<Credentials />} />


        {/* Credentials layout without /auth */}
        <Route path="/" element={<CredentialsLayout />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<Register />} />
          <Route path="frgot-password" element={<ForgotPassword />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
