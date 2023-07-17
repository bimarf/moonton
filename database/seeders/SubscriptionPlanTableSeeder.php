<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SubscriptionPlan;

class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $ubscriptionPlans = [
            [
                'name' => 'Basic',
                'price' => 299000,
                'active_period_in_months' => 3,
                'features' => json_encode([
                    '1 User',
                    'Unlimited Public Projects',
                    'Dedicated Phone Support',
                    'Free Subdomain',
                    'Monthly Status Reports',
                ]),
            ],
            [
                'name' => 'Premium',
                'price' => 799000,
                'active_period_in_months' => 6,
                'features' => json_encode([
                    '5 Users',
                    'Unlimited Public Projects',
                    'Dedicated Phone Support',
                    'Free Subdomain',
                    'Monthly Status Reports',
                    'Unlimited Private Projects'
                ])
                
            ],
        ];

        SubscriptionPlan::insert($ubscriptionPlans);
    }
}
