import {Button, Container, Image, Navbar} from 'react-bulma-components';
import { Link } from '@inertiajs/react';

import logo from '/public/img/testes_logo-17.png';

export function iHeader() {
    return (
        <header>
            <Navbar color="light">
                <Container>
                    <Navbar.Brand>
                        <Navbar.Item href="/" renderAs="a">
                            <img src={logo} height={44} />
                        </Navbar.Item>
                    </Navbar.Brand>

                    <Navbar.Menu>
                        <Navbar.Container align="right">
                            <Navbar.Item><Link href="">Início</Link></Navbar.Item>
                            <Navbar.Item><Link href="#aboutus">Sobre Nós</Link></Navbar.Item>
                            <Navbar.Item><Link href="#services">Serviços</Link></Navbar.Item>
                            <Navbar.Item><Link href="#team">Equipa</Link></Navbar.Item>
                            <Navbar.Item><Link href="#projects">Projetos</Link></Navbar.Item>
                            <Navbar.Item><a href="https://calendly.com/ideativa-consultora/30min"><Button color="warning">Marcar reunião</Button></a></Navbar.Item>
                        </Navbar.Container>
                    </Navbar.Menu>
                </Container>
            </Navbar>
        </header>
    );
}
