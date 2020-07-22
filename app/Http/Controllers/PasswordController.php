<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PasswordController extends Controller
{
    public function GeneratePassword(Request $request)
    {
        $data = $request->all();

        Validator::make($data, [
            'longPassword' => 'required|numeric|min:1|max:25',
            'typePassword' => 'required|string|max:10',
        ])->validate();

        $securityLevel = 0;

        if ($data['typePassword'] === "num") {
            $chars = '1234567890';
            $securityLevel += 5 + $data['longPassword'];
        } elseif ($data['typePassword'] === "word") {
            $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            $securityLevel += 20 + $data['longPassword'];
        } elseif ($data['typePassword'] === "numWord") {
            $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
            $securityLevel += 50 + $data['longPassword'];
        } elseif ($data['typePassword'] === "allChars") {
            $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890&/()=?|@#~{[]}{}<>;,:.-_';
            $securityLevel += 76 + $data['longPassword'];
        } else {
            return response()->json(['message' => 'Not Found!'], 404);
        }

        $pass = array(); //remember to declare $pass as an array
        $alphaLength = strlen($chars) - 1; //put the length -1 in cache
        for ($i = 0; $i < $data['longPassword']; $i++) {
            $n = rand(0, $alphaLength);
            $pass[] = $chars[$n];
        }


        /*return implode($pass); //turn the array into a string*/
        return response()->json(['password' => implode($pass), 'securitylevel' => $securityLevel]);
    }
}
