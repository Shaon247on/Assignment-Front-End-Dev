import React, { useContext } from 'react';

// ----------------- React icons -----------------

import useProvider from '../../Hooks/useProvider';
import { LuRefreshCcw } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { MdWatchLater } from "react-icons/md";

const Dashboard = () => {
    const { data } = useProvider()
    // console.log(data);
    return (
        <div className='px-1 md:px-6'>
            <div className='flex justify-between items-center'>
                <div className='text-xl font-semibold'>CNAPP Dashboard</div>
                <div className='flex gap-4 items-center'>
                    <button className="px-4 py-2 rounded-lg border-2 flex gap-4 items-center">Add Widget <FaPlus /></button>
                    <button className="px-4 py-3 rounded-lg border-2"><LuRefreshCcw /></button>
                    <button className="px-4 py-3 rounded-lg border-2"><BsThreeDotsVertical /></button>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="px-2 py-2 rounded-lg border-2 flex gap-2 items-center text-[#5cbbc8]"><MdWatchLater className='text-xl border-r-2 h-full text-[#5cbbc8]' />Last 2 days</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className=' my-5 px-2'>
                {
                    data.map(widgets =>
                        <>
                            <div>
                                <h1 className='text-lg font-semibold'>{widgets.Category}</h1>

                                <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                                    {
                                        widgets.Widgets.map(Widget =>
                                            <>
                                                <div className='border-2 border-emerald-200 rounded-lg'>
                                                    <h1>{Widget?.name}</h1>
                                                    <h1>{Widget?.content}</h1>
                                                </div>
                                            </>
                                        )
                                    }
                                    <div className='border-2 border-emerald-200 rounded-lg flex items-center justify-center'>
                                        <button className="btn">Add Widget</button>
                                    </div>
                                </div>


                            </div>
                        </>
                    )
                }

            </div>
        </div>
    );
};

export default Dashboard;