<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::apiResource('blog_post', \App\Http\Controllers\PostController::class);
