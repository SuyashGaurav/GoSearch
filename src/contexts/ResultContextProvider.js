import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseURL = 'https://google-search72.p.rapidapi.com';

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    // /search, /images
    const getResults = async (url) => {
        setIsLoading(true);
        const response = await fetch(`${baseURL}${url}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'bd59419163msh1af2c6dc0a77ec8p1ef622jsn07f661313985',
                'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
            },
        });

        const data = await response.json();
        // console.log(data);
        setResults(data);
        setIsLoading(false);
    };

    return(
        <ResultContext.Provider value={{ getResults, results, isLoading, searchTerm }}>
            {children}
        </ResultContext.Provider>
    );
};

export const useResultContext = () => useContext(ResultContext);