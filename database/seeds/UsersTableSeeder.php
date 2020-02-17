<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Admin',
            'email' => 'admin@kmj.com',
            'role' => 'admin',
            'password' => bcrypt('081219432066s'),
            'npwp' => null,
            'phone_number' => '081219432066'
        ]);
    }
}
