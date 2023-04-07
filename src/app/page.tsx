/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import Navbar from './components/navbar';
import HeroSection from "./components/herosection";
import Video from "./components/video";
import Cards from './components/cards';
import Form from "./components/form";
import Pricing from "./components/pricing";
import Footer from './components/footer';

export default function HomePage() {
  return <>

    {/* ****** HeadSection ****** */}

    <Head>
      <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet' />
      <link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />
    </Head>

    {/* ****** NavbarSection ****** */}

    <Navbar />

    {/* ****** HeroSection ****** */}

    <HeroSection />

    {/* ****** VideoSection ****** */}

    <Video />

    {/* ****** CardsSection ****** */}

    <Cards />

    {/* ****** PricingSection ****** */}

    <Pricing />

    {/* ****** FooterSection ****** */}

    <Footer />

  </>;
}
