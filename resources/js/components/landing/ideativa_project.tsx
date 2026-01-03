import { useEffect, useState } from 'react';
import { Box, Button, Card, Columns, Container, Heading, Section, Tabs, Tag } from 'react-bulma-components';

import network from '/resources/images/Group 1171274982.jpg';
import branding from '/resources/images/Group 1171274993.png';
import website from '/resources/images/Group 1171274984.png';

enum Filtro {
    All, WebSite, Branding, Network
}

/** Prototipo do tipo/objeto <u>Project</u> */
type Project = {
    id: number,
    img: string,
    title: string,
    description: string,
    category: Filtro,
    tags: string[],
}

/**
 * Lista de projetos
 */
const projects = [
    {
        id: 1,
        img: network,
        title: 'Gestão de Redes Sociais',
        description: 'Conteúdo estratégico e design profissional para aumentar autoridade, alcance e vendas.',
        category: Filtro.Network,
        tags: ['Instagram', 'Portifolio', 'UI/UX Design']
    },
    {
        id: 2,
        img: branding,
        title: 'Identidade Visual',
        description: 'Construímos marcas memoráveis que transmitem confiança e autenticidade.',
        category: Filtro.Branding,
        tags: ['Logotipo', 'Identidade Visual', 'Material Gráfico']
    },
    {
        id: 3,
        img: website,
        title: 'Landing Page',
        description: 'Construímos páginas que convertem visitantes em clientes com clareza e impacto.',
        category: Filtro.WebSite,
        tags: ['Website', 'Captação de Leads', 'Serviços']
    },
];

/**
 * Renderiza componente para secção de projetos.
 *
 * @author Gabriel Prado <gabrielfilipe@mail.ru>
 * @version 1.0.0
 * @since 2026-01-02
 */
export function iProject() {
    const [selected, setSelected] = useState(Filtro.All);
    const [showProjects, setProjects] = useState(projects);

    /**
     * Função interna para filtrar projetos a serem exibidos;
     *
     * @param type Filtro que será utilizado para exibição de items.
     */
    const filterProjects = (type: Filtro) => {
        const newArray: Project[] = [];

        if (type === Filtro.All) {
            projects.map((item) => newArray.push(item));
        } else {
            projects.map((item) => {
                if (item.category === type) {
                    newArray.push(item);
                }
            });
        }

        setProjects(newArray);

        return newArray;
    }

    useEffect(() => {
        filterProjects(selected);
    }, [showProjects])

    return (
        <Section id="projects" className="projects">
            <Container>
                <Heading className="process">Os Nossos Projetos</Heading>

                <p>
                    Conheçam alguns dos nossos projetos que desenvolvemos<br/>
                    e transformamos a sua presença digital
                </p>

                <div className="tabs-587">
                    <ul>
                        <li
                            onClick={() => setSelected(Filtro.All)}
                            className={'max-w-[177px] ' + (selected === Filtro.All ? 'selected' : 'unselected')}
                        >
                            Todos os projetos
                        </li>

                        <li
                            onClick={() => setSelected(Filtro.WebSite)}
                            className={'min-w-[87px] ' + (selected === Filtro.WebSite ? 'selected' : 'unselected')}
                        >
                            Websites
                        </li>
                        <li
                            onClick={() => setSelected(Filtro.Branding)}
                            className={'min-w-[87px] ' + (selected === Filtro.Branding ? 'selected' : 'unselected')}
                        >
                            Branding
                        </li>
                        <li
                            onClick={() => setSelected(Filtro.Network)}
                            className={'min-w-[89px] ' + (selected === Filtro.Network ? 'selected' : 'unselected')}
                        >
                            Redes Sociais
                        </li>
                    </ul>
                </div>

                <Columns multiline={true} mt={6}>
                    {showProjects.map(project => (
                        <Columns.Column>
                            <Card>
                                <Card.Header>
                                    <img src={project.img} alt={project.title} />
                                </Card.Header>

                                <Card.Content>
                                    <h3>{project.title}</h3>

                                    <p>{project.description}</p>

                                    <ul>
                                        {project.tags.map(tag => (
                                           <li><Tag>{tag}</Tag></li>
                                        )) }
                                    </ul>

                                    <Button className="button-project">
                                        Ver Detalhes
                                    </Button>
                                </Card.Content>
                            </Card>
                        </Columns.Column>
                    )) }
                </Columns>

                <Box className="box-stylized">
                    <Container alignContent="center" alignItems="center">
                        <h3 className="title">Pronto para o próximo projeto?</h3>

                        <p>
                            Vamos criar algo incrível juntos. <br />
                            Marca uma reunião gratuita para discutirmos as vossas necessidades e objetivos.
                        </p>

                        <Button className="button-621">Marcar Reunião com a Equipa</Button>
                    </Container>
                </Box>
            </Container>
        </Section>
    );
}
