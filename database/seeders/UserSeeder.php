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
        if (!User::where('email', 'thiago@gmail.com')->first()) {
            User::create([
                'name' => 'Thiago',
                'phone' => '123456789',
                'email' => 'thiago@gmail.com',
                'password' => Hash::make('12345678', ['rounds' => 10]),
            ]);
        }
        
        if (!User::where('email', 'maria@gmail.com')->first()) {
            User::create([
                'name' => 'Maria',
                'phone' => '123456789',
                'email' => 'maria@gmail.com',
                'password' => Hash::make('12345678', ['rounds' => 10]),
            ]);
        }

        if (!User::where('email', 'lucas@gmail.com')->first()) {
            User::create([
                'name' => 'Lucas',
                'phone' => '123456789',
                'email' => 'lucas@gmail.com',
                'password' => Hash::make('12345678', ['rounds' => 10]),
            ]);
        }

        if (!User::where('email', 'silas@gmail.com')->first()) {
            User::create([
                'name' => 'Silas',
                'phone' => '123456789',
                'email' => 'silas@gmail.com',
                'password' => Hash::make('12345678', ['rounds' => 10]),
            ]);
        }
    }
}
