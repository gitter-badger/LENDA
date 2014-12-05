<?php

use Acme\Transformers\UserTransformer;

class UsersController extends ApiController {

  protected $userTransformer;

  function __construct(UserTransformer $userTransformer)
  {
    $this->userTransformer = $userTransformer;

    $this->beforeFilter('auth.basic', ['on'=>'post']);
  }

  public function index()
  {
    $users = User::with('staff.role', 'staff.location', 'profile')->get();

    return $this->respond([
      'data' => $this->userTransformer->transformCollection($users->all())
    ]);
  }

  public function show($id)
  {
    $user = User::with('staff.role', 'staff.location', 'profile')->where('id', $id)->get();

    if( $user->isEmpty() ){
      return $this->respondNotFound('User does not exist.');
    } // end if

    return $this->respond([
      'data' => $this->userTransformer->transform($user[0])
    ]);
  }

  public function store()
  {
    if( ! Input::get('email')){
      return $this->respondCreationDenied('Failed Validation');
    } // end if

    User::create(Input::all());

    return $this->respondCreated('User created.');
  }

  public function update($id)
  {
    $user = User::find($id);

    if(!$user){
      User::create(Input::all());
      return $this->respondCreated('User created.');
    }

    $user->fill(Input::all())->save();

    return $this->respondCreated('User updated.');
  }

  public function destroy($id)
  {
    return User::where('id', $id)->delete();
  }
}