import React, { useContext } from 'react';
import useProvider from '../../Hooks/useProvider';

const Dashboard = () => {
    const {data} =  useProvider()
    // console.log(data);
    return (
        <div>
            This Is DashBoard
        </div>
    );
};

export default Dashboard;