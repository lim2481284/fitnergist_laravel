<?php

use Illuminate\Database\Seeder;

class MarksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('marks')->truncate();
		
		$faker = Faker\Factory::create();

        $limit = 3;

        for ($i = 0; $i < $limit; $i++) {
            DB::table('marks')->insert([ //,
                'sv_m1' => $faker->randomFloat($nbMaxDecimals = 100, $min = 0, $max = 100),
				'sv_m2' => $faker->randomFloat($nbMaxDecimals = 100, $min = 0, $max = 100) ,
				'sv_m3' => $faker->randomFloat($nbMaxDecimals = 100, $min = 0, $max = 100) ,
				'ex_m1' => $faker->randomFloat($nbMaxDecimals = 100, $min = 0, $max = 100) ,
				'ex_m2' => $faker->randomFloat($nbMaxDecimals = 100, $min = 0, $max = 100),
				'ex_m3' => $faker->randomFloat($nbMaxDecimals = 100, $min = 0, $max = 100), 				
				'project_id' => $faker->randomFloat($nbMaxDecimals = 100, $min = 0, $max = 100) 	  
            ]);
        }
    }
}
