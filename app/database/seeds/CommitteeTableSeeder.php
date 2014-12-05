<?php

class CommitteeTableSeeder extends Seeder {

	public function run()
	{
		Committee::create([
			'loan_id'	=>	1,
			'role_id'	=>	1,
			'user_id'	=>	3,
			'vote_status_id' =>	1,
			'vote_request_date' => '2014-09-11'
		]);
		Committee::create([
			'loan_id'	=>	1,
			'role_id'	=>	2,
			'user_id'	=>	4,
			'vote_status_id' =>	2,
			'vote_id' => 2,
			'vote_request_date' => '2014-09-11',
			'vote_received_date' => '2014-09-13'
		]);
		Committee::create([
			'loan_id'	=>	1,
			'role_id'	=>	4,
			'user_id'	=>	5,
			'vote_status_id' =>	3,
			'vote_request_date' => '2014-09-11'

		]);
		Committee::create([
			'loan_id'	=>	1,
			'role_id'	=>	3,
			'user_id'	=>	2,
			'vote_status_id' => 2,
			'vote_id' => 1,
			'vote_request_date' => '2014-09-11',
			'vote_received_date' => '2014-09-12'
		]);
	}
}