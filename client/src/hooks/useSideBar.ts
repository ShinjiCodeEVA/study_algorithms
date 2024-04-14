import { useState, useEffect } from "react"

export const useSideBar = () => {
    const [isSideBarVisible, setIsSideBarVisible] = useState<boolean>(false);

    const toggleSideBar = () => setIsSideBarVisible(!isSideBarVisible)

    useEffect(() => { 
        const handleResize = () => { 
            const isLargeScreen = window.innerWidth > 950;

            if (isLargeScreen) 
                setIsSideBarVisible(true);
            else    
                setIsSideBarVisible(false);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [])

  

    return {isSideBarVisible, toggleSideBar}
}