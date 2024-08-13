import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useProvider from '../../../Hooks/useProvider';
import logo1 from '../../../assets/FW.png';
import logo2 from '../../../assets/FW (1).png';

const NavBar = () => {
    const [toggle, setToggle] = useState(false)




    const {
        theme,
        setTheme,
        data,
        setData,
        searchQuery,
        setSearchQuery,
        filteredWidgets,
        setFilteredWidgets } = useProvider()
    const navLinks =
        <>
            <NavLink to='/' style={({ isActive }) => ({
                color: isActive ? 'white' : 'sunset',
                padding: '4px 10px',
                borderRadius: '5px',
                backgroundColor: isActive ? '#5cbbc8' : 'transparent',
                fontWeight: isActive ? '700' : '400',
            })}><li className='text-sm md:text-base'>Home</li></NavLink>
            <NavLink to='/dashboard' style={({ isActive }) => ({
                color: isActive ? 'white' : 'sunset',
                padding: '4px 10px',
                borderRadius: '5px',
                backgroundColor: isActive ? '#5cbbc8' : 'transparent',
                fontWeight: isActive ? '700' : '400',
            })}><li className='text-sm md:text-base'>Dashboard</li></NavLink>
        </>
    const handleSearch = (e) => {

        console.log(typeof e);
        setSearchQuery(e)

        const allWidgets = Object.values(data).flat()
        // console.log(allWidgets);


        const result = allWidgets.filter(widget => widget.name.toLowerCase().includes(e.toLowerCase()))
        console.log(result);

        setFilteredWidgets(result)
        console.log(filteredWidgets.length);
    }
    const handleBlur = () => {
        setToggle(false)
        console.log(toggle);
    }
    const handleFocus = () => {
        setToggle(true)
        console.log(toggle);
    }

    const handleToggle = (e) => {
        console.log(e.target.value);
        if (e.target.checked) {
            setTheme('sunset')
        } else {
            setTheme('light')
        }
    }

    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navLinks}
                            <div className="flex-none gap-2 relative inline-block md:hidden">
                                <div className="form-control">
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        value={searchQuery}
                                        onBlur={handleBlur}
                                        onFocus={handleFocus}
                                        className=" w-full px-3 py-2 placeholder-[#5cbbc8] focus:placeholder-transparent border-b-[#5cbbc8] border-b focus:border-b-[#5cbbc8] duration-150  focus:border-b-4 hover:border-b-[#5cbbc8] hover:border-b-4 outline-none bg-transparent"
                                        onChange={(e) => handleSearch(e.target.value)}
                                    />
                                    <div className={`${toggle === false ? "hidden" : "block"} absolute bg-gray-200 w-48 px-5 py-2 rounded-lg z-10 top-10 md:top-16 left-0 md:left-0`}>
                                        {
                                            filteredWidgets.length > 0 ? (filteredWidgets.map(widget =>
                                                <div key={widget.id}>
                                                    <h3 className='text-sm md:text-base '>{widget.name}</h3>
                                                </div>
                                            )) :
                                                <p>No widgets found</p>
                                        }
                                    </div>
                                </div>
                                {/* <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img
                                                alt="Tailwind CSS Navbar component"
                                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                        </div>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                        <li><a>Logout</a></li>
                                    </ul>
                                </div> */}
                            </div>
                        </ul>
                    </div>
                    <div className='flex items-center gap-3 justify-center'>
                        <img src={`${theme === "sunset" ? logo1 : logo2}`} alt="" className='rounded-full w-12 md:w-16 h-12 md:h-16' />
                        <div>
                            <p className='font-bold text-lg md:text-xl -mb-1'><samp className='text-[#5cbbc8] text-xl md:text-2xl'>FUT</samp>URE</p>
                            <p className='font-bold text-lg md:text-xl -mt-1'>WID<span className='text-[#5cbbc8] text-lg md:text-xl'>GETS</span></p>
                        </div>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="gap-2 relative mr-7 hidden md:flex justify-center">
                        {/* Mode changing button */}

                        <label className="swap swap-rotate">
                            {/* this hidden checkbox controls the state */}
                            <input type="checkbox" className="theme-controller" onChange={handleToggle} value="synthwave" />

                            {/* sun icon */}
                            <svg
                                className="swap-off h-10 w-10 fill-current text-[#5cbbc8]"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                            </svg>

                            {/* moon icon */}
                            <svg
                                className="swap-on h-10 w-10 fill-current text-[#5cbbc8]"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                            </svg>
                        </label>

                        {/* Search Input section  */}

                        <div className="form-control">
                            <input
                                type="text"
                                placeholder="Search"
                                value={searchQuery}
                                onBlur={handleBlur}
                                onFocus={handleFocus}
                                className=" w-full px-3 py-2 placeholder-[#5cbbc8] focus:placeholder-transparent border-b-[#5cbbc8] border-b focus:border-b-[#5cbbc8] duration-150  focus:border-b-4 hover:border-b-[#5cbbc8] hover:border-b-4 outline-none bg-transparent"
                                onChange={(e) => handleSearch(e.target.value)}
                            />
                            <div className={`${toggle === false ? "hidden" : "block"} absolute bg-gray-200 w-48 px-5 py-2 rounded-lg top-16 -left-20 md:left-0`}>
                                {
                                    filteredWidgets.length > 0 ? (filteredWidgets.map(widget =>
                                        <div key={widget.id}>
                                            <h3 className='text-sm md:text-base hover:text-[#5cbbc8] duration-500 cursor-pointer'>{widget.name}</h3>
                                        </div>
                                    )) :
                                        <p>No widgets found</p>
                                }
                            </div>
                        </div>
                    </div>
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default NavBar;