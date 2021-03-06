<?php


namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Users_goal;
use App\Users;
use Cookie;
use Illuminate\Http\Response;
class navigation extends Controller
{

  public function tracking()
  {

      $roleID =  $_COOKIE['roleID'];
      if($roleID == 1 )
      {
        return view('404');
      }
      else {
        return view('track');
      }
  }
  public function attendance()
  {

      $roleID =  $_COOKIE['roleID'];
      if($roleID == 1 )
      {
        return view('404');
      }
      else {
        return view('attendance');
      }
  }

  public function ranking()
  {

      $roleID =  $_COOKIE['roleID'];
      if($roleID == 1 )
      {
        return view('ranking_user');
      }
      else {
        return view('ranking');
      }
  }
  public function forum()
  {

      $roleID =  $_COOKIE['roleID'];
      if($roleID == 1 )
      {
        return view('forum_user');
      }
      else {
        return view('forum');
      }
  }

  public function fitcamp()
  {

      $roleID =  $_COOKIE['roleID'];
      if($roleID == 1 )
      {
        return view('fitcamp_user');
      }
      else {
        return view('fitcamp');
      }
  }
    public function product()
    {

        $roleID =  $_COOKIE['roleID'];
        if($roleID == 1 )
        {
          return view('product_user');
        }
        else {
          return view('product');
        }
    }


  public function redeem()
  {

      $roleID =  $_COOKIE['roleID'];
      if($roleID == 1 )
      {
        return view('redeem_user');
      }
      else {
        return view('redeem');
      }
  }


    public function achievement()
    {

        $roleID =  $_COOKIE['roleID'];
        if($roleID == 1 )
        {
          return view('achievement_user');
        }
        else {
          return view('achievement');
        }
    }

    public function challenge()
    {

        $roleID =  $_COOKIE['roleID'];
        if($roleID == 1 )
        {
          return view('challenge_user');
        }
        else {
          return view('challenge');
        }
    }
    public function profile()
    {

        $roleID =  $_COOKIE['roleID'];
        $profile =  $_COOKIE['profiled'];
        if($roleID == 1 )
        {
          if($profile==0){  // First time login
            return view('profile_setup');
          }
          return view('profile');
        }
        else {
          return view('profile');
        }
    }

    public function dashboard()
    {
        if(isset( $_COOKIE['roleID'])){
          $roleID =  $_COOKIE['roleID'];
          if($roleID == 1 )
          {
            return view('dashboard_user');
          }
          else {
            return view('track');
          }
        }
        else {
            return view('404');

        }
    }
    public function verifyChallenge()
    {
        if(isset( $_COOKIE['roleID'])){
          $roleID =  $_COOKIE['roleID'];
          if($roleID == 1 )
          {
            return view('404');
          }
          else {
            return view('verifyChallenge');
          }
        }
        else {
            return view('404');

        }
    }

}
