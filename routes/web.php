<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TicketController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|---------------------------------------------------------------------------  
| Web Routes  
|---------------------------------------------------------------------------  
|  
| Here is where you can register web routes for your application. These  
| routes are loaded by the RouteServiceProvider within a group which  
| contains the "web" middleware group. Now create something great!  
|  
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('welcome');

Route::get('/ticket/create', [TicketController::class, 'create'])->name('tickets.create');

Route::middleware(['auth'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/ticket', [TicketController::class, 'index'])->name('tickets.index');
    Route::post('/ticket', [TicketController::class, 'store'])->name('tickets.store');
    Route::get('/ticket/show/{user}', [TicketController::class, 'show'])->name('tickets.show');
    Route::get('/ticket/{ticket}/edit', [TicketController::class, 'edit'])->name('tickets.edit');
    Route::put('/ticket/{ticket}', [TicketController::class, 'update'])->name('tickets.update');
    Route::delete('/ticket/{ticket}', [TicketController::class, 'destroy'])->name('tickets.destroy');
});

require __DIR__ . '/auth.php';

