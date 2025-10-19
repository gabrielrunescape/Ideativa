import { Box, Button, Columns, Form } from 'react-bulma-components';
import { AsteriskError } from '@/components/landing/error_forms';
import { SetStateAction, useState } from 'react';
import { Servicos } from './ideativa_contact';
import { Slide, toast } from 'react-toastify';


/**
 * Verifica se endereço de e-mail é valido.
 *
 * @param email Endereço de e-mail a ser validado.
 */
const isValidEmail = (email: string): boolean => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    return !!email.match(mailformat);
}

/**
 * Verifica se foi passado um valor vazio ou não.
 *
 * @param {string} value Valor a ser verificado
 * @returns {boolean} Se está vazio ou não
 */
const isEmpty = (value: string): boolean => {
    return value === null || value === "";
}

export function BoxForm({servicos} : {servicos: Array<Servicos>}) {
    const [email, setEmail]        = useState("");
    const [empresa, setEmpresa]    = useState("");
    const [invalid, setInvalid]    = useState(Array< React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>>);
    const [mensagem, setMensagem]  = useState("");
    const [nome, setNome]          = useState("");
    const [servico, setServico]    = useState(0);
    const [telefone, setTelefone]  = useState("");
    const [sentEmail, isSentEmail] = useState(false);

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const errors: React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>[] = [];

        if (!isEmpty(email)) {
            if (!isValidEmail(email)) {
                errors.push(
                    <li key="email">
                        <AsteriskError message="E-mail inválido!"/>
                    </li>
                );
            }
        } else {
            errors.push(
                <li key="email">
                    <AsteriskError message="E-mail vázio!"/>
                </li>
            );
        }

        if (isEmpty(mensagem)) {
            errors.push(
                <li key="mensagem">
                    <AsteriskError message="Insira uma mensagem!"/>
                </li>
            );
        } else {
            if (mensagem.length > 500) {
                errors.push(
                    <li key="mensagem">
                        <AsteriskError message="A mensagem deve ter no máximo 500 letras!"/>
                    </li>
                );
            }
        }

        if (isEmpty(nome)) {
            errors.push(
                <li key="nome">
                    <AsteriskError message="Não há nenhum nome para contacto."/>
                </li>
            );
        }

        if (servico === null) {
            errors.push(
                <li key="servico">
                    <AsteriskError message="Esolha um serviço."/>
                </li>
            );
        }

        if (errors.length > 0) {
            setInvalid(errors);
        } else {
            isSentEmail(true)

            if (invalid !== null) {

                const json = {
                    nome: nome,
                    email: email,
                    telefone: telefone,
                    empresa: empresa,
                    servico: servicos.find(value => value.id == servico)?.content,
                    mensagem: mensagem
                }

                if (json.servico == null) {
                    json.servico = servicos.find(value => value.id === 7)?.content;
                }

                await getPostData(json);
            }
        }
    }

    const getPostData = async (bodyData: {
        nome: string;
        email: string;
        telefone: string;
        empresa: string;
        servico: string | undefined;
        mensagem: string;
    }) => {
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(bodyData),
            headers: new Headers({
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }),
        };

        const promise: Response = await fetch('/send-email', requestOptions);
        promise?.json()
            .then(() => {
                toast.success('E-mail enviado com sucesso!', {
                    position: 'top-center',
                    autoClose: 3500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                    transition: Slide,
                });

                setNome('');
                setEmail('');
                setEmpresa('');
                setTelefone('');
                setMensagem('');
            })
            .catch((err) => {
                toast.error('Houve um erro ao enviar o e-mail!', {
                    position: "top-center",
                    autoClose: 3500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Slide,
                });

                console.log(err);
            })
        .finally(() => isSentEmail(false));
    };

    return (
        <Box className="box-email">
            <form onSubmit={handleSubmit} method="post">
                <Columns>
                    <Columns.Column size="half">
                        <Form.Field>
                            <Form.Label>Nome completo *</Form.Label>
                            <Form.Control>
                                <Form.Input
                                    value={nome}
                                    onChange={(e: { target: { value: SetStateAction<string> } }) => setNome(e.target.value)}
                                    placeholder="O vosso nome"
                                    renderAs="input"
                                    size="medium"
                                />
                            </Form.Control>
                        </Form.Field>
                    </Columns.Column>

                    <Columns.Column size="half">
                        <Form.Field>
                            <Form.Label>Email *</Form.Label>
                            <Form.Control>
                                <Form.Input
                                    value={email}
                                    onChange={(e: { target: { value: SetStateAction<string> } }) => setEmail(e.target.value)}
                                    placeholder="vosso@email.com"
                                    type="email"
                                    renderAs="input"
                                    size="medium"
                                />
                            </Form.Control>
                        </Form.Field>
                    </Columns.Column>
                </Columns>
                <Columns>
                    <Columns.Column size="half">
                        <Form.Field>
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control>
                                <Form.Input
                                    value={telefone}
                                    onChange={(e: { target: { value: SetStateAction<string> } }) => setTelefone(e.target.value)}
                                    placeholder="+351 xxx xxx xxx"
                                    type="tel"
                                    renderAs="input"
                                    size="medium"
                                />
                            </Form.Control>
                        </Form.Field>
                    </Columns.Column>

                    <Columns.Column size="half" mobile={{ invisible: true }}>
                        <Form.Field>
                            <Form.Label>Empresa</Form.Label>
                            <Form.Control>
                                <Form.Input
                                    value={empresa}
                                    onChange={(e: { target: { value: SetStateAction<string> } }) => setEmpresa(e.target.value)}
                                    placeholder="Nome da vossa empresa"
                                    renderAs="input"
                                    size="medium"
                                />
                            </Form.Control>
                        </Form.Field>
                    </Columns.Column>
                </Columns>
                <Form.Field>
                    <Form.Label>Serviço de Interesse *</Form.Label>
                    <Form.Control>
                        <Form.Select
                            value={servico}
                            onChange={(e: { target: { value: SetStateAction<number> } }) => setServico(e.target.value)}
                            renderAs="select"
                            size="medium"
                            fullwidth={true}
                        >
                            {servicos.map((value, index) => (
                                <option key={index} value={value.id}>
                                    {value.content}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Control>
                </Form.Field>
                <Form.Field>
                    <Form.Label>Mensagem *</Form.Label>
                    <Form.Control>
                        <Form.Textarea
                            value={mensagem}
                            onChange={(e: { target: { value: SetStateAction<string> } }) => setMensagem(e.target.value)}
                            placeholder="Contem-nos mais sobre o vosso projeto e objetivos...."
                            type="text"
                            renderAs="textarea"
                        />
                    </Form.Control>
                </Form.Field>
                {mensagem.length ? mensagem.length : 0} / 500 caracteres


                {invalid ? (
                    <Form.Field>
                        <ul>
                            { invalid.map(item => (item)) }
                        </ul>
                    </Form.Field>
                ) : null}
                <Form.Field>
                    <Form.Control>
                        {sentEmail ? (
                            <progress
                                className="progress has-background-warning-80 is-warning"
                                style={{ height: '59px', borderRadius: '0.5rem' }}
                                max="100"
                            >
                                80%
                            </progress>
                        ) : (
                            <Button fullwidth={true} type="submit" size="large" renderAs="button" color="warning">
                                Enviar mensagem
                            </Button>
                        )}
                    </Form.Control>
                </Form.Field>
            </form>
        </Box>
    );
}
