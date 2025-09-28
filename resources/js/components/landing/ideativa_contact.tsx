import {Box, Button, Columns, Container, Form, Heading, Section} from "react-bulma-components";
import { useState } from "react";
import {AsteriskError} from "@/components/landing/error_forms";
import {BoxForm} from "@/components/landing/ideativa_contact_box_form";

export interface Servicos {
    id: number;
    content: string;
}

export function ContactUs() {
    const contacts = [
        {
            id: 0,
            title: "Telefone",
            description: "+351 928 309 350",
            link: "tel:928309350",
            icon: '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.36 7.68C6.82667 8.50667 7.39667 9.25667 8.07 9.93C8.74333 10.6033 9.49333 11.1733 10.32 11.64L11.2 10.4C11.3467 10.1867 11.5433 10.0533 11.79 10C12.0367 9.94667 12.2733 9.98 12.5 10.1C13.9267 10.8867 15.4533 11.34 17.08 11.46C17.3333 11.4867 17.55 11.5933 17.73 11.78C17.91 11.9667 18 12.1933 18 12.46V16.92C18 17.1733 17.9133 17.3967 17.74 17.59C17.5667 17.7833 17.3533 17.8933 17.1 17.92C16.5667 17.9733 16.0333 18 15.5 18C13.3933 18 11.38 17.5933 9.46 16.78C7.60667 15.9933 5.96667 14.8867 4.54 13.46C3.11333 12.0333 2.00667 10.3933 1.22 8.54C0.406667 6.62 0 4.60667 0 2.5C0 1.96667 0.0266667 1.43333 0.08 0.9C0.106667 0.646667 0.216667 0.433334 0.41 0.26C0.603333 0.0866661 0.826667 0 1.08 0H5.54C5.80667 0 6.03333 0.0900002 6.22 0.27C6.40667 0.450001 6.51333 0.666668 6.54 0.92C6.66 2.54667 7.11333 4.07333 7.9 5.5C8.02 5.72667 8.05333 5.96333 8 6.21C7.94667 6.45667 7.81333 6.65333 7.6 6.8L6.36 7.68ZM3.84 7.02L5.74 5.66C5.20667 4.5 4.84 3.28 4.64 2H2V2.5C2 4.32667 2.35333 6.08 3.06 7.76C3.74 9.37333 4.70333 10.8033 5.95 12.05C7.19667 13.2967 8.62667 14.26 10.24 14.94C11.92 15.6467 13.6733 16 15.5 16H16V13.36C14.72 13.16 13.5 12.7933 12.34 12.26L10.98 14.16C10.4333 13.9467 9.9 13.6933 9.38 13.4L9.32 13.38C8.34667 12.82 7.46 12.14 6.66 11.34C5.86 10.54 5.18 9.65333 4.62 8.68L4.6 8.62C4.30667 8.1 4.05333 7.56667 3.84 7.02Z" fill="#F4A260"/></svg>'
        },
        {
            id: 1,
            title: "E-mail",
            description: "geral@ideativaconsultora.pt",
            link: "mailto:geral@ideativaconsultora.pt",
            icon: '<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 0H19C19.28 0 19.5167 0.0966663 19.71 0.290001C19.9033 0.483334 20 0.720001 20 1V17C20 17.28 19.9033 17.5167 19.71 17.71C19.5167 17.9033 19.28 18 19 18H1C0.72 18 0.483333 17.9033 0.29 17.71C0.0966667 17.5167 0 17.28 0 17V1C0 0.720001 0.0966667 0.483334 0.29 0.290001C0.483333 0.0966663 0.72 0 1 0ZM18 4.24L10.08 11.34L2 4.22V16H18V4.24ZM2.52 2L10.06 8.66L17.5 2H2.52Z" fill="#F4A260"/></svg>'
        },
        {
            id: 2,
            title: "Local",
            description: "Remoto, com base em Fátima",
            link: "https://www.google.com/maps/place/F%C3%A1tima/@39.6079142,-8.700663,13.07z",
            icon: '<svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 18.8999L14.45 13.9499C15.4289 12.9709 16.0955 11.7236 16.3655 10.3658C16.6356 9.00795 16.4969 7.60052 15.9671 6.32148C15.4373 5.04244 14.54 3.94923 13.3889 3.18009C12.2378 2.41095 10.8844 2.00043 9.5 2.00043C8.11556 2.00043 6.76221 2.41095 5.61108 3.18009C4.45995 3.94923 3.56274 5.04244 3.03291 6.32148C2.50307 7.60052 2.36441 9.00795 2.63445 10.3658C2.90449 11.7236 3.5711 12.9709 4.55 13.9499L9.5 18.8999ZM9.5 21.7279L3.136 15.3639C1.87734 14.1052 1.02018 12.5016 0.672921 10.7558C0.325663 9.00995 0.503899 7.20035 1.18509 5.55582C1.86628 3.91129 3.01984 2.50569 4.49988 1.51677C5.97992 0.527838 7.71997 0 9.5 0C11.28 0 13.0201 0.527838 14.5001 1.51677C15.9802 2.50569 17.1337 3.91129 17.8149 5.55582C18.4961 7.20035 18.6743 9.00995 18.3271 10.7558C17.9798 12.5016 17.1227 14.1052 15.864 15.3639L9.5 21.7279ZM9.5 10.9999C10.0304 10.9999 10.5391 10.7892 10.9142 10.4141C11.2893 10.0391 11.5 9.53035 11.5 8.99992C11.5 8.46949 11.2893 7.96078 10.9142 7.58571C10.5391 7.21064 10.0304 6.99992 9.5 6.99992C8.96956 6.99992 8.46086 7.21064 8.08578 7.58571C7.71071 7.96078 7.5 8.46949 7.5 8.99992C7.5 9.53035 7.71071 10.0391 8.08578 10.4141C8.46086 10.7892 8.96956 10.9999 9.5 10.9999ZM9.5 12.9999C8.43913 12.9999 7.42171 12.5785 6.67157 11.8283C5.92142 11.0782 5.5 10.0608 5.5 8.99992C5.5 7.93906 5.92142 6.92164 6.67157 6.17149C7.42171 5.42135 8.43913 4.99992 9.5 4.99992C10.5609 4.99992 11.5783 5.42135 12.3284 6.17149C13.0786 6.92164 13.5 7.93906 13.5 8.99992C13.5 10.0608 13.0786 11.0782 12.3284 11.8283C11.5783 12.5785 10.5609 12.9999 9.5 12.9999Z" fill="#F5A261"/></svg>'
        }
    ];

    const services: Array<Servicos> =  [
        { id: 6, content: "Aplicações" },
        { id: 1, content: "Branding" },
        { id: 2, content: "Gestão de redes sociais" },
        { id: 7, content: "Quero ser contactado" },
        { id: 4, content: "Reclamações e sugestões" },
        { id: 5, content: "Suporte e informações" },
        { id: 3, content: "Web sites" },
    ];

    return (
        <>
            <Section className="contact-us">
                <Container>
                    <Heading>Vamos Conversar?</Heading>
                    <div className="div-852">
                        <p>
                            Preenche o formulário abaixo e entraremos em contacto dentro de 24 horas para agendar o diagnóstico gratuito. Obrigada!
                        </p>
                    </div>

                    <Columns mt={5}>
                        <Columns.Column mt={5} size={4}>
                            {contacts.map((contact) => (
                                <Box key={contact.id} className="box-contact">
                                    <Columns>
                                        <Columns.Column narrow={true}>
                                            <div className="svg" dangerouslySetInnerHTML={{__html: contact.icon}}></div>
                                        </Columns.Column>

                                        <Columns.Column>
                                            <span>{contact.title}</span> <br />

                                            <a href={contact.link}>{contact.description}</a>
                                        </Columns.Column>
                                    </Columns>
                                </Box>
                            )) }
                        </Columns.Column>

                        <Columns.Column offset={1}>
                            <BoxForm servicos={services} />

                        </Columns.Column>
                    </Columns>
                </Container>
            </Section>
        </>
    );
}
