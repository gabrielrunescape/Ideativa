import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

import {
    Box,
    Button,
    Card,
    Columns,
    Container,
    Form,
    Heading,
    Hero,
    Image,
    Navbar,
    Section,
    Tabs,
    Tag
} from 'react-bulma-components';

import { useState } from 'react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    const [email, setEmail]       = useState("");
    const [empresa, setEmpresa]   = useState("");
    const [mensagem, setMensagem] = useState("");
    const [nome, setNome]         = useState("");
    const [servico, setServico]   = useState("");
    const [telefone, setTelefone] = useState("");

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.4/css/bulma.min.css" />
            </Head>

            <header>
                <Navbar color="light">
                    <Container>
                        <Navbar.Brand>
                            <Navbar.Item href="#">
                            <svg width="640" height="160" viewBox="0 0 640 160" fill="none" xmlns="http:///www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z" fill="black" className="bd-svg-black"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z" fill="#00D1B2"></path>
                            </svg>
                            </Navbar.Item>
                            <Navbar.Burger />
                        </Navbar.Brand>

                        <Navbar.Menu>
                            <Navbar.Container align="right">
                                <Navbar.Item><Link href="#">Início</Link></Navbar.Item>
                                <Navbar.Item><Link href="#">Sobre Nós</Link></Navbar.Item>
                                <Navbar.Item><Link href="#">Serviços</Link></Navbar.Item>
                                <Navbar.Item><Link href="#">Equipa</Link></Navbar.Item>
                                <Navbar.Item><Link href="#">Projetos</Link></Navbar.Item>
                                <Navbar.Item><Button href="#">Marcar reunião</Button></Navbar.Item>
                            </Navbar.Container>
                        </Navbar.Menu>
                    </Container>
                </Navbar>
            </header>

            <Hero backgroundColor="link" colorVariant="dark">
                <Hero.Body>
                    <Container>
                        <Columns>
                            <Columns.Column>
                                <Heading size={1}>CRIAMOS MARCAS DIGITAIS</Heading>
                                <Box backgroundColor="warning">Especializados em BRANDING, REDES SOCIAIS e Web Design</Box>
                                <Columns style={{width: 500}} backgroundColor='link'>
                                    <Columns.Column>
                                        <Button color="warning" style={{width: 118}}><p><b>40+</b><br />Projetos</p></Button>
                                    </Columns.Column>

                                    <Columns.Column>
                                        <Button style={{width: 118}}><p><b>100%</b><br /> satisfação</p></Button>
                                    </Columns.Column>

                                    <Columns.Column style={{width: 118}}>
                                        <Button color="warning" ><p><b>24H</b> <br /> resposta</p></Button>
                                    </Columns.Column>
                                </Columns>

                                <Columns style={{width: 700}}>
                                    <Columns.Column>
                                        <Button color="warning" style={{width: 330}}>DIAGNÓSTICO GRÁTIS 🡒</Button>
                                    </Columns.Column>

                                    <Columns.Column>
                                        <Button style={{width: 282}}>VER TRABALHOS</Button>
                                    </Columns.Column>
                                </Columns>
                            </Columns.Column>

                            <Columns.Column>
                                <Button color="warning">Design criativo</Button>
                                <Card>
                                    <Card.Header>
                                        _Image src="bell"
                                    </Card.Header>

                                    <Card.Content>
                                        <Heading size={4}>Crescimento Garantido</Heading>
                                        <p>Estratégias digitais que transformam visitantes em clientes fiéis.</p>
                                    </Card.Content>

                                    <Card.Footer>
                                        _Image src="graph"
                                        Resultados Reais
                                    </Card.Footer>
                                </Card>
                                <Button color="success"><p><b>+300%</b><br />Vendas</p></Button>
                            </Columns.Column>
                        </Columns>
                    </Container>
                </Hero.Body>
            </Hero>

            <Section>
                <Container>
                    <Heading size={1} textColor="warning">Sobre nós</Heading>

                    <p>
                        Somos a Consultora Digital que falta no teu negócio! <br />
                        Inovadores e principalmente, focados em transformar a presença online <br />
                        através de estratégias personalizadas e tecnologia de ponta!
                    </p>

                    <Columns>
                        <Columns.Column>
                            _Image src="house"
                            <Heading size={4}>Trablaho remoto e Flexível</Heading>
                            Operamos de forma totalmente remota, garantindo flexibilidade e efici~encia em todos os projetos
                        </Columns.Column>

                        <Columns.Column>
                            _Image src="uknown"
                            <Heading size={4}>Equipa Multifacetada</Heading>
                            Reunimos especialistas em design, desenvolvimento, marketing e cibersegurança numa só equipa.
                        </Columns.Column>

                        <Columns.Column>
                            _Image src="rocket"
                            <Heading size={4}>Foco em Negócios que querem Crescer</Heading>
                            Trabalhamos exclusivamente com empresas ambiciosas que procuram expandir a sua presença digital.
                        </Columns.Column>

                        <Columns.Column
                        /*className="flex-1 rounded-br-lg rounded-bl-lg lg:rounded-tl-lg lg:rounded-br-none lg:p-20 shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] "*/>
                            _Image src="shield"
                            <Heading size={4}>Soluções Seguras</Heading>
                            Todas as nossas soluções incluem cibersegurança integrada para proteger o vosso negócio.
                        </Columns.Column>
                    </Columns>

                    <Columns>
                        <Columns.Column>
                            <Heading size={4}>A nossa Missão</Heading>

                            <p>
                                Preparamos e qualificamos negócios ambiciosos com soluções digitais inovadoras e seguras.
                                A nossa missão é ser o parceiro estratégico que transforma ideias em realidades digitais de sucesso!
                            </p>

                            <p>
                                Combinamos criatividade, tecnologia e estratégia para entregar resultados que superam expectativas
                                e impulsionam o crescimento sustentável dos nossos clientes.
                            </p>

                            <Button color="warning">Marcar uma reunião</Button>
                        </Columns.Column>

                        <Columns.Column className="flex-1 rounded-br-lg rounded-bl-lg bg-white p-6 pb-12 text-[13px] leading-[20px] shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] lg:rounded-tl-lg lg:rounded-br-none lg:p-20 dark:bg-[#161615] dark:text-[#EDEDEC] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]">
                            _Image src="office_meeting_exciting"
                        </Columns.Column>
                    </Columns>
                </Container>
            </Section>

            <Section alignContent="center">
                <Container>
                    <Heading size={1} textColor="link">Os nossos serviços</Heading>

                    <p>
                        Oferecemos soluções completas para t ransformar a presença digital do vosso negócio e consequentemente impulsionar o crescimento de forma orgânica.
                    </p>

                    <Columns>
                        <Columns.Column>
                            <Card>
                                <Card.Header>
                                    _Image src="pallet"<br />
                                    <Heading size={4}>Branding</Heading>
                                </Card.Header>

                                <Card.Content>
                                    Criamos identiidades visiauis únicas que refletem a essência da marca e a destacam no mercado.

                                    <ul>
                                        <li>Logótipo</li>
                                        <li>Identidade Visual</li>
                                        <li>Manual de Marca</li>
                                        <li>Aplicações Gráficas</li>
                                        <li>Estratégia de Marca</li>
                                    </ul>
                                </Card.Content>

                                <Card.Footer>
                                    <Button color="warning">Saber Mais</Button>
                                </Card.Footer>
                            </Card>
                        </Columns.Column>

                        <Columns.Column>
                            <Card>
                                <Card.Header>
                                    _Image src="hashtag"<br />
                                    <Heading size={4}>Gestão de Redes Sociais</Heading>
                                </Card.Header>

                                <Card.Content>
                                    Desenvolvemos e executamos estratégias de conteúdo que geram engagement e convertem seguidores em clientes fiéis.

                                    <ul>
                                        <li>Estratégia de Conteúdo</li>
                                        <li>Design de Redes Sociais</li>
                                        <li>Gestão Diária</li>
                                        <li>Relatórios de Perfomance</li>
                                        <li>Copywriter</li>
                                    </ul>
                                </Card.Content>

                                <Card.Footer>
                                    <Button color="warning">Saber Mais</Button>
                                </Card.Footer>
                            </Card>
                        </Columns.Column>

                        <Columns.Column>
                            <Card>
                                <Card.Header>
                                    _Image src="htmltag"<br />
                                    <Heading size={4}>Web Design</Heading>
                                </Card.Header>

                                <Card.Content>
                                    Desenhamos e desenvolvemos websites personalizados, responsivos, rápidos otimizados para conversão. Website de e-commerce, Institucionais e Landing pages.

                                    <ul>
                                        <li>UX/UI Design</li>
                                        <li>Design Responsívo</li>
                                        <li>Desenvolvimento Front-end</li>
                                        <li>Desenvolvimento Back-end</li>
                                        <li>Otimização SEO</li>
                                    </ul>
                                </Card.Content>

                                <Card.Footer>
                                    <Button color="warning">Saber Mais</Button>
                                </Card.Footer>
                            </Card>
                        </Columns.Column>
                    </Columns>

                    <Box backgroundColor="link">
                        <Container>
                            <Heading size={3}>Sentes que falta algo no teu negócio?</Heading>

                            Identificamos os principais desafios digitais que pdem estar a limitar o crescimento.

                            <Columns>
                                <Columns.Column>
                                    <Box backgroundColor="grey-light">
                                        <b className='has-text-warning'>Website ou landing page que converte?</b>

                                        <p className="mt-4 has-text-white-bis">O vosso site atual está a gerar as vendas que esperavam?</p>
                                    </Box>

                                    <Box backgroundColor="grey-light">
                                        <Heading size={6} textColor="warning">Comunicação clara e eficaz?</Heading>

                                        <p className="mt-4 has-text-white-ter">A vossa mensagem está a chegar ao público certo de forma clara?</p>
                                    </Box>
                                </Columns.Column>

                                <Columns.Column>
                                    <Box backgroundColor="grey-light">
                                        <Heading size={6} textColor="warning">Presença no digital?</Heading>

                                        <p className="mt-4 has-text-white-bis">Os vossos clientes conseguem encontrar-vos facilmente online?</p>
                                    </Box>

                                    <Box backgroundColor="grey-light">
                                        <Heading size={6} textColor="warning">Estratégia digital alinhada ao vosso público?</Heading>

                                        <p className="mt-4 has-text-white-ter">As vossas ações digitais estão a conectar com a audiência ideal?</p>
                                    </Box>
                                </Columns.Column>
                            </Columns>

                            <Button backgroundColor="warning">Diagnóstico Gratuito</Button>
                        </Container>
                    </Box>
                </Container>
            </Section>

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

            <Section textAlign="center">
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

            <Section textAlign="center">
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

            <Section textAlign="center">
                <Container>
                    <Heading size={1} textColor="info-dark">Vamos Conversar?</Heading>

                    <p>
                        Preenche o formulário abaixo e entraremos em contacto dentro de 24 horas para agendar o diagnóstico gratuito. Obrigada!
                    </p>

                    <Columns>
                        <Columns.Column size={2}>
                            _Image src="phone"
                            <Heading size={6} textColor="info-dark">Telefone</Heading>
                            +351 XXX XXX XXX

                            _Image src="mail"
                            <Heading size={6} textColor="info-dark">Email</Heading>
                            geral@ideativaconsultora.pt
                        </Columns.Column>

                        <Columns.Column size={3} narrow={true} />

                        <Columns.Column size={8}>
                            <Box textAlign="left">
                                <form>
                                    <Columns>
                                        <Columns.Column size="half">
                                            <Form.Field>
                                                <Form.Label>Nome completo *</Form.Label>
                                                <Form.Control>
                                                    <Form.Input
                                                        value={nome}
                                                        onChange={e => setNome(e.target.value) }
                                                        placeholder="O vosso nome"
                                                        color="sucess" />
                                                </Form.Control>
                                            </Form.Field>

                                            <Form.Field>
                                                <Form.Label>Telefone</Form.Label>
                                                <Form.Control>
                                                    <Form.Input
                                                        value={telefone}
                                                        onChange={e => setTelefone(e.target.value) }
                                                        placeholder="+351 xxx xxx xxx"
                                                        type="email"
                                                        color="sucess" />
                                                </Form.Control>
                                            </Form.Field>
                                        </Columns.Column>

                                        <Columns.Column size="half">
                                            <Form.Field>
                                                <Form.Label>Email *</Form.Label>
                                                <Form.Control>
                                                    <Form.Input
                                                        value={email}
                                                        onChange={e => setEmail(e.target.value) }
                                                        placeholder="vosso@email.com"
                                                        type="email"
                                                        color="sucess" />
                                                </Form.Control>
                                            </Form.Field>

                                            <Form.Field>
                                                <Form.Label>Empresa</Form.Label>
                                                <Form.Control>
                                                    <Form.Input
                                                        value={empresa}
                                                        onChange={e => setEmpresa(e.target.value) }
                                                        placeholder="Nome da vossa empresa"
                                                        color="sucess" />
                                                </Form.Control>
                                            </Form.Field>
                                        </Columns.Column>
                                    </Columns>
                                    <Form.Field>
                                        <Form.Label>Serviço de Interesse *</Form.Label>
                                        <Form.Control>
                                            <Form.Select
                                                value={servico}
                                                onChange={e => setServico(e.target.value) }
                                            >
                                                <option value={1}>Instagram</option>
                                                <option value={2}>TikTok</option>
                                                <option value={4}>Pinterest</option>
                                                <option value={3}>Youtube</option>
                                            </Form.Select>
                                        </Form.Control>
                                    </Form.Field>

                                    <Form.Field>
                                        <Form.Label>Mensagem *</Form.Label>
                                        <Form.Control>
                                            <Form.Textarea
                                                value={mensagem}
                                                onChange={e => setMensagem(e.target.value) }
                                                placeholder="Contem-nos mais sobre o vosso projeto e objetivos...."
                                                type="text"
                                                color="sucess" />
                                        </Form.Control>
                                    </Form.Field>

                                    { mensagem.length ? mensagem.length : 0 } / 500 caracteres

                                    <Form.Field>
                                        <Form.Control fullwidth={true}>
                                            <Button type="submit" size="large" color="warning">Submit</Button>
                                        </Form.Control>
                                        </Form.Field>
                                </form>
                            </Box>
                        </Columns.Column>
                    </Columns>
                </Container>
            </Section>

            <Section backgroundColor="link-dark">
                <Container>
                    <Columns>
                        <Columns.Column size={3}>
                            _Image src="logo_ideativa"

                            <p>
                                Transformamos negócios ambiciosos através de soluções digitais inovadoras, combinando
                                criatividade, tecnologia e estratégia que comsequentemente gerem resultados excepcionais.
                            </p>

                            <ul>
                                <li>_Image src="facebook"</li>
                                <li>_Image src="instagram"</li>
                                <li>_Image src="instagram"</li>
                            </ul>
                        </Columns.Column>

                        <Columns.Column size={4} narrow={true} />

                        <Columns.Column size={2}>
                            <Heading size={6} textColor="warning">Serviços</Heading>

                            <ul>
                                <li>Branding</li>
                                <li>Web Design</li>
                                <li>Redes Sociais</li>
                                <li>Cibersegurança</li>
                                <li>Consultoria Digital</li>
                            </ul>
                        </Columns.Column>

                        <Columns.Column size={2}>
                            <Heading size={6} textColor="warning">Empresas</Heading>

                            <ul>
                                <li>Sobre Nós</li>
                                <li>Equipa</li>
                                <li>Projetos</li>
                            </ul>
                        </Columns.Column>

                        <Columns.Column narrow={true} />
                    </Columns>

                    <Columns>
                        <Columns.Column>
                            (C) 2025 Vossa Consultora Digital. Todos os direitos reservados.
                        </Columns.Column>

                        <Columns.Column>
                            <ul>
                                <li>Política de Privacidade</li>
                                <li>Termos de Serviço</li>
                                <li>Cookies</li>
                            </ul>
                        </Columns.Column>
                    </Columns>
                </Container>
            </Section>
        </>
    );
}
