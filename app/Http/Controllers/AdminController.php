<?php

namespace App\Http\Controllers;

use App\User;

class AdminController extends Controller
{
    public function getAllUser()
    {
        return User::where("role", "user")->orWhere("role", "cashier")->get();
    }

    public function getUser($id)
    {
        return User::where("id", $id)->first();
    }

    public function deleteUser($id)
    {
        $user = User::find($id);

        return $user->delete();
    }

    public function editUser($id)
    {

    }


}
