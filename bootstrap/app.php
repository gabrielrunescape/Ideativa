<?php

use App\Http\Middleware\HandleAppearance;
use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->encryptCookies(except: ['appearance', 'sidebar_state']);

        $middleware->web(append: [
            HandleAppearance::class,
            HandleInertiaRequests::class,
            AddLinkHeadersForPreloadedAssets::class,
        ]);

        /*
         * USO APENAS PARA DESENVOLVIMENTO LOCAL.
         *
         * $middleware->validateCsrfTokens(except: [
         *   'http://ideativa.test/send-email',
         *   'https://ideativa.test/send-email',
         *   'http://ideativa.test:8000/send-email',
         *   'https://ideativa.test:8000/send-email'
         * ]);*/
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
