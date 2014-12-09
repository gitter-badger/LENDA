<?php namespace Acme\Transformers;

class CommentTransformer extends Transformer{

	public function transform($arr)
	{
		//return $arr;
		return [
			'loan_id' => $arr['loan_id'],
			'type' => $arr['type'],
			'user_id' => $arr['user_id'],
			'user' => $arr['staff']['username'],
			'dtCom' => $arr['created_at']->format('m/d/Y'),
			'comment' => $arr['comment'],
			'responses' => $arr['responses']
		];
	}
}