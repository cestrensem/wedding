import { useEffect, useState } from "react"

const getIsDesktop = () => window.innerWidth >= 1024

export const useIsDesktop = () => {
    const [isDesktop, setIsDesktop] = useState(getIsDesktop)

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(getIsDesktop())
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return isDesktop
}