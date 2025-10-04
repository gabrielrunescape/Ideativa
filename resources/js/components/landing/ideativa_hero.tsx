import { Button, Card, Container, Heading, Hero } from 'react-bulma-components';

export function iHero() {
    return (
        <Hero backgroundColor="link" colorVariant="dark">
            <Hero.Body>
                <Container>
                    <div className="lg:grid lg:grid-cols-2">
                        <div className="lg:col-start-auto">
                            <Button textTransform="uppercase" className="rounded-button-warning">
                                <div style={
                                    {
                                        width: "8px",
                                        height: "8px",
                                        borderRadius: "4px",
                                        marginRight: "12px",
                                        backgroundColor: "white",
                                    }
                                } ></div>
                                Agência digital premium
                            </Button>

                            <Heading textTransform="uppercase">
                                <div className="span-hero-41">Criamos</div>
                                <div className="span-hero-44">Marcas</div>
                                <div className="span-hero-48">Digitais</div>
                            </Heading>

                            <div className="div-51">
                                <div className="div-51-inside">
                                    <p>
                                        Especializados em <span className="span-div-51">BRANDING</span>,&nbsp;
                                        <span className="span-div-51">Redes Sociais</span> e&nbsp;
                                        <span className="span-div-51">Web Design</span>
                                    </p>
                                </div>
                            </div>

                            <div className="xs:flex xs:flex-row xs:gap-6 sm:grid sm:grid-cols-3 my-4 max-w-[500px]">
                                <div className="button-div-69">
                                    <div>
                                        <div className="button-div-top">40+</div>
                                        <div className="button-div-bottom">Projetos</div>
                                    </div>
                                </div>

                                <div className="button-div-76">
                                    <div>
                                        <div className="button-div-top">100%</div>
                                        <div className="button-div-bottom">Satisfação</div>
                                    </div>
                                </div>

                                <div className="button-div-83">
                                    <div>
                                        <div className="button-div-top">24H</div>
                                        <div className="button-div-bottom">Resposta</div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 my-4">
                                <Button color="warning" className="button-91">
                                    <span className="span-button-fira-code">Diagnóstico grátis</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                        <path fill="#fff" d="M16.175 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.712t.3-.713z"></path>
                                    </svg>
                                </Button>

                                <Button color="link" className="button-97">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                        <path fill="#FFFFFF" d="m10.65 15.75l4.875-3.125q.35-.225.35-.625t-.35-.625L10.65 8.25q-.375-.25-.763-.038t-.387.663v6.25q0 .45.388.663t.762-.038M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></path>
                                    </svg>

                                    <span className="span-button-fira-code">Ver trabalhos</span>
                                </Button>
                            </div>
                        </div>

                        <div className="lg:col-end-auto mt-[50px] lg:mt-0">
                            <div className="button-div-1307 flex flex-row gap-4 items-center justify-center">
                                <div>
                                    <div className="pallete">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                            <path fill="#FFFFFF" d="M12 22q-2.05 0-3.875-.788t-3.187-2.15t-2.15-3.187T2 12q0-2.075.813-3.9t2.2-3.175T8.25 2.788T12.2 2q2 0 3.775.688t3.113 1.9t2.125 2.875T22 11.05q0 2.875-1.75 4.413T16 17h-1.85q-.225 0-.312.125t-.088.275q0 .3.375.863t.375 1.287q0 1.25-.687 1.85T12 22m-5.5-9q.65 0 1.075-.425T8 11.5t-.425-1.075T6.5 10t-1.075.425T5 11.5t.425 1.075T6.5 13m3-4q.65 0 1.075-.425T11 7.5t-.425-1.075T9.5 6t-1.075.425T8 7.5t.425 1.075T9.5 9m5 0q.65 0 1.075-.425T16 7.5t-.425-1.075T14.5 6t-1.075.425T13 7.5t.425 1.075T14.5 9m3 4q.65 0 1.075-.425T19 11.5t-.425-1.075T17.5 10t-1.075.425T16 11.5t.425 1.075T17.5 13"></path>
                                        </svg>
                                    </div>
                                </div>

                                <div>
                                    <p className="span-title">Design</p>
                                    <p className="span-body">Criativo</p>
                                </div>
                            </div>

                            <Card className="card-bordered">
                                <Card.Content mx={5}>
                                    <div className="bell-rocket mt-5">
                                        <svg width="21" height="28" viewBox="0 0 21 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="#FFFFFF" d="M6.14448 24.3294L14.7868 22.9606C14.529 23.997 14.085 24.949 13.4546 25.8166C12.8243 26.6843 12.0561 27.4007 11.15 27.9661C10.1136 27.7084 9.16159 27.2644 8.29396 26.634C7.42634 26.0036 6.70984 25.2354 6.14448 24.3294ZM16.8565 16.0517L19.7715 18.4756L20.147 20.846L0.393189 23.9747L0.0177461 21.6043L2.04113 18.3983L0.906979 11.2375C0.685364 9.83829 0.793872 8.44584 1.23251 7.06017C1.6625 5.72648 2.36418 4.51007 3.33756 3.41094C4.31093 2.3118 5.4785 1.42659 6.84025 0.755299C8.34279 0.972929 9.72676 1.45402 10.9921 2.19857C12.2575 2.94312 13.3008 3.88316 14.1218 5.0187C14.9672 6.20101 15.5007 7.49178 15.7223 8.891L16.8565 16.0517ZM8.70573 12.5335C9.15019 12.4631 9.54413 12.2868 9.88754 12.0046C10.231 11.7224 10.4838 11.3744 10.6461 10.9606C10.8083 10.5468 10.8543 10.1176 10.7839 9.67318C10.7135 9.22872 10.5372 8.83478 10.255 8.49136C9.97278 8.14795 9.62477 7.89511 9.21096 7.73284C8.79715 7.57058 8.36802 7.52465 7.92356 7.59504C7.4791 7.66544 7.08516 7.84173 6.74174 8.12393C6.39833 8.40613 6.14549 8.75413 5.98322 9.16794C5.82096 9.58175 5.77503 10.0109 5.84542 10.4553C5.91582 10.8998 6.09211 11.2937 6.37431 11.6372C6.65651 11.9806 7.00451 12.2334 7.41832 12.3957C7.83213 12.5579 8.26127 12.6039 8.70573 12.5335Z" />
                                        </svg>
                                    </div>

                                    <div className="card-bordered-title">
                                        <p className="span-title-blue">Crescimento</p>
                                        <p className="span-title-orange">Garantido</p>
                                    </div>

                                    <p>Estratégias digitais que transformam visitantes em clientes fiéis.</p>

                                    <div className="row-graph">
                                        <div className="div-graph">
                                            <div className="div-graph-1299"></div>
                                            <div className="div-graph-1300"></div>
                                            <div className="div-graph-1301"></div>
                                            <div className="div-graph-1302"></div>
                                        </div>

                                        <p>Resultados reais</p>
                                    </div>
                                </Card.Content>
                            </Card>


                            <div className="button-div-1319 flex flex-row gap-4 items-center justify-center">
                                <div>
                                    <div className="graph">
                                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="#FFFFFF" d="M1.71197 0.994047L4.48412 14.036L17.5228 11.2646L17.8694 12.8948L3.20081 16.0127L0.0821302 1.34048L1.71197 0.994047ZM14.3962 0.802656L16.5075 2.16003L12.6027 8.15284L9.63819 6.22712L7.12635 10.1177L5.01511 8.76033L8.90357 2.77099L11.8681 4.69671L14.3962 0.802656Z"/>
                                        </svg>
                                    </div>
                                </div>

                                <div>
                                    <p className="span-title">+300%</p>
                                    <p className="span-body">Vendas</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Hero.Body>
        </Hero>
    );
}
