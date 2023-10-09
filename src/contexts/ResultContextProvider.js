import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseImgURL = 'https://google-search72.p.rapidapi.com';
const baseURL = 'https://real-time-web-search.p.rapidapi.com';

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    // /search
    const getResults = async (url) => {
        setIsLoading(true);
        const response = await fetch(`${baseURL}${url}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY_SEARCH,
                'X-RapidAPI-Host': 'real-time-web-search.p.rapidapi.com'
            },
        });

        const data = await response.json();
        console.log(data);
        // const initialResults = {
        //     data: [
        //       {
        //         title:"Online Store Builder – Create an Ecommerce Store with Shopify",
        //         snippet:"Create an online store with just a few steps: Choose an ecommerce platform; Add the products you want to sell; Create key pages for your store; Pick a theme and ...",
        //         url:"https://www.shopify.com/online-store",
        //         domain:"www.shopify.com",
        //         position:1,
        //       },
        //       {
        //         title:"Build a Free Online Store or eCommerce Website - Square",
        //         snippet:"Use our easy-to-use online store builder to design a professional-looking eCommerce website for your business. Choose between a single ordering page or a multi- ...",
        //         url:"https://squareup.com/us/en/online-store",
        //         domain:"squareup.com",
        //         position:2
        //       },
        //     ],
        //   };
        // console.log(initialResults);
        // setResults(initialResults);
        setResults(data);
        setIsLoading(false);
    };

    const getImgResults = async (url) => {
        setIsLoading(true);
        const response = await fetch(`${baseImgURL}${url}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY_IMG,
                'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
            },
        });

        const data = await response.json();
        // const initialResults = {
        //     items: [
        //       {
        //         title:"Why Argentina's win over France was the greatest World Cup final 84 47 18 23 17 26 16 3 28 28 10 17 44 28 2 20 22 21 18 36 34 37 18 38 20 1 31 17 20 6 27 37 11 24 39 7 3 9 36 31 16 46 27 13 6 9 13 28 9 31 44 43 1 15 35 21 42 45 38 41 4 18 32 15 22 3 1 25 38 37 36 34 15 16 0 22 4 39 29 14 3 5 10 4 20 24",
        //         thumbnailImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7GMNVBWTSSYEtU6PipINZMz4_IJJAjKs5Qlr2triD7I4FxUwN&s",
        //         originalImageUrl:"https://media.cnn.com/api/v1/images/stellar/prod/221219105607-messi-crowd-world-cup-121822.jpg?c=original&q=w_1280,c_fill",
        //         height:852,
        //         width:1280,
        //         size:"221KB",
        //         contextLink:"https://www.cnn.com/2022/12/19/football/argentina-france-best-world-cup-final-spt-intl/index.html"
        //       },
        //       {
        //         title:"World Cup | History & Winners | Britannica",
        //         thumbnailImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZDCpsMhJRVKfHv44RFQlmSQF5s014-5GIwntA74Kk6CPLhF0&s",
        //         originalImageUrl:"https://cdn.britannica.com/85/139485-050-BCF84C18/FIFA-World-Cup-trophy.jpg",
        //         height:1600,
        //         width:871,
        //         size:"333KB",
        //         contextLink:"https://www.britannica.com/sports/World-Cup-football"
        //       },
        //     ],
        //   };
        console.log(data);
        // console.log(initialResults);
        // setResults(initialResults);
        setResults(data);
        setIsLoading(false);
    };

    return(
        <ResultContext.Provider value={{ getResults, getImgResults, results, isLoading, searchTerm, setSearchTerm }}>
            {children}
        </ResultContext.Provider>
    );
};

export const useResultContext = () => useContext(ResultContext);