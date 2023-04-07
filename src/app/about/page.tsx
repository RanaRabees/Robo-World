import Head from "next/head";
import Link from "next/link";
import Navbar from '../components/navbar';
import Video from "../components/video";
import Footer from "../components/footer";

export default function AboutPage() {
  return <>

    {/* ****** NavbarSection ****** */}

    <Navbar />

    {/* ****** VideoSection ****** */}

    <Video />

    {/* ****** FooterSection ****** */}

    <Footer />

  </>;
}
