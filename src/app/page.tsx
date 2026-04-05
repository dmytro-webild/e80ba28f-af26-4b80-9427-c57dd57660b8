"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { Car, Search, Settings, Wrench, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="medium"
        sizing="mediumLargeSizeLargeTitles"
        background="fluid"
        cardStyle="inset"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "home",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Why Us",
          id: "why-us",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Mobi’s Mechanical"
      button={{
        text: "Call Now",
        href: "tel:0456899915",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{
        variant: "gradient-bars",
      }}
      title="Trusted Mechanics in Dandenong"
      description="Affordable, reliable mechanical and body repairs you can count on. From logbook servicing to emergency repairs, we keep Dandenong moving."
      buttons={[
        {
          text: "Call Now",
          href: "tel:0456899915",
        },
        {
          text: "Book a Service",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/smiling-mechanic-relaxing-taking-break-from-work-auto-repair-shop_637285-9753.jpg"
      imageAlt="Professional mechanic working on a vehicle"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureBento
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Logbook Servicing",
          description: "Ensure your manufacturer warranty remains valid with our logbook-standard servicing.",
          bentoComponent: "reveal-icon",
          icon: Wrench,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-mechanic-relaxing-taking-break-from-work-auto-repair-shop_637285-9753.jpg",
          imageAlt: "professional car repair workshop interior",
        },
        {
          title: "General Repairs",
          description: "From brakes and suspension to engine tuning, we fix it all right the first time.",
          bentoComponent: "reveal-icon",
          icon: Settings,
          imageSrc: "http://img.b2bpic.net/free-photo/car-mechanic-using-laptop-while-running-engine-diagnostic-repair-shop_637285-11553.jpg",
          imageAlt: "car engine maintenance repair shop",
        },
        {
          title: "Body Repairs",
          description: "Professional bodywork restoration for dents, scratches, and collision damage repairs.",
          bentoComponent: "reveal-icon",
          icon: Car,
          imageSrc: "http://img.b2bpic.net/free-photo/family-car-salon-woman-buying-car-little-african-girl-with-mther_1157-45045.jpg",
          imageAlt: "happy car owner at repair shop",
        },
        {
          title: "Diagnostics",
          description: "State-of-the-art diagnostic tools to identify and resolve complex vehicle issues quickly.",
          bentoComponent: "reveal-icon",
          icon: Search,
          imageSrc: "http://img.b2bpic.net/free-photo/dealership-agent-talking-with-client-gain-insights-into-what-might-sway-him_482257-124075.jpg",
          imageAlt: "satisfied customer auto shop",
        },
        {
          title: "Emergency Repairs",
          description: "Rapid response for breakdowns and critical issues so you're not left stranded.",
          bentoComponent: "reveal-icon",
          icon: Zap,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-side-portrait-happy-man-driving-car_158595-4182.jpg",
          imageAlt: "customer at automotive shop",
        },
      ]}
      title="Our Expert Services"
      description="Comprehensive automotive care designed to keep your vehicle safe and running longer."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah J.",
          imageSrc: "http://img.b2bpic.net/free-photo/family-car-salon-woman-buying-car-little-african-girl-with-mther_1157-45045.jpg",
        },
        {
          id: "2",
          name: "Michael B.",
          imageSrc: "http://img.b2bpic.net/free-photo/dealership-agent-talking-with-client-gain-insights-into-what-might-sway-him_482257-124075.jpg",
        },
        {
          id: "3",
          name: "David L.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-side-portrait-happy-man-driving-car_158595-4182.jpg",
        },
        {
          id: "4",
          name: "Jessica M.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-customer-interaction-with-mechanic_1170-1431.jpg",
        },
        {
          id: "5",
          name: "Robert T.",
          imageSrc: "http://img.b2bpic.net/free-photo/displeased-woman-having-argument-with-her-husband-about-car-repair-workshop_637285-7728.jpg",
        },
      ]}
      cardTitle="4.0 stars from 171 reviews"
      cardTag="Trusted by Locals"
      cardAnimation="slide-up"
    />
  </div>

  <div id="blog" data-section="blog">
      <BlogCardOne
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Get In Touch"
      title="Book Your Service Now"
      description="Ready to get back on the road? Call us today at 0456 899 915 or send us a booking request and our expert team will get in touch."
      imageSrc="http://img.b2bpic.net/free-photo/customer-text-messaging-mobile-phone_1170-1372.jpg"
      mediaAnimation="slide-up"
      buttonText="Send Request"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Services",
              href: "#services",
            },
            {
              label: "About Us",
              href: "#why-us",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          items: [
            {
              label: "Unit 2/11 Egan Rd",
              href: "#",
            },
            {
              label: "Dandenong VIC 3175",
              href: "#",
            },
            {
              label: "Phone: 0456 899 915",
              href: "tel:0456899915",
            },
          ],
        },
      ]}
      logoText="Mobi’s Mechanical"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
