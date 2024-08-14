import React from 'react';
import useProvider from '../../Hooks/useProvider';
import InputFiend from '../../Components/inputFiend';

const AddWidgets = ({ category }) => {
    
    const { data, setData } = useProvider();

    const handleAddWidget = (e) => {
        e.preventDefault();
        console.log(category);
        const form = e.target;
        const name = form.name.value;
        const content = form.content.value;

        const allWidgets = data.reduce((acc, currentCategory) => {
            return acc.concat(currentCategory.Widgets);
        }, []);

        const newWidget = {
            id: allWidgets.length + 1,
            name: name,
            type: category,
            content: content,
            approval: true
        };

        const updatedData = data.map((type) => {
            if (type.Category === category) {
                return { ...type, Widgets: [...type.Widgets, newWidget] };
            }
            return type;
        });

        setData(updatedData);
    };

    return (
        <div>
            <button className="btn" onClick={() => document.getElementById(`modal_${category}`).showModal()}>Add Widget +</button>

            <dialog id={`modal_${category}`} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-xl mb-4">Add Your Custom Widget</h3>
                    <form onSubmit={handleAddWidget}>
                        <InputFiend name='name' title='Name' placeholder='Widget Name' type='text' />
                        <InputFiend name='content' title='Content' placeholder='Widget Content' type='text' />
                        <button className="btn" type='submit'>Submit</button>
                    </form>

                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default AddWidgets;
