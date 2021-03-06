<?php

use Acme\Transformers\LoanfinancialsTransformer;

class LoanfinancialsController extends ApiController {

	protected $loanfinancialsTransformer;

	function __construct(LoanfinancialsTransformer $loanfinancialsTransformer)
	{
		$this->loanfinancialsTransformer = $loanfinancialsTransformer;
	}

	public function index()
	{
		$loanfinancials = Loanfinancials::all();
		return $this->respond([
			'data' => $this->loanfinancialsTransformer->transformCollection($loanfinancials->all())
		]);
	}

	public function store()
	{
		/*
		 * if( ! Input::get('loanfinancial')){
			return $this->respondCreationDenied('Failed Validation');
		} // end if
		*/

		Loanfinancial::create(Input::all());

		return $this->respondCreated('Loanfinancial created');
	}

	public function show($id)
	{
		$loanfinancial = Loanfinancials::where('id', $id)->get();

        if( $loanfinancial->isEmpty() ){
            return $this->respond([
                'data' => []
            ]);
        } // end if

		return $this->respond([
			'data' => $this->loanfinancialsTransformer->transform($loanfinancial[0])
		]);
	}

	public function update($id)
	{
		$loanfinancial = Loanfinancials::find($id);

		if(!$loanfinancial){
			Loanfinancials::create(Input::all());
			return $this->respondCreated('Loanfinancial Created');
		} // end if

		$loanfinancial->fill(Input::all())->save();

		return $this->respondCreated('Loanfinancial updated.');
	}

	public function destroy($id)
	{
		return Loanfinancials::where('id', $id)->delete();
	}

	public function byLoan($id)
	{
		$loanfinancials = Loanfinancials::where('loan_id', $id)->get();
		return $this->respond([
			'data' => $this->loanfinancialsTransformer->transformCollection($loanfinancials->all())
		]);
	}

}