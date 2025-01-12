<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        if (!User::where('email', 'alex@example.com')->first()) {
            User::create([
                'name' => 'Alex',
                'email' => 'alex@example.com',
                'password' => Hash::make('123456', ['rounds' => 12]),
            ]);
        }
        if (!User::where('email', 'joao@example.com')->first()) {
            User::create([
                'name' => 'Joao',
                'email' => 'joao@example.com',
                'password' => Hash::make('123456', ['rounds' => 12]),
            ]);
        }

        if (!User::where('email', 'maria@example.com')->first()) {
            User::create([
                'name' => 'Maria',
                'email' => 'maria@example.com',
                'password' => Hash::make('123456', ['rounds' => 12]),
            ]);
        }

        if (!User::where('email', 'pedro@example.com')->first()) {
            User::create([
                'name' => 'Pedro',
                'email' => 'pedro@example.com',
                'password' => Hash::make('123456', ['rounds' => 12]),
            ]);
        }   
    }
}
