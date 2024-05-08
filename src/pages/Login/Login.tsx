import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/companyService';
import { setCookie } from '../../helpers/cookie';
import { useDispatch } from 'react-redux';
import { checkAuth } from '../../actions/actions';

const Login = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [validation, setValidation] = useState<boolean>(true);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSumbit = async (event: React.BaseSyntheticEvent) => {
        event.preventDefault()
        const email = event.currentTarget.email.value
        console.log(email)
        const password = event.currentTarget.password.value
        console.log(password)
        const response = await login(email, password)
        console.log("RES", response)
        if (response.length > 0) {
            setLoading(true)
            setTimeout(() => {
                const time = 1;
                setCookie("id", response[0].id, time);
                setCookie("companyName", response[0].companyName, time);
                setCookie("email", response[0].email, time);
                setCookie("token", response[0].token, time);
                dispatch(checkAuth(true));
                setLoading(false)
                navigate("/")
            }, 1000)
        }
        else {
            setValidation(false)
        }
    }
    return (
        <div className=' mt-[66px]'>
            <div className='w-full bg-gradient-to-r from-slate-900 to-red-900 h-80 rounded-b-[20%] absolute  '></div>
            <div className='relative top-10 container pb-20 sm:px-[400px] gap-6'>
                <div className='bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] px-8 py-5 rounded-lg'>
                    <div className='text-3xl mt-1 text-center font-bold'>Login</div>
                    <form className='flex flex-col text-gray-800 font-semibold ' onSubmit={handleSumbit}>
                        <label className='mt-5 text-gray-600' htmlFor="email">Email</label>
                        <input required className="text-lg mt-1 outline-none py-2 px-2 border border-gray-400  focus:border-red-500 focus:ring focus:ring-red-200 rounded-md" type="email" id='email' />
                        <label className='mt-5 text-gray-600' htmlFor="phone">Password</label>
                        <input required className="text-lg mt-1 outline-none py-2 px-2 border border-gray-400   focus:border-red-500 focus:ring focus:ring-red-200 rounded-md" type="password" id='password' />

                        <div className={`${validation ? "hidden" : "mt-3 pl-0.5 text-red-600"}`}>Incorrect email or password; Please try again</div>

                        <div className='flex items-center mt-5 justify-between'>
                            <button className="py-3 w-full hover:bg-red-700 text-center rounded-lg bg-red-600 text-white font-bold flex justify-center items-center" type='submit'>
                                {loading && (
                                    <svg className={`mr-2 w-5 h-5 text-gray-200 animate-spin dark:text-gray-800 fill-red-600`} viewBox="0 0 100 101" fill="none">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                )}
                                <div>Login</div>
                            </button>
                        </div>
                    </form>

                </div>
            </div >
        </div >
    )
}

export default Login