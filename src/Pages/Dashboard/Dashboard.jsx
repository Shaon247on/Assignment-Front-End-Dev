import React from 'react';
import useProvider from '../../Hooks/useProvider';
import { LuRefreshCcw } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import AddWidgets from './AddWidgets';
import CustomizedWidgets from './CustomizedWidgets';

const Dashboard = () => {
    const { data, setData } = useProvider();

    const handleRemoveWidget = (id) => {
        const updatedWidgets = data.map(category => {
            return {
                ...category,
                Widgets: category.Widgets.filter(widget => widget.id !== id),
            };
        });
        setData(updatedWidgets);
    };

    return (
        <div className='px-1 md:px-6'>
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <div className='text-xl font-semibold'>CNAPP Dashboard</div>
                <div className='flex gap-4 items-center'>
                    <CustomizedWidgets />
                    <button className="px-4 py-3 rounded-lg border-2"><LuRefreshCcw /></button>
                    <button className="px-4 py-3 rounded-lg border-2"><BsThreeDotsVertical /></button>
                    <div className="dropdown dropdown-end">
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='my-5 px-2'>
                {data.map((category, index) => (
                    <div key={index}>
                        <h1 className='text-lg font-semibold'>{category.Category}</h1>
                        <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                            {category.Widgets.filter(widget => widget.approval === true).map(widget => (
                                <div key={widget.id} className='h-[150px] border-2 border-emerald-200 rounded-lg relative py-7 px-4'>
                                    <h1>{widget.name}</h1>
                                    <h1>{widget.content}</h1>
                                    <button onClick={() => handleRemoveWidget(widget.id)} className='btn absolute top-1 right-1'>
                                        <ImCross />
                                    </button>
                                </div>
                            ))}
                            <div className='h-[150px] border-2 border-emerald-200 rounded-lg flex items-center justify-center'>
                                <AddWidgets category={category.Category} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
