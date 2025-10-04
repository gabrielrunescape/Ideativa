import { Button } from 'react-bulma-components';
import { Link } from '@inertiajs/react';

import logo from '/public/img/ideativa_logo.svg';
import React, { useState } from 'react';
import { assets } from '../../../assets/assets';

export const IdeaHeader = () => {
    const [visible, setVisible] = useState(false);

    const navlinks = [
        { page: "Início", href: "/" },
        { page: "Sobre Nós", href: "#aboutus" },
        { page: "Serviços", href: "#services" },
        { page: "Equipa", href: "#team" },
        { page: "Projetos", href: "#projects" },
        { page: "Marcar Reunião", href: "https://calendly.com/ideativa-consultora/30min" },
    ];

    return (
        <header>
            <nav className="flex items-center justify-between h-[70px] font-medium xs:mx-5 sm:mx-4 lg:mx-auto max-w-[769px] lg:max-w-[1344px]">
                <Link href="/" className="flex flex-col items-center gap-1">
                    <img src={logo} className="w-[120px]" alt="Ideativa Logo" />
                </Link>

                <div className="flex items-center gap-5">
                    <img onClick={() => setVisible(true)} src={assets.menu} className="w-5 cursor-pointer sm:hidden" alt="" />
                </div>

                <ul className="hidden sm:flex gap-6 items-center text-sm transition-all text-gray-700">
                    {navlinks.map((link, index) => {
                        if (index == (navlinks.length - 1)) {
                            return (
                                <a href={link.href} key={index}>
                                    <Button
                                        color="warning"
                                        textColor="white"
                                        className="rounded-lg cursor-pointer"
                                    >
                                        {link.page}
                                    </Button>
                                </a>
                            );
                        } else {
                            return (<Link key={index} href={link.href}>{link.page}</Link>);
                        }
                    })}
                </ul>


                {/* Sidebar menu for small screens */}
                <div className={`absolute z-10 top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-[95%]': 'w-0'}`}>
                    <div className="flex flex-col text-gray-600">
                        <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3">
                            <img src={assets.chevron_left} alt="" />
                            <p>Voltar</p>
                        </div>

                        {navlinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                onClick={() => setVisible(false)}
                                className={`py-2 pl-6 ${index == 0 ? 'border-t border-b' : 'border-b'}`}
                            >
                                {link.page}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    );
}
