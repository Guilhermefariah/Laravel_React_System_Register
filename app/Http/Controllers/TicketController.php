<?php

namespace App\Http\Controllers;

use App\Models\TicketModel;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Response;
use Inertia\Inertia;

class TicketController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        $tickets = TicketModel::where('id_user', $user->id)->get();

        return Inertia::render('Tickets/TicketIndex', [
            'user' => $user,
            'tickets' => $tickets
        ]);
    }

    public function show(User $user): Response
    {
        $tickets = TicketModel::where('id_user', $user->id)->get();

        return Inertia::render('Tickets/TicketShow', [
            'user' => $user,
            'tickets' => $tickets,
        ]);
    }

    public function create(): Response
    {
        $users = User::all();

        return Inertia::render('Tickets/TicketCreate', [
            'users' => $users,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'email' => 'required|email|exists:users,email',
            'status' => 'required|string|max:255',
            'subject' => 'required|string|max:255',
            'description' => 'required|string|max:255',
        ]);

        $user = User::where('email', $request->email)->firstOrFail();

        $ticket = TicketModel::create([
            'id_user' => $user->id,
            'status' => $request->status,
            'subject' => $request->subject,
            'description' => $request->description,
        ]);

        return Redirect::route('tickets.index')->with('success', 'Ticket criado com sucesso');
    }

    public function edit(TicketModel $ticket): Response
    {
        return Inertia::render('Tickets/TicketEdit', [
            'user' => $ticket->user,
            'ticket' => $ticket,
        ]);
    }

    public function update(Request $request, TicketModel $ticket)
    {
        $request->validate(
            [
                'subject' => 'required|string|max:255|min:2',
                'description' => 'required|string|max:255|min:2',
                'status' => 'required|string|max:255|min:2',
            ]
        );

        $ticket->update($request->only('subject', 'description', 'status'));

        return Redirect::route('tickets.index')->with('success', 'Ticket atualizado com sucesso!');
    }

    public function destroy(TicketModel $ticket)
    {
        $ticket->delete();

        return Redirect::route('tickets.index')->with('success', 'Ticket excluído com sucesso!');
    }
}
