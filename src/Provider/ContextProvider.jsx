import { createContext, useEffect, useState } from 'react';

export const StateContext = createContext(null)

const ContextProvider = ({ children }) => {

    //      ----------------- Theme related state -----------------------

    const [theme, setTheme] = useState('light')

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])



    //      ----------------- Data related state -----------------------

    const [data, setData] = useState([
        {
            "Category": "CSPM Executive Dashboard",
            "Widgets": [
                { "id": 1, "name": "Compliance Status", "type": "barChart", "content": "Bar chart showing compliance status across environments." },
                { "id": 2, "name": "Risk Overview", "type": "text", "content": "Summary of risks identified in the cloud infrastructure." }
            ]
        },
        {
            "Category": "CWPP Dashboard",
            "Widgets": [
                { "id": 3, "name": "Vulnerability Scans", "type": "pieChart", "content": "Pie chart showing the results of vulnerability scans." },
                { "id": 4, "name": "Runtime Protection", "type": "text", "content": "Overview of runtime protection mechanisms in place." }
            ],
        },
        {
            "Category": "Image",
            "Widgets": [
                { "id": 5, "name": "Docker Image Security", "type": "barChart", "content": "Bar chart displaying security status of Docker images." },
                { "id": 6, "name": "Image Scanning Results", "type": "text", "content": "Detailed results of image scanning processes." }
            ],
        },
        {
            "Category": "Ticket",
            "Widgets": [
                { "id": 7, "name": "Open Tickets", "type": "list", "content": "List of open security tickets." },
                { "id": 8, "name": "Resolved Tickets", "type": "text", "content": "Overview of recently resolved security tickets." }
            ]
        }

    ]);

    //      ----------------- Search related state -----------------------

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredWidgets, setFilteredWidgets] = useState([]);


    //      ----------------- Context Values -----------------------

    const info = {
        theme,
        setTheme,
        data,
        setData,
        searchQuery,
        setSearchQuery,
        filteredWidgets,
        setFilteredWidgets
    }

    return (
        <StateContext.Provider value={info}>
            {children}
        </StateContext.Provider>
    );
};

export default ContextProvider;