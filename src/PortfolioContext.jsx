import React, {createContext,useContext, useRef, useState} from 'react'

export const PortfolioContext = createContext();


{/* Custom hook  */}
const useMyPortfolioContext = () => {
    {/* Define shared state and functions  */}
    const [showLinks, setShowLinks] = useState(false)


    {/* Declare useRef variables  */}
    const linksContainerRef = useRef(null)
    const linksRef = useRef(null)

    {/* Define showLinks function  */
    }
    const toggleLinks = () => {
        setShowLinks(!showLinks)
    }

    {/* Calculate link height dynamically (conditionally) */}
    const linkStyles = {
        height:showLinks ? `${linksRef.current.getBoundingClientRect().height}px` : '0px'
    }
    const PortfolioProvider = ({children}) => {
            return (
            <PortfolioContext.Provider value={{showLinks, setShowLinks}}>
                {children}
            </PortfolioContext.Provider>
        )
    }

    const useContextValue = () => {
        return useContext(PortfolioContext)
    }
    return {PortfolioProvider,useContextValue}
}
export default useMyPortfolioContext;