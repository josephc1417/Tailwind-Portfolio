import  {createContext,useContext, useRef, useState} from 'react'

 const GlobalContext = createContext(undefined);


{/* Custom hook  */}
 export const useGlobalContext = () => useContext(GlobalContext)

// eslint-disable-next-line react/prop-types
    const AppContext = ({children}) => {
        {/* Define shared state and functions */}
        const [showLinks, setShowLinks] = useState(false)


        {/* Declare useRef variables  */}
        const linksContainerRef = useRef(null)
        const linksRef = useRef(null)

        {/* Define showLinks function */}
        const toggleLinks = () => {
            setShowLinks(!showLinks)
        }

        {/* Calculate link height dynamically (conditionally) */
        }
        const linkStyles = {
            height: showLinks ? `${linksRef.current.getBoundingClientRect().height}px` : '0px'
        }

        return (
            <GlobalContext.Provider value={{showLinks, setShowLinks, toggleLinks, linksContainerRef, linksRef, linkStyles}}>
                {children}
            </GlobalContext.Provider>
        )
    }

export default AppContext;