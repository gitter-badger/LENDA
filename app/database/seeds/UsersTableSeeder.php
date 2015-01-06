<?php

class UsersTableSeeder extends Seeder{

  public function run()
  {
    User::create([
      'username' => 'LENDA',
      'nick' => 'LENDA',
      'email' => 'lenda@armlend.com',
      'password' => 'gluestick',
      'loc_id' => '4',
      'region_id' => '2',
      'manager_id'  => 1,
      'is_admin'    => 0,
      'is_approver' => 0,
      'is_manager'  => 0,
      'role_id' => 8
    ]);

    User::create([
      'username' => 'Jonathan Gravois',
      'nick' => 'JWG',
      'email' => 'jongravois@gmail.com',
      'password' => 'password',
      'phone'	=> '9012870209',
      'loc_id' => '5',
      'region_id' => '1',
      'manager_id' => 2,
      'is_admin' => 1,
      'is_approver' => 1,
      'is_manager' => 1,
      'role_id' => 7
    ]);

    User::create([
      'username' => 'Brad Terral',
      'nick' => 'TBT',
      'email' => 'bterral@armlend.com',
      'password' => 'changeme',
      'phone' => '3182824037',
      'loc_id' => '4',
      'region_id' => '2',
      'manager_id' => 3,
      'is_admin' => 1,
      'is_approver' => 1,
      'is_manager' => 1,
      'role_id' => 1
    ]);

    User::create([
      'username' => 'Mark Branch',
      'nick' => 'MIB',
      'email' => 'mbranch@armlend.com',
      'password' => 'changeme',
      'phone' => '3187285770',
      'region_id' => '2',
      'loc_id' => '4',
      'manager_id' => 3,
      'is_admin' => 0,
      'is_approver' => 1,
      'is_manager' => 1,
      'role_id' => 2
    ]);

    User::create([
      'username' => 'Robby Miller',
      'nick' => 'RAM',
      'email' => 'rmiller@armlend.com',
      'password' => 'changeme',
      'phone' => '3187285770',
      'loc_id' => '4',
      'region_id' => '2',
      'manager_id' => 4,
      'is_admin' => 0,
      'is_approver' => 1,
      'is_manager' => 1,
      'role_id' => 5
    ]);

    User::create([
      'username' => 'Mason Williams',
      'nick' => 'MAW',
      'email' => 'mwilliams@armlend.com',
      'password' => 'changeme',
      'phone' => '3187285770',
      'loc_id' => '4',
      'region_id' => '2',
      'manager_id' => 5,
      'is_admin' => 0,
      'is_approver' => 0,
      'is_manager' => 0,
      'role_id' => 5
    ]);

    User::create([
      'username' => 'Katie Williams',
      'nick' => 'KWW',
      'email' => 'kwilliams@armlend.com',
      'password' => 'changeme',
      'phone' => '3187285770',
      'loc_id' => '4',
      'region_id' => '2',
      'manager_id' => 4,
      'is_admin' => 0,
      'is_approver' => 0,
      'is_manager' => 0,
      'role_id' => 6
    ]);

    User::create([
      'username' => 'Kenn Thompson',
      'nick' => 'KET',
      'email' => 'kennthompson@gmail.com',
      'password' => 'chessmaster',
      'phone' => '9991235648',
      'loc_id' => '5',
      'region_id' => '1',
      'manager_id' => 2,
      'is_admin' => 1,
      'is_approver' => 1,
      'is_manager' => 1,
      'role_id' => 7
    ]);
  }
}