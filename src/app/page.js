'use client'
import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import NavButton from "./components/NavButton";
import Lenis from '@studio-freight/lenis';

export default function Home() {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => setNavOpen(!navOpen);

    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.1,
            smooth: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <main>
            <div className="h-screen flex items-center justify-center bg-neutral-200">
                <NavButton onClick={toggleNav} />
                <Nav isOpen={navOpen} />
                <h1 className="text-9xl w-2/3 text-center text-black">THIS IS A SLIDING NAV</h1>
            </div>
            <div className="h-screen">

            </div>
        </main>
    );
}