import { createContext, useContext, useEffect, useState} from "react";

const AppContext = createContext();

const getInitialDarkMode = () => { // this will check if the windows is initially in the dark mode 
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const checkUserSet = localStorage.getItem('darkTheme') === 'true'; // the return of localStorage.getItem('darkTheme') is a string thats why I use === 'true' (string)
    console.log(checkUserSet)
    return  checkUserSet || prefersDarkMode ;
}

export const GlobalContext = ({children}) => {
    const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode); // this will always return true or false.
    const [searchTerm,setSearchTerm] = useState('cat');
    
    useEffect(()=>{
        // change the color of the body | dark theme
        // selecting the <body></body> and change the class to dark theme if the newDarkTheme is true;
        // document.body.classList.toggle('className', boolean);
        document.body.classList.toggle('dark-theme', isDarkTheme);
    },[isDarkTheme]);

    const toggleDarkTheme = () => {
        const newDarkTheme = !isDarkTheme;
        setIsDarkTheme(newDarkTheme);
        localStorage.setItem('darkTheme', newDarkTheme); //storing the set dark mode(true or false) of the user.
                                                        // in this, every time the user visit the site it remember what he/she set if the darkMode is on/off even if the browser set the darkMode by default.
    }
   
    return (
    <AppContext.Provider value = {{isDarkTheme, 
                                    toggleDarkTheme,
                                    searchTerm,
                                    setSearchTerm}}>
        {children}
    </AppContext.Provider>
)}

export const useGlobalContext = () => useContext(AppContext);