import {Box, Button, Columns, Form} from "react-bulma-components";
import {AsteriskError} from "@/components/landing/error_forms";
import {SetStateAction, useState} from "react";
import { Servicos } from "./ideativa_contact";


const isValidEmail = (email: string): boolean => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.match(mailformat)) {
        return true;
    } else {
        return false;
    }
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


export function BoxForm(servicos: Array<Servicos>) {
    const [email, setEmail] = useState("");
    const [empresa, setEmpresa] = useState("");
    const [invalid, setInvalid] = useState();
    const [mensagem, setMensagem] = useState("");
    const [nome, setNome] = useState("");
    const [servico, setServico] = useState(0);
    const [telefone, setTelefone] = useState("");
    const [sentEmail, isSentEmail] = useState(false);

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const errors = [];

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
            if (invalid !== null) {
                const json = {
                    nome: nome,
                    email: email,
                    telefone: telefone,
                    empresa: empresa,
                    servico: servicos.find(value => value.id == servico)?.content,
                    mensagem: mensagem,
                }

                isSentEmail(true);

                console.log(json);
            }
        }
    }

    return (
        <Box className="box-email">
            <form onSubmit={handleSubmit}>
                <Columns>
                    <Columns.Column size="half">
                        <Form.Field>
                            <Form.Label>Nome completo *</Form.Label>
                            <Form.Control>
                                <Form.Input
                                    value={nome}
                                    onChange={(e: {
                                        target: { value: SetStateAction<string>; };
                                    }) => setNome(e.target.value)}
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
                                    onChange={(e: {
                                        target: { value: SetStateAction<string>; };
                                    }) => setEmail(e.target.value)}
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
                                    onChange={(e: {
                                        target: { value: SetStateAction<string>; };
                                    }) => setTelefone(e.target.value)}
                                    placeholder="+351 xxx xxx xxx"
                                    type="tel"
                                    renderAs="input"
                                    size="medium"
                                />
                            </Form.Control>
                        </Form.Field>
                    </Columns.Column>

                    <Columns.Column size="half" mobile={{invisible: true}}>
                        <Form.Field>
                            <Form.Label>Empresa</Form.Label>
                            <Form.Control>
                                <Form.Input
                                    value={empresa}
                                    onChange={(e: {
                                        target: { value: SetStateAction<string>; };
                                    }) => setEmpresa(e.target.value)}
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
                            onChange={(e: {
                                target: { value: SetStateAction<number>; };
                            }) => setServico(e.target.value)}
                            renderAs="select" size="medium" fullwidth={true}
                        >
                            { servicos.map((value) => (
                                <option value={value.id}>{value.content}</option>
                            )) }
                        </Form.Select>
                    </Form.Control>
                </Form.Field>

                <Form.Field>
                    <Form.Label>Mensagem *</Form.Label>
                    <Form.Control>
                        <Form.Textarea
                            value={mensagem}
                            onChange={(e: {
                                target: { value: SetStateAction<string>; };
                            }) => setMensagem(e.target.value)}
                            placeholder="Contem-nos mais sobre o vosso projeto e objetivos...."
                            type="text"
                            renderAs="textarea"
                        />
                    </Form.Control>
                </Form.Field>

                {mensagem.length ? mensagem.length : 0} / 500 caracteres

                {invalid ?
                    <Form.Field>
                        <ul>{invalid}</ul>
                    </Form.Field>
                    : null}

                <Form.Field>
                    <Form.Control>
                        <Button
                            fullwidth={true}
                            type="submit"
                            size="large"
                            renderAs="button"
                            color="warning">Enviar mensagem</Button>
                    </Form.Control>
                </Form.Field>
            </form>
        </Box>
    );
}
