
import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { baseUrl, userLogin, userRegister } from '../urls';
import { toast } from 'react-toastify';
export const GlobalContext = createContext({})

const GlobalProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false)
    const [token, setToken] = useState(localStorage.getItem('token') || '')
    const navigate = useNavigate();
    const createUser = async (user) => {
        setIsLoading(true)
        const { name, email, password, confirm_password, role, phone_number } = user;
        if (password != confirm_password) {
            toast('confirm password is not match', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                type:'error',
                });
            setIsLoading(false)
        } else {
            const res = await (await fetch(`${baseUrl}${userRegister}`,
                {
                    body: JSON.stringify(user),
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })).json();
            if (res.success) {
                toast(res.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                type:'success',
                });
                setIsLoading(false)
                navigate('sign-in')
            } else {
                toast(res.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                type:'error',
                progress: undefined,
                theme: "light",
                });
                setIsLoading(false)
            }

        }
    }

    const signInUser = async (user) => {
        setIsLoading(true) 
        const res = await (await fetch(`${baseUrl}${userLogin}`,
            {
                body: JSON.stringify(user),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            })).json();
        if (res.success) {
            localStorage.setItem('token', res.token); 
            toast(res.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                type:'success',
                theme: "light",
                });
            setIsLoading(false)
            navigate('/')
        } else {
            toast(res.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                type:'error',
                });
            setIsLoading(false)
        }
    }

    return (
        <GlobalContext.Provider value={{ createUser, isLoading, signInUser, token }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;