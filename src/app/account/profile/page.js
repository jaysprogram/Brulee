'use client';

import Link from "next/link";

import React from 'react';

import NavBar from "../../../components/Navbar"
import Footer from "../../../components/Footer";
import InfoGrid from "../../../components/InfoGrid";


export default function ProfilePage() {

    return (

        <div className="flex flex-col min-h-screen overflow-visible">

            <header className="bg-white shadow-md relative">
                <NavBar />
            </header>


            <main className="flex flex-col flex-grow bg-white">
                <InfoGrid />
            </main>

            <footer className="bg-gray-100">
                <Footer />
            </footer>
        </div>

    );
}