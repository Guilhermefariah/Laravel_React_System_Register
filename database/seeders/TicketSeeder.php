<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class TicketSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('ticket')->insert([
            [
                'subject' => 'Problema de acesso ao sistema',
                'description' => 'Usuário reportou dificuldades para acessar o sistema devido a erro de autenticação.',
                'status' => 'Aberto',
                'id_user' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
