<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\NotificationMail;
use Symfony\Component\HttpFoundation\Response;

class MailController extends Controller {
    function getSendEmailForView(Request $req) {
        $to="geral@ideativaconsultora.pt";
        $subject='Notificação sobre: ' . $req->servico;

        $json = array(
            'para' => $to,
            'assunto' => $subject,
            'nome' => $req->input('nome'),
            'email' => $req->input('email'),
            'telefone' => $req->input('telefone'),
            'empresa' => $req->input('empresa'),
            'serviço' => $req->input('servico'),
            'mensagem' => $req->input('mensagem')
        );

        return view('mail', $json);
    }

    function sendEmail(Request $req) {
        $to="marketing@ideativaconsultora.pt";
        $subject='Notificação sobre: ' . $req->servico;

        $json = array(
            'para' => $to,
            'assunto' => $subject,
            'nome' => $req->input('nome'),
            'email' => $req->input('email'),
            'telefone' => $req->input('telefone'),
            'empresa' => $req->input('empresa'),
            'serviço' => $req->input('servico'),
            'mensagem' => $req->input('mensagem')
        );

        Mail::to($to)->send(New NotificationMail($json));

        $response = new Response(
            'Content',
            Response::HTTP_OK,
            ['content-type' => 'application/json']
        );

        $response->setContent(json_encode($json));

        // the headers public attribute is a ResponseHeaderBag
        $response->headers->set('Content-Type', 'application/json');

        //$response->setStatusCode(201);

        return $response;
    }
}
