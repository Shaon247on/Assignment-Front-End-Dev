
const InputFiend = ({type, placeholder,func, title, name}) => {
    return (
        <>
            <label className="text-lg font-semibold">{title}</label>
            <input
                type={type}
                placeholder={placeholder}                
                className=" w-full px-3 py-2 placeholder-[#5cbbc8] focus:placeholder-transparent border-b-[#5cbbc8] border-b focus:border-b-[#5cbbc8] duration-150  focus:border-b-4 hover:border-b-[#5cbbc8] hover:border-b-4 outline-none bg-transparent"
                onChange={func}
                name={name}
                required
            />
        </>
    );
};

export default InputFiend;