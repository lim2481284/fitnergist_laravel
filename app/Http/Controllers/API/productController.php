<?php

namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Product;

class productController extends Controller
{
	/*
		
		Controller for the product section 
	
	*/
    public function getProduct()
    {		
        $product = Product::all();
		return response()->json(['success'=>true,'message'=>'','body'=>$product]);
    }
 
    public function searchProduct($id)
    {
		$product = Product::find($id);		
        return response()->json(['success'=>true,'message'=>'','body'=>$product]);

    }

    public function createProduct(Request $request)
    {

        $product= Product::create($request->all());
        return response()->json(['success'=>true,'message'=>'Product created','body'=>$product]);

    }

    public function editProduct(Request $request, $id)
    {
		$product = Product::find($id);
        $product->update($request->all());
       return response()->json(['success'=>true,'message'=>'Product edited','body'=>$product]);
    }

    public function deleteProduct($id)
    {
		$product = Product::find($id);
        $product->delete();
        return response()->json(['success'=>true,'message'=>$product->title.' deleted']);
    }
	
}
