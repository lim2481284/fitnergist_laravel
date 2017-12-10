<?php

use Illuminate\Database\Seeder;

class LecturersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('lecturers')->truncate();
    }
}
