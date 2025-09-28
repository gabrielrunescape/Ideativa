import { Link } from "@inertiajs/react";
import {Box, Button, Card, Columns, Container, Heading, Section} from "react-bulma-components";

export function iServices() {
    const columns = [
        {
            id: 0,
            img: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 0C11.36 0 12.66 0.233334 13.9 0.700001C15.0867 1.15333 16.1433 1.79 17.07 2.61C17.9967 3.43 18.7133 4.36667 19.22 5.42C19.74 6.52667 20 7.68 20 8.88C20 9.89333 19.7467 10.8333 19.24 11.7C18.7467 12.5267 18.08 13.1867 17.24 13.68C16.3867 14.1867 15.4533 14.44 14.44 14.44H12.48C12.0133 14.44 11.62 14.6033 11.3 14.93C10.98 15.2567 10.82 15.6533 10.82 16.12C10.82 16.5333 10.96 16.9 11.24 17.22C11.52 17.54 11.66 17.9133 11.66 18.34C11.66 18.7933 11.4967 19.1833 11.17 19.51C10.8433 19.8367 10.4533 20 10 20C8.64 20 7.34 19.74 6.1 19.22C4.91333 18.7133 3.85667 17.9967 2.93 17.07C2.00333 16.1433 1.28667 15.0867 0.78 13.9C0.26 12.66 0 11.36 0 10C0 8.64 0.26 7.34 0.78 6.1C1.28667 4.91333 2.00333 3.85667 2.93 2.93C3.85667 2.00333 4.91333 1.28667 6.1 0.780001C7.34 0.26 8.64 0 10 0ZM8.82 16.12C8.82 15.4533 8.98333 14.84 9.31 14.28C9.63667 13.72 10.08 13.2733 10.64 12.94C11.2 12.6067 11.8133 12.44 12.48 12.44H14.44C15.08 12.44 15.6733 12.28 16.22 11.96C16.7667 11.64 17.2 11.21 17.52 10.67C17.84 10.13 18 9.53333 18 8.88C18 7.65333 17.64 6.50667 16.92 5.44C16.2133 4.4 15.26 3.57333 14.06 2.96C12.82 2.32 11.47 2 10.01 2C8.55 2 7.2 2.36667 5.96 3.1C4.76 3.80667 3.80667 4.76 3.1 5.96C2.36667 7.2 2 8.54667 2 10C2 11.3733 2.32667 12.66 2.98 13.86C3.62 15.02 4.49333 15.96 5.6 16.68C6.73333 17.4267 7.97333 17.86 9.32 17.98C8.98667 17.3933 8.82 16.7733 8.82 16.12ZM5.5 10C5.08667 10 4.73333 9.85333 4.44 9.56C4.14667 9.26667 4 8.91333 4 8.5C4 8.08667 4.14667 7.73333 4.44 7.44C4.73333 7.14667 5.08667 7 5.5 7C5.91333 7 6.26667 7.14667 6.56 7.44C6.85333 7.73333 7 8.08667 7 8.5C7 8.91333 6.85333 9.26667 6.56 9.56C6.26667 9.85333 5.91333 10 5.5 10ZM14.5 10C14.0867 10 13.7333 9.85333 13.44 9.56C13.1467 9.26667 13 8.91333 13 8.5C13 8.08667 13.1467 7.73333 13.44 7.44C13.7333 7.14667 14.0867 7 14.5 7C14.9133 7 15.2667 7.14667 15.56 7.44C15.8533 7.73333 16 8.08667 16 8.5C16 8.91333 15.8533 9.26667 15.56 9.56C15.2667 9.85333 14.9133 10 14.5 10ZM10 7C9.58667 7 9.23333 6.85333 8.94 6.56C8.64667 6.26667 8.5 5.91333 8.5 5.5C8.5 5.08667 8.64667 4.73333 8.94 4.44C9.23333 4.14667 9.58667 4 10 4C10.4133 4 10.7667 4.14667 11.06 4.44C11.3533 4.73333 11.5 5.08667 11.5 5.5C11.5 5.91333 11.3533 6.26667 11.06 6.56C10.7667 6.85333 10.4133 7 10 7Z" fill="white"/></svg>',
            title: "Branding",
            content: "Criamos identidades visuais únicas que refletem a essência da marca e a destacam no mercado.",
            list: ["Logótipo", "Identidade Visual", "Manual de Marca", "Aplicações Gráficas", "Estratégia de Marca"],
            link: "#branding"
        },
        {
            id: 1,
            img: '<svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.78 14L9.2 10H5V8H9.42L9.94 3H11.96L11.42 8H15.42L15.94 3H17.96L17.42 8H21V10H17.22L16.8 14H21V16H16.58L16.06 21H14.04L14.58 16H10.58L10.06 21H8.04L8.58 16H5V14H8.78ZM10.8 14H14.78L15.2 10H11.22L10.8 14Z" fill="white"/></svg>',
            title: "Gestão de Redes Sociais",
            content: "Desenvolvemos e executamos estratégias de conteúdo que geram engagement e convertem seguidores em clientes fiéis.",
            list: ["Estratégia de Conteúdo", "Design de Redes Sociais", "Gestão Diária", "Relatórios de Perfomance", "Copywriter"],
            link: "#socialmedia"
        },
        {
            id: 2,
            img: '<svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 9L18.34 14.66L16.92 13.24L21.18 9L16.92 4.76L18.34 3.34L24 9ZM2.82 9L7.08 13.24L5.66 14.66L0 9L5.66 3.34L7.08 4.76L2.82 9ZM9.78 18H7.66L14.22 0H16.34L9.78 18Z" fill="white"/></svg>',
            title: "Web Design",
            content: "Desenvolvemos websites personalizados, responsivos e otimizados para conversão, e-Commerce, institucionais e landing pages.",
            list: ["UX/UI Design", "Design Responsívo", "Desenvolvimento Front-end", "Desenvolvimento Back-end", "Otimização SEO"],
            link: "#webdesign"
        }
    ];

    const boxes = [
        {
            id: 0,
            title: "Website ou landing page que converte?",
            description: "O vosso site atual está a gerar as vendas que esperavam?"
        },
        {
            id: 1,
            title: "Presença no digital?",
            description: "Os vossos clientes conseguem encontrar-vos facilmente online?"
        },
        {
            id: 2,
            title: "Comunicação clara e eficaz?",
            description: "A vossa mensagem está a chegar ao público certo de forma clara?"
        },
        {
            id: 3,
            title: "Estratégia digital alinhada ao vosso público?",
            description: "As vossas ações digitais estão a conectar com a audiência ideal?"
        }
    ];
    return (
        <Section id="services" alignContent="center">
            <Container className="services">
                <Heading size={1}>Os nossos serviços</Heading>

                <div className="div-100">
                    <p>
                        Oferecemos soluções completas para transformar a presença digital do vosso negócio
                        e consequentemente impulsionar o crescimento de forma orgânica.
                    </p>
                </div>

                <Columns centered={true} multiline={true}>
                    { columns.map(column => (
                        <Columns.Column narrow={true} className="div-39" id={column.link.replace("#", "")}>
                            <Card>
                                <div className="svg" dangerouslySetInnerHTML={{__html: column.img}}></div>
                                <Heading className="subtitle">{column.title}</Heading>
                                <p className="content">{column.content}</p>

                                <ul>
                                    {column.list?.map(item => (
                                        <li key={column.list.find(value => value == item)}>{item}</li>
                                    ))}
                                </ul>

                                <Link href={column.link}>
                                    <Button color={"warning"}>Saber mais</Button>
                                </Link>
                            </Card>
                        </Columns.Column>
                    )) }
                </Columns>

                <Box className="box-services">
                    <Container>
                        <Heading>Sentes que falta algo no teu negócio?</Heading>

                        Identificamos os principais desafios digitais que podem estar a limitar o crescimento.

                        <Columns mt={5} multiline={true}>
                            { boxes.map(box => (
                                <Columns.Column size="half">
                                    <Box className="box-column">
                                        <span className="subtitle">{box.title}</span>

                                        <p className="mt-4 has-text-white-bis">{box.description}</p>
                                    </Box>
                                </Columns.Column>
                            )) }
                        </Columns>

                        <Link href="#">
                            <Button>Diagnóstico Gratuito</Button>
                        </Link>
                    </Container>
                </Box>
            </Container>
        </Section>
    );
}
