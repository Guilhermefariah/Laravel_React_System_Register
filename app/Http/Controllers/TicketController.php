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
    private $objUser;
    private $objTicket;

    public function __construct()
    {
        $this->objUser = new User();
        $this->objTicket = new TicketModel();
    }

    public function index()
    {
        $user = auth()->user();

        $tickets = $this->objTicket->where('id_user', $user->id)
            ->orderBy('created_at', 'desc')
            ->with('user')
            ->get();

        return Inertia::render('Tickets/TicketIndex', [
            'user' => $user,
            'tickets' => $tickets,
        ]);
    }

    public function show(TicketModel $ticket): Response
    {
        $user = auth()->user();

        $ticket = $this->objTicket->where('id_user', $user->id)
            ->where('id', $ticket->id)
            ->with('user')
            ->first();
            
        return Inertia::render('Tickets/TicketShow', ['ticket' => $ticket]);
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
            'status' => 'required|string|max:255',
            'subject' => 'required|string|max:255',
            'description' => 'required|string|max:255',
        ]);

        $ticket = TicketModel::create([
            'id_user' => auth()->id(),
            'status' => $request->status,
            'subject' => $request->subject,
            'description' => $request->description,
        ]);

        return Redirect::route('tickets.create', ['ticket' => $ticket->id])->with('success', 'Ticket criado com sucesso');
    }

    public function edit(TicketModel $ticket): Response
    {
        $ticket = $this->objTicket->findOrFail($ticket->id);
        return Inertia::render('Tickets/TicketEdit', ['ticket' => $ticket]);
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
