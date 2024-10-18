import React, { createContext, useEffect, useState } from "react"


export const UserContext = createContext()

export const UserProvider = ({ children }) => {

    const [userImage, setUserImage] = useState(() => {
        return localStorage.getItem('userImage') || null
    })

    useEffect(() => {
        localStorage.setItem('userImage', userImage)
    }, [userImage])

    return (
        <UserContext.Provider value={{ userImage, setUserImage }}>
            {children}
        </UserContext.Provider>
    )

}
