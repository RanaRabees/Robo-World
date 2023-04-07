/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import Navbar from '../components/navbar';
import Docs from "../components/docs";
import Footer from "../components/footer";

export default function DocsPage() {
    return <>

        {/* ****** NavbarSection ****** */}

        <Navbar />

        {/* ****** PricingSection ****** */}

        <Docs />

        {/* ****** FooterSection ****** */}

        <Footer />

    </>;
}
