import React from 'react';
import useProvider from '../../Hooks/useProvider';
import InputFiend from '../../Components/inputFiend';
import Swal from 'sweetalert2';
import { Store } from 'react-notifications-component';
import 'animate.css';

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
        Store.addNotification({
            title: "Wonderful!",
            message: "hello",
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true
            }
          });  
        
    };

    return (
        <div>
            <button className="btn animation-hover cursor-pointer text-white" onClick={() => document.getElementById(`modal_${category}`).showModal()}>Add Widget +</button>

            <dialog id={`modal_${category}`} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-xl mb-4">Add Your Custom Widget</h3>
                    <form onSubmit={handleAddWidget}>
                        <InputFiend name='name' title='Name' placeholder='Widget Name' type='text' />
                        <InputFiend name='content' title='Content' placeholder='Widget Content' type='text' />
                        <button className="animation-hover mt-4 px-4 py-2 rounded-lg text-white" type='submit'>Submit</button>
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
