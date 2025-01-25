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
        $tickets = $this->objTicket->where('id_user', $user->id)->get();
    
        $openCount = $this->objTicket->where('id_user', $user->id)->where('status', 'Aberto')->count();
        $inProgressCount = $this->objTicket->where('id_user', $user->id)->where('status', 'Em andamento')->count();
        $resolvedCount = $this->objTicket->where('id_user', $user->id)->where('status', 'Resolvido')->count();
    
        return Inertia::render('Tickets/TicketIndex', [
            'user' => $user,
            'tickets' => $tickets,
            'openCount' => $openCount,
            'inProgressCount' => $inProgressCount,
            'resolvedCount' => $resolvedCount,
        ]);
    }

    public function show(TicketModel $ticket): Response
    {

        return Inertia::render('Tickets/TicketShow', ['ticket' => $ticket]);
    }

    public function create(): Response
    {
        return Inertia::render('Tickets/TicketCreate');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'assunto' => 'required|string|max:255',
            'descricao' => 'required|string',
            'status' => 'required|in:Aberto,Em andamento,Atrasado,Resolvido',
        ]);

        $this->objTicket->create($validated);

        return Redirect::route('tickets.index')->with('success', 'Ticket criado com sucesso!');
    }

    public function edit($id): Response
    {
        $ticket = $this->objTicket->findOrFail($id);
        return Inertia::render('Tickets/TicketEdit', ['ticket' => $ticket]);
    }

    public function update(Request $request, TicketModel $ticket, $id)
    {
        $validated = $request->validate([
            'assunto' => 'required|string|max:255',
            'descricao' => 'required|string',
            'status' => 'required|in:Aberto,Em andamento,Atrasado,Resolvido',
        ]);

        $ticket = $this->objTicket->findOrFail($id);

        $ticket->update($validated);

        return Redirect::route('tickets.index')->with('success', 'Ticket atualizado com sucesso!');
    }

    public function destroy(TicketModel $ticket, $id)
    {
        $ticket = $this->objTicket->findOrFail($id);
        $ticket->delete();

        return Redirect::route('tickets.index')->with('success', 'Ticket excluído com sucesso!');
    }
}
