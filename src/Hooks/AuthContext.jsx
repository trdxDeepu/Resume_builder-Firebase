import { createContext , useContext , useEffect , useState } from "react";


const AuthContext = createContext({
    currentUser : null,
})

export  const useAuth = () => useContext(AuthContext)

export default function AuthProvider({children}) {

   

    const [currentUser, setCurrentUser] = useState(auth)

    const value = {
        currentUser,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>


}