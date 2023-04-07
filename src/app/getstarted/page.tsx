/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import Navbar from '../components/navbar';
import Pricing from "../components/pricing";
import Footer from "../components/footer";

export default function GetStartedPage() {
    return <>

        {/* ****** NavbarSection ****** */}

        <Navbar />

        {/* ****** PricingSection ****** */}

        <Pricing />

        {/* ****** FooterSection ****** */}

        <Footer />

    </>;
}
