import { createContext, useState } from "react";

export const FirebaseContext = createContext(null)

export const authContext = createContext(null)

export function Context ({children}) {
    const [user,setUser] = useState('')

    return(
        <authContext.Provider value={{user,setUser}}>
            {children}
        </authContext.Provider>
    )
}