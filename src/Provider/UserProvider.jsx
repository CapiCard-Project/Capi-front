import React, { createContext, useEffect, useState } from "react"


export const UserContext = createContext()

export const UserProvider = ({ children }) => {

    const [userImage, setUserImage] = useState(() => {
        return sessionStorage.getItem('userImage') || null
    })

    useEffect(() => {
        sessionStorage.setItem('userImage', userImage)
    }, [userImage])

    return (
        <UserContext.Provider value={{ userImage, setUserImage }}>
            {children}
        </UserContext.Provider>
    )

}
