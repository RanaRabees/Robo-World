import Head from "next/head";
import Link from "next/link";
import Navbar from '../components/navbar';
import Form from "../components/form";
import Footer from "../components/footer";

export default function ContactPage() {
  return <>

    {/* ****** NavbarSection ****** */}

    <Navbar />
    {/* ****** ContactSection ****** */}

    <Form />

    {/* ****** FooterSection ****** */}

    <Footer />

  </>;
}
