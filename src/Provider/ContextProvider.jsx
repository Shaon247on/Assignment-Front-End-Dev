import { createContext, useState } from 'react';

export const StateContext = createContext(null)

const ContextProvider = ({ children }) => {
    const [data, setData] = useState({
        "CSPM": [
            { "id": 1, "name": "Compliance Status", "type": "barChart", "content": "Bar chart showing compliance status across environments." },
            { "id": 2, "name": "Risk Overview", "type": "text", "content": "Summary of risks identified in the cloud infrastructure." }
        ],
        "CWPP": [
            { "id": 3, "name": "Vulnerability Scans", "type": "pieChart", "content": "Pie chart showing the results of vulnerability scans." },
            { "id": 4, "name": "Runtime Protection", "type": "text", "content": "Overview of runtime protection mechanisms in place." }
        ],
        "Image": [
            { "id": 5, "name": "Docker Image Security", "type": "barChart", "content": "Bar chart displaying security status of Docker images." },
            { "id": 6, "name": "Image Scanning Results", "type": "text", "content": "Detailed results of image scanning processes." }
        ],
        "Ticket": [
            { "id": 7, "name": "Open Tickets", "type": "list", "content": "List of open security tickets." },
            { "id": 8, "name": "Resolved Tickets", "type": "text", "content": "Overview of recently resolved security tickets." }
        ]
    });

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredWidgets, setFilteredWidgets] = useState([]);

    const info = {
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