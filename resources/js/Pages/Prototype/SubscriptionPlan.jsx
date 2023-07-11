import Authenticated from "@/Layouts/Authenticated/Index";
import Sidebar from "@/Layouts/Authenticated/Sidebar";
import SubscriptionCard from "@/Components/SubscriptionCard";
import { Head } from "@inertiajs/react";

export default function SubscriptionPlan() {
    return (
        <>
            <Head title="Subscription Plan" />
            <div className="mx-auto max-w-screen hidden lg:block">
                {/* Start Sidebar */}
                <Sidebar />
                {/* End Sidebar */}

                {/* Start Content */}
                <div className="ml-[300px] px-[50px]">
                    <div className="py-20 flex flex-col items-center">
                        <div className="text-black font-semibold text-[26px] mb-3">
                            Pricing for Everyone
                        </div>
                        <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                            Invest your little money to get a whole new
                            experiences from movies.
                        </p>

                        {/* <!-- Pricing Card --> */}
                        <div className="flex justify-center gap-10 mt-[70px]">
                            {/* <!-- Basic --> */}
                            <SubscriptionCard
                                name="Basic"
                                price={299000}
                                durationInMonth="3"
                                features={[
                                    "Unlock 10 basic movies",
                                    "Up to 3 Users",
                                    "Support 24/7",
                                ]}
                            />
                            {/* <!-- For Greatest --> */}
                            <SubscriptionCard
                                isPremium
                                name="For Greatest"
                                price={800000}
                                durationInMonth="3"
                                features={[
                                    "Unlock 200 awards movies",
                                    "180 subtitles available",
                                    "IOS, Android,Tv, Web",
                                    "Offline mode",
                                    "Up to 20 Users",
                                    "Support 24/7",
                                ]}
                            />
                        </div>
                        {/* <!-- /Pricing Card --> */}
                    </div>
                </div>
                {/* End Content */}
            </div>
        </>
    );
}
