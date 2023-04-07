/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/navbar";
import Cards from '../components/cards';
import Footer from "../components/footer";

export default function ServicesPage() {
  return <>

    {/* ****** NavbarSection ****** */}

    <Navbar />

    {/* ****** CardsSection ****** */}
    
    <Cards />

    {/* ****** FooterSection ****** */}

    <Footer />

  </>;
}
