<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

/** @var \Illuminate\Database\Eloquent\Factory $factory */

$factory->define(App\Marks::class, function (Faker\Generator $faker) {
    return [
        'sv_m1' => $faker->sentence(5),
        'description' => $faker->text(),
    ];
});

$factory->define(App\Students::class, function (Faker\Generator $faker) {
    return [
        'subject' => $faker->sentence(5),
        'description' => $faker->text(),
    ];
});

$factory->define(App\Project::class, function (Faker\Generator $faker) {
    return [
        'subject' => $faker->sentence(5),
        'description' => $faker->text(),
    ];
});

$factory->define(App\Lecturers::class, function (Faker\Generator $faker) {
    return [
        'subject' => $faker->sentence(5),
        'description' => $faker->text(),
    ];
});
