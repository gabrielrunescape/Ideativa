import { Head } from '@inertiajs/react';
import { ToastContainer, toast } from 'react-toastify';

import {
    Box,
    Button,
    Card,
    Columns,
    Container,
    Heading,
    Section,
    Tabs,
    Tag
} from 'react-bulma-components';

import { iFooter as Footer } from '@/components/landing/ideativa_footer';
import { IdeaHeader as Header } from '@/components/landing/ideativa_header';
import { iHero as Hero } from '@/components/landing/ideativa_hero';
import { ContactUs as Contact } from '@/components/landing/ideativa_contact';
import { iAboutUs as AboutUs } from "@/components/landing/ideativa_about";
import { iServices as Services } from "@/components/landing/ideativa_services";

import favicon from '/public/favicon.ico';

export default function Welcome() {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.bunny.net"/>
                <link rel="icon" type="image/x-icon" href={favicon}/>
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet"/>
                <link rel="stylesheet" href='css/ideativa_style.css'/>
            </Head>

            <ToastContainer />

            <Header/>

            <Contact />

            <Footer />
        </>
    );
}
