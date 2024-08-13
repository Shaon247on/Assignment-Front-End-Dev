import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useProvider from '../../../Hooks/useProvider';

const NavBar = () => {
    const [toggle, setToggle] = useState(false)
    const { data,
        setData,
        searchQuery,
        setSearchQuery,
        filteredWidgets,
        setFilteredWidgets } = useProvider()
    const navLinks =
        <>
            <NavLink to='/' style={({ isActive }) => ({
                color: isActive ? 'white' : 'black',
                padding: '4px 10px',
                borderRadius: '5px',
                backgroundColor: isActive ? 'blue' : 'transparent',
                fontWeight: isActive ? '700' : '400',
            })}><li>Home</li></NavLink>
            <NavLink to='/dashboard' style={({ isActive }) => ({
                color: isActive ? 'white' : 'black',
                padding: '4px 10px',
                borderRadius: '5px',
                backgroundColor: isActive ? 'blue' : 'transparent',
                fontWeight: isActive ? '700' : '400',
            })}><li>Dashboard</li></NavLink>
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
    const handleBlur = ()=>{
        setToggle(false)
        console.log(toggle);
    }
    const handleFocus = ()=>{
        setToggle(true)
        console.log(toggle);
    }

    return (
        <>
            <div className="navbar bg-base-100 font-bold">
                <div className="flex-1">
                    <div className="">
                        <ul className='flex items-center gap-3'>
                            {navLinks}
                        </ul>
                    </div>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchQuery}
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                            className="input input-bordered w-24 md:w-auto"
                            onChange={(e) => handleSearch(e.target.value)}
                        />
                        <div className={`${toggle === false? "hidden": "block"} absolute bg-white px-5 rounded-lg top-20`}>
                            {
                                filteredWidgets.length > 0 ? (filteredWidgets.map(widget =>
                                    <div key={widget.id}>
                                        <h3>{widget.name}</h3>
                                    </div>
                                )) :
                                    <p>No widgets found</p>
                            }
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
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
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;