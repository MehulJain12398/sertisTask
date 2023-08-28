import React , {createContext,useContext,useState} from "react";

const AppContext = createContext()

export const useAppContext = () => {
    return useContext(AppContext)
}

const AppProvider = ({children}) => {
    const [formData,setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        countryCode:"+66",
        phoneNumber:""
    });
    const [currentPage,setCurrentPage] = useState('home')
    const [isEdit,setIsEdit] = useState(false)
    const values = {
        formData,
        setFormData,
        currentPage,
        isEdit,
        setIsEdit,
        setCurrentPage
    }

    return <AppContext.Provider value={values}>
        {children}
    </AppContext.Provider>

}


export default AppProvider
