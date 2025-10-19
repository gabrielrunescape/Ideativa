<?php

use App\Http\Controllers\MailController;
use App\Http\Controllers\PostCreateController;
use App\Http\Controllers\PostIndexController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('landing');
})->name('home');

Route::post('send-email', [MailController::class, 'sendEmail']);
Route::get('send-email', [MailController::class, 'getSendEmailForView']); // Teste GET

Route::get('contact', function () {
    return Inertia::render('contact');
})->name('contact');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('posts', PostIndexController::class)->name('post.index');
    Route::get('posts/create', PostCreateController::class)->name("post.create");
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
