import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import useProvider from '../../Hooks/useProvider';

const CustomizedWidgets = () => {
    const { data, setData } = useProvider();
    const [activeTab, setActiveTab] = useState('CSPM');
    const [checkboxStates, setCheckboxStates] = useState({});

    const handleTabChange = (category) => {
        setActiveTab(category);
    };

    const handleCheckboxChange = (id, checked) => {
        setCheckboxStates(prevState => ({
            ...prevState,
            [id]: checked,
        }));
    };

    const handleContinue = () => {
        const updatedData = data.map(category => ({
            ...category,
            Widgets: category.Widgets.map(widget => ({
                ...widget,
                approval: checkboxStates[widget.id] !== undefined ? checkboxStates[widget.id] : widget.approval,
            })),
        }));
        setData(updatedData);
    };

    return (
        <>
            <div className="drawer drawer-end z-10">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer-4" className="px-4 py-2 rounded-lg border-2 flex gap-4 items-center">
                        Add Widget <FaPlus />
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className='menu bg-base-200 text-base-content min-h-full w-[310px] md:w-[350px] lg:w-[450px]'>
                        <div className='bg-blue-800 text-white -mx-2 pl-5 h-12 -mt-2 flex items-center'>
                            <p className='text-lg font-medium'>Add Widgets</p>
                        </div>
                        <div>
                            <h1 className='font-semibold'>Personalize your dashboard by adding the following widgets</h1>
                            <div role="tablist" className="tabs tabs-bordered">
                                {data.map((category, index) => (
                                    <React.Fragment key={index}>
                                        <input
                                            type="radio"
                                            name="my_tabs_1"
                                            role="tab"
                                            className="tab"
                                            aria-label={category.Category}
                                            checked={activeTab === category.Category}
                                            onChange={() => handleTabChange(category.Category)}
                                        />
                                    </React.Fragment>
                                ))}
                            </div>
                            <div className='mt-4'>
                                {data.filter(category => category.Category === activeTab)
                                    .flatMap(category => category.Widgets)
                                    .map(widget => (
                                        <div key={widget.id} className='flex flex-row gap-2 mt-1'>
                                            <input
                                                type="checkbox"
                                                name={widget.name}
                                                checked={checkboxStates[widget.id] !== undefined ? checkboxStates[widget.id] : widget.approval}
                                                onChange={(e) => handleCheckboxChange(widget.id, e.target.checked)}
                                            />
                                            <label>{widget.name}</label>
                                        </div>
                                    ))}
                            </div>
                            <button onClick={handleContinue} className="btn mt-4">Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CustomizedWidgets;
