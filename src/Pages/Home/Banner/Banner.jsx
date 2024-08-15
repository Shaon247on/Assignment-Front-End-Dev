import { Link } from 'react-router-dom';
import bannerPhoto from '../../../assets/Banner2.gif';
import { FaArrowRightLong } from "react-icons/fa6";
import 'animate.css';

const Banner = () => {
    return (
        <div className='relative flex justify-center mb-20 h-[675px]'>
            <img src={bannerPhoto} alt="" className='w-full absolute z-10'/>
            <div className='w-full h-[188px] md:h-[385px] lg:h-[675px] absolute z-20 bg-gradient-to-b from-[#5cbbc8]'></div>
            <div className='absolute z-20 top-2 md:top-10 lg:top-20'>
                <h1 className='text-2xl md:text-4xl lg:text-5xl font-lora text-black text-center font-semibold'>Empower Your Cloud Security <br /> Customize and Control</h1>
            </div>
            <div className='absolute z-20 w-[300px] md:w-[461px] top-[60px] md:top-[105px] lg:top-[200px] left-10 md:left-[160px] lg:left-[440px] h-[150px] md:h-[230px] lg:h-[340px] animate__animated animate__fadeInUp text-center p-3 md:p-7 lg:p-3'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl text-black font-lora font-medium w-full lg:w-[250px] mx-auto'>Welcome to Future Widgets</h1>
                <p className='text-white text-center mt-2 md:mt-5 text-[10px] md:text-base'>Effortlessly personalize your cloud security dashboard with dynamic widgets. Track compliance, monitor vulnerabilities, and manage risks—all in one streamlined interface. Your security, your way."</p>
                <div className='flex items-center justify-center gap-7 mt-2 lg:mt-5'>
                    <p className='text-white text-[14px] md:text-base'>Dashboard</p>
                    <Link to='/dashboard'><button className="btn btn-circle bg-[#5cbbc8] btn-sm md:btn-md hover:bg-[#306369] duration-500 border-none"><FaArrowRightLong className='text-black text-base md:text-xl'></FaArrowRightLong></button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;