<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    public function index(): Response 
    {
        $user = auth()->user(); 

        return Inertia::render('Users/UserIndex', ['users' => [$user]]);
    }

    public function show(User $user): Response
    {
        return Inertia::render('Users/UserShow', ['user' => $user]);
    }


    public function create(): Response
    {
        return Inertia::render('Users/UserCreate');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|confirmed|min:8',

        ], [
            'name.required' => 'Name is required',
            'name.max' => 'Name must be less than 255 characters',
            'email.required' => 'Email is required',
            'email.max' => 'Email must be less than 255 characters',
            'email.email' => 'Email is invalid',
            'email.unique' => 'Email already exists',
            'password.required' => 'Password is required',
            'password.confirmed' => 'Password does not match',
            'password.min' => 'Password must be at least 8 characters',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);
        
        return Redirect::route('users.show', ['user' => $user->id])->with('success', 'User created successfully');
    }

    public function edit(User $user): Response
    {
        return Inertia::render(('Users/UserEdit'), ['user' => $user]);
    }

    public function update(Request $request, User $user)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => "required|string|email|max:255|unique:users,email,{$user->id}",
        ], [
            'name.required' => 'Name is required',
            'name.max' => 'Name must be less than 255 characters',
            'email.required' => 'Email is required',
            'email.max' => 'Email must be less than 255 characters',
            'email.email' => 'Email is invalid',
            'email.unique' => 'Email already exists',
        ]);

        $user->update([
            'name' => $request->name,
            'email' => $request->email,
        ]);

        return Redirect::route('users.show', ['user' => $user->id])->with('success', 'User updated successfully');
    }

    public function destroy(User $user)
    {
        $user->delete();

        return Redirect::route('users.index')->with('success', 'User deleted successfully');
    }
}
