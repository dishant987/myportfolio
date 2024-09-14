import { Timeline } from '@/components/ui/timeline'
import { IconLocation, IconLocationCheck, IconMap, IconMapPin } from '@tabler/icons-react';
import { Locate, LocateIcon } from 'lucide-react';
import React from 'react'

export default function Study() {
    const data = [
        {
            title: "2018 - 2020",
            content: (
                <div>
                    <h1 className='mt-2 text-white text-xl text-left font-bold md:text-2xl  mb-8'>Jay Ambe High School </h1>
                    <h1 className='mt-2 text-white text-xl text-left font-bold md:text-2xl  mb-8'><IconMapPin className='inline h-6 w-6' /> Vapi,Gujarat</h1>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://cdn.pixabay.com/photo/2017/02/24/02/37/classroom-2093744_640.jpg"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg hover:rounded-2xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>

                </div>
            ),
        },
        {
            title: "2020 - 2024",
            content: (
                <div>
                    <h1 className='mt-2 text-white text-xl text-left font-bold md:text-2xl  mb-8'>Bachelors Degree (Computer Science and Engineering)</h1>
                    <h1 className='mt-2 text-white text-xl text-left font-bold md:text-2xl  mb-8'>CGPA : 8.59</h1>
                    <h1 className='mt-2 text-white text-xl text-left font-bold md:text-2xl  mb-8'><IconMapPin className='inline h-6 w-6' /> Vadodara, Gujarat</h1>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="/assets/clg.png"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg hover:rounded-2xl duration-200 object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>

                </div>

            ),
        },

    ];
    return (
        <div className="w-full" id='education'>
            <Timeline data={data} />
        </div>
    );
}
