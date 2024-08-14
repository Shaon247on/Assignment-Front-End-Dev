import React from 'react';
import useProvider from '../../Hooks/useProvider';
import InputFiend from '../../Components/inputFiend';

const AddWidgets = ({category}) => {

    console.log(category);
    const { data, setData } = useProvider()
    
    
    const handleAddWidget = (e)=> {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const content = form.content.value

        // console.log(name, content);

        const allWidgets = data.reduce((acc, currentCategory)=>{
            return acc.concat(currentCategory.Widgets)
        },[])

        // console.log(allWidgets);

        const newWidget = {
            id: allWidgets.length + 1,
            name: name, 
            type: category,
            content: content           
        }

        // console.log(newWidget);

        const updatedWidgets = data.map(type=>{
            if(type.Category === category){

                return {...type,Widgets: [...type.Widgets, newWidget]};
            }

            return type
        })

        setData(updatedWidgets)

        // console.log(data);
    }

    return (
        <div>
            <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Add Widget +</button>

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    {/* -------------- Modal body area -------------- */}

                    <h3 className="font-bold text-xl mb-4">Add Your Custom Widget</h3>
                    <form onSubmit={handleAddWidget}>
                        <InputFiend name='name' title='Name' placeholder='Widget Name' type='text'></InputFiend>
                        <InputFiend name='content' title='Content' placeholder='Widget Content' type='text'></InputFiend>
                        <button className="btn" type='submit'>Submit</button>
                    </form>
                    
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>

    );
};

export default AddWidgets;