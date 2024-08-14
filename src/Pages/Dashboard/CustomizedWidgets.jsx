import React from 'react';
import { FaPlus } from 'react-icons/fa6';

const CustomizedWidgets = () => {
    return (
        <>
            <div className="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-4" className="px-4 py-2 rounded-lg border-2 flex gap-4 items-center">Add Widget <FaPlus /></label>
                    <button ></button>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className='menu bg-base-200 text-base-content min-h-full w-[450px] '>
                        <div className='bg-blue-800 text-white -mx-2 pl-5 h-12 -mt-2 flex items-center'>
                            <p className='text-lg font-medium'>Add Widgets</p>
                        </div>
                        <div>
                            <h1>personalis your dashboard by adding the following widget</h1>
                            <div>
                                <div role="tablist" className="tabs tabs-bordered">
                                    <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="CSPM" defaultChecked/>
                                    <div role="tabpanel" className="tab-content p-10">CSPM</div>

                                    <input
                                        type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="CWPP"  />
                                    <div role="tabpanel" className="tab-content p-10">CWPP</div>

                                    <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Image" />
                                    <div role="tabpanel" className="tab-content p-10">Image</div>
                                    <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Ticket" />
                                    <div role="tabpanel" className="tab-content p-10">Ticket</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CustomizedWidgets;