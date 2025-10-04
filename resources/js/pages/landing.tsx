import { type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';

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
    //const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.bunny.net"/>
                <link rel="icon" type="image/x-icon" href={favicon}/>
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet"/>
                <link rel="stylesheet" href='css/ideativa_style.css'/>
            </Head>

            <Header/>

            <Hero/>

            <AboutUs />

            <Services />

            <Section backgroundColor="grey-light" textAlign="center">
                <Container>
                    <Heading size={1} textColor="warning" mb={4}>O nosso processo</Heading>

                    Um processo estruturado e transparente que garante resultados excecionais em cada projeto que desenvolvemos convosco.

                    <Columns my={2}>
                        <Columns.Column>
                            <Card>
                                <ul>
                                    <li>_Image src="glass"</li>
                                    <li><Heading size={3}>01</Heading></li>
                                    <li><Heading size={4}>Diagnóstico Gratuito</Heading></li>
                                    <li>Analisamos a vossa presença digital atual e identificamos oportunidades de melhoria sem qualquer compromisso</li>
                                </ul>
                            </Card>
                        </Columns.Column>

                        <Columns.Column>
                            <Card>
                                <ul>
                                    <li>_Image src="paper"</li>
                                    <li><Heading size={3}>02</Heading></li>
                                    <li><Heading size={4}>Proposta Personalizada</Heading></li>
                                    <li>Criamos uma estratégia customizada baseada nos vossos objetivos especificos e forçamento disponível</li>
                                </ul>
                            </Card>
                        </Columns.Column>

                        <Columns.Column>
                            <Card>
                                <ul>
                                    <li>_Image src="uknown"</li>
                                    <li><Heading size={3}>03</Heading></li>
                                    <li><Heading size={4}>Reunião de Alinhamento</Heading></li>
                                    <li>Definimos todos os detalhes do projeto, para garantir o sucesso da parceria.</li>
                                </ul>
                            </Card>
                        </Columns.Column>

                        <Columns.Column>
                            <Card>
                                <ul>
                                    <li>_Image src="eye"</li>
                                    <li><Heading size={3}>04</Heading></li>
                                    <li><Heading size={4}>Acompanhamento</Heading></li>
                                    <li>Mantemos comunicação regular e transparente durante todo o desenvolvimento do vosso projeto.</li>
                                </ul>
                            </Card>
                        </Columns.Column>

                        <Columns.Column>
                            <Card>
                                <ul>
                                    <li>_Image src="rocket"</li>
                                    <li><Heading size={3}>05</Heading></li>
                                    <li><Heading size={4}>Entrega Final</Heading></li>
                                    <li>Entregamos o projeto completo com formação e suporte contínuo para garantir o sucesso contínuo.</li>
                                </ul>
                            </Card>
                        </Columns.Column>
                    </Columns>
                </Container>
            </Section>

            <Section id="team" textAlign="center">
                <Container>
                    <Heading size={1} textColor="info" mb={4}>O nosso processo</Heading>

                    Conheça os especialistas que trabalham diariamente para transformar a vosssa presença digital e impulsionar o crescimento do vosso negócio.

                    <Columns multiline={true}>
                        <Columns.Column size={3}>
                            <Card>
                                <Card.Header>
                                    _Image src="sofia"
                                </Card.Header>

                                <Card.Content>
                                    <ul>
                                        <li><Heading size={6} textColor="link">Sofia Duarte</Heading></li>
                                        <li><span className="has-text-warning">Fundadora & Web Designer</span></li>

                                        <li>UI/UX Designer especialista em criar experiências digitais memoráveis e funcionais.</li>

                                        <li><Tag>UI/UX Design</Tag> <Tag>Web Design</Tag> <Tag>Liderança</Tag> <Tag>Estratégia</Tag></li>
                                    </ul>
                                </Card.Content>
                            </Card>
                        </Columns.Column>

                        <Columns.Column size={3}>
                            <Card>
                                <Card.Header>
                                    _Image src="ines"
                                </Card.Header>

                                <Card.Content>
                                    <ul>
                                        <li><Heading size={6} textColor="link">Inês</Heading></li>
                                        <li><span className="has-text-warning">Branding & Designer</span></li>

                                        <li>Especialista em criar identidades visuais únicas que capturam a essência das marcas.</li>

                                        <li>
                                            <Tag>Branding</Tag> <Tag>Design Gráfico</Tag> <Tag>Identidade Visual</Tag> <Tag>Criatividade</Tag>
                                        </li>
                                    </ul>
                                </Card.Content>
                            </Card>
                        </Columns.Column>

                        <Columns.Column size={3}>
                            <Card>
                                <Card.Header>
                                    _Image src="marta"
                                </Card.Header>

                                <Card.Content>
                                    <ul>
                                        <li><Heading size={6} textColor="link">Marta</Heading></li>
                                        <li><span className="has-text-warning">Copywriter</span></li>

                                        <li>Redatora criativa que transforma ideias em conteúdo persuativo e envolvente.</li>

                                        <li>
                                            <Tag>Copywriting</Tag> <Tag>Content Strategy</Tag> <Tag>Storytelling</Tag> <Tag>SEO</Tag>
                                        </li>
                                    </ul>
                                </Card.Content>
                            </Card>
                        </Columns.Column>

                        <Columns.Column size={3}>
                            <Card>
                                <Card.Header>
                                    _Image src="valentina"
                                </Card.Header>

                                <Card.Content>
                                    <ul>
                                        <li><Heading size={6} textColor="link">Valentina</Heading></li>
                                        <li><span className="has-text-warning">Estratégia & Gestora de Redes Sociais</span></li>

                                        <li>Especialista em criar estratégias digitais que geram engagement e resultados.</li>

                                        <li>
                                            <Tag>Social</Tag> <Tag>Estratégia Digital</Tag> <Tag>Analytics</Tag> <Tag>Engagement</Tag>
                                        </li>
                                    </ul>
                                </Card.Content>
                            </Card>
                        </Columns.Column>

                        <Columns.Column size={3}>
                            <Card>
                                <Card.Header>
                                    _Image src="gabriel"
                                </Card.Header>

                                <Card.Content>
                                    <ul>
                                        <li><Heading size={6} textColor="link">Gabriel Prado</Heading></li>
                                        <li><span className="has-text-warning">Programador</span></li>

                                        <li>Desenvolvedor experiente que transforma designs em websites rápidos e funcionais.</li>

                                        <li>
                                            <Tag>Frontend</Tag> <Tag>Backend</Tag> <Tag>JavaScript</Tag> <Tag>React</Tag>
                                        </li>
                                    </ul>
                                </Card.Content>
                            </Card>
                        </Columns.Column>

                        <Columns.Column size={3}>
                            <Card>
                                <Card.Header>
                                    _Image src="tamires"
                                </Card.Header>

                                <Card.Content>
                                    <ul>
                                        <li><Heading size={6} textColor="link">Tamires Pereira</Heading></li>
                                        <li><span className="has-text-warning">Programadora & Cibersegurança</span></li>

                                        <li>Desenvolvedora especializada em soluções seguras e proteção de dados..</li>

                                        <li>
                                            <Tag>Cibersegurança</Tag> <Tag>Programação</Tag> <Tag>Proteção de Dados</Tag> <Tag>DevSecOps</Tag>
                                        </li>
                                    </ul>
                                </Card.Content>
                            </Card>
                        </Columns.Column>

                        <Columns.Column size={3}>
                            <Card>
                                <Card.Header>
                                    _Image src="luis"
                                </Card.Header>

                                <Card.Content>
                                    <ul>
                                        <li><Heading size={6} textColor="link">Luís Zuna</Heading></li>
                                        <li><span className="has-text-warning">Gestor de Clientes</span></li>

                                        <li>Especialista em relacionamento com clientes e gestão de projetos para garantir o sucesso.</li>

                                        <li>
                                            <Tag>Gestão de Projetos</Tag> <Tag>Relacionamento</Tag> <Tag>Comunicação</Tag> <Tag>Estratégia</Tag>
                                        </li>
                                    </ul>
                                </Card.Content>
                            </Card>
                        </Columns.Column>
                    </Columns>

                    <Box backgroundColor="info-dark">
                        <Container>
                            <Heading size={5} textColor="light">Pronto para conhecer a nossa equipa?</Heading>

                            <p className="has-text-white-ter my-3">
                                Não percas mais tempo e marca uma reunião gratuita, para descobrires como podemos ajudar o teu negócio a crescer no mundo digital.
                            </p>

                            <Button color="warning" textColor="light" mt={2}>Marcar Reunião com a Equipa</Button>
                        </Container>
                    </Box>
                </Container>
            </Section>

            <Section id="projects" textAlign="center">
                <Container>
                    <Heading size={1}>Os Nossos Projetos</Heading>

                    <p>
                        Conheçam alguns dos nossos projetos que desenvolvemos e transformamos a sua presença digital
                    </p>

                    <Tabs align="center">
                        <ul>
                            <li>Todos os projetos</li>
                            <li>Websites</li>
                            <li>Branding</li>
                            <li>Redes Sociais</li>
                        </ul>
                    </Tabs>

                    <Columns multiline={true}>
                        <Columns.Column size={4}>
                            <Card>
                                <Card.Header>
                                    _Image src="img_landing"
                                </Card.Header>

                                <Card.Content>
                                    <Heading size={6} textColor="link-dark">
                                        Landing Page Institucional
                                    </Heading>

                                    <p>
                                        Landing page para uma empresa em desenvolvimento e a crescer Essencia 360
                                    </p>

                                    <Tag>Web Design</Tag>
                                    <Tag>Recursos humanos</Tag>
                                    <Tag>Textos</Tag>
                                </Card.Content>

                                <Card.Footer>
                                    <Button backgroundColor="info-dark" textColor="white">
                                        Ver Detalhes
                                    </Button>
                                </Card.Footer>
                            </Card>
                        </Columns.Column>

                        <Columns.Column size={4}>
                            <Card>
                                <Card.Header>
                                    _Image src="img_logo"
                                </Card.Header>

                                <Card.Content>
                                    <Heading size={6} textColor="link-dark">
                                        Logotipo
                                    </Heading>

                                    <p>
                                        Identidade visual completa para clinica dental,
                                        incluindo logótipo e materiais gráficos.
                                    </p>

                                    <Tag>Logotipo</Tag>
                                    <Tag>Identidade Visual</Tag>
                                    <Tag>Material Gráfico</Tag>
                                </Card.Content>

                                <Card.Footer>
                                    <Button backgroundColor="info-dark" textColor="white">
                                        Ver Detalhes
                                    </Button>
                                </Card.Footer>
                            </Card>
                        </Columns.Column>

                        <Columns.Column size={4}>
                            <Card>
                                <Card.Header>
                                    _Image src="img_socialmedia"
                                </Card.Header>

                                <Card.Content>
                                    <Heading size={6} textColor="link-dark">
                                        Estratégias de Redes Sociais
                                    </Heading>

                                    <p>
                                        Gestão completa de redes sociais com aumento de 300% no engagement.
                                    </p>

                                    <Tag>Instagram</Tag>
                                    <Tag>Content Creation</Tag>
                                    <Tag>Engagement</Tag>
                                </Card.Content>

                                <Card.Footer>
                                    <Button backgroundColor="info-dark" textColor="white">
                                        Ver Detalhes
                                    </Button>
                                </Card.Footer>
                            </Card>
                        </Columns.Column>

                        <Columns.Column size={4}>
                            <Card>
                                <Card.Header>
                                    _Image src="img_socialmedia_design"
                                </Card.Header>

                                <Card.Content>
                                    <Heading size={6} textColor="link-dark">
                                        Social Media Designer
                                    </Heading>

                                    <p>
                                        Landing page otimizada para conversão com sistema de agendamento de aulas.
                                    </p>

                                    <Tag>Landing Page</Tag>
                                    <Tag>Agendamento</Tag>
                                    <Tag>Conversão</Tag>
                                </Card.Content>

                                <Card.Footer>
                                    <Button backgroundColor="info-dark" textColor="white">
                                        Ver Detalhes
                                    </Button>
                                </Card.Footer>
                            </Card>
                        </Columns.Column>

                        <Columns.Column size={3}>
                            <Card>
                                <Card.Header>
                                    _Image src="img_copywrite"
                                </Card.Header>

                                <Card.Content>
                                    <Heading size={6} textColor="link-dark">
                                        Copywrite
                                    </Heading>

                                    <p>
                                        Rebranding completo com a nova identidade visual e packaging para produtos.
                                    </p>

                                    <Tag>Rebranding</Tag>
                                    <Tag>Packaging</Tag>
                                    <Tag>Menu Design</Tag>
                                </Card.Content>

                                <Card.Footer>
                                    <Button backgroundColor="info-dark" textColor="white">
                                        Ver Detalhes
                                    </Button>
                                </Card.Footer>
                            </Card>
                        </Columns.Column>

                        <Columns.Column size={4}>
                            <Card>
                                <Card.Header>
                                    _Image src="img_site"
                                </Card.Header>

                                <Card.Content>
                                    <Heading size={6} textColor="link-dark">
                                        Bio Site
                                    </Heading>

                                    <p>
                                        Estratégia de conteúdo educativo que duplicou o número de matrículas.
                                    </p>

                                    <Tag>Conteúdo Educativo</Tag>
                                    <Tag>Facebook</Tag>
                                    <Tag>Matrículas</Tag>
                                </Card.Content>

                                <Card.Footer>
                                    <Button backgroundColor="info-dark" textColor="white">
                                        Ver Detalhes
                                    </Button>
                                </Card.Footer>
                            </Card>
                        </Columns.Column>
                    </Columns>

                    <Box backgroundColor="info-dark">
                        <Container>
                            <Heading size={5} textColor="light">Pronto para conhecer a nossa equipa?</Heading>

                            <p className="has-text-white-ter my-3">
                                Não percas mais tempo e marca uma reunião gratuita, para descobrires como podemos ajudar o teu negócio a crescer no mundo digital.
                            </p>

                            <Button color="warning" textColor="light" mt={2}>Marcar Reunião com a Equipa</Button>
                        </Container>
                    </Box>
                </Container>
            </Section>

            <Contact />

            <Footer />
        </>
    );
}
