import fondo from '../assets/fondoLogin.jpeg'
import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react';
import { LoginAPI } from '../api/apiAuth';
import { toast } from 'react-hot-toast'
import { CapiPointsContext } from '../Provider/CapiPointsProvider';
import { UserContext } from '../Provider/UserProvider';
import Load from '../Components/Load';

// bilbioteca react-hook-from
import { useForm } from 'react-hook-form';

function Login() {

    const navigate = useNavigate();
    const { setCapiPoints } = useContext(CapiPointsContext);
    const { setUserImage } = useContext(UserContext);

    // estado de carga de la pagina
    const [isLoading, setIsLoading] = useState(false);

    const { register, handleSubmit, formState: {
        errors
    } } = useForm();

    const onSubmit = handleSubmit(async (data) => {

        setIsLoading(true);
        const response = await LoginAPI(data.email, data.password, navigate, setIsLoading)
        setCapiPoints(response.capipoins);
        setUserImage(response.image);
        setIsLoading(false);
    })

    return (
        <>
            {
                isLoading
                    ? <Load />
                    : (
                        <section className="relative flex flex-wrap h-screen lg:items-center bg-black">
                            <div className=" w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                                <div className="mx-auto max-w-lg text-center">
                                    <h1 className="text-2xl font-bold sm:text-5xl text-second_color">Login</h1>

                                    <p
                                        onClick={() => navigate('/register')}
                                        className="mt-4 text-second_color font-semibold cursor-pointer">
                                        <span className='text-gray-400 font-light'>Don't you have any account?</span> Register
                                    </p>
                                </div>

                                <form onSubmit={onSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                                    <div>
                                        <label htmlFor="email" className="sr-only">Email</label>

                                        <div className="relative">
                                            <input
                                                type="email"
                                                className="w-full rounded-lg border-none p-4 pe-12 text-sm shadow-sm bg-primary text-white"
                                                placeholder="Enter email"
                                                {...register('email', {
                                                    required: true,
                                                    pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/i
                                                    
                                                })}
                                            />

                                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="size-4 text-gray-400"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                                    />
                                                </svg>
                                            </span>
                                            {
                                                errors.email && <span className="text-second_color font-extralight text-[12px]">This field is required</span>
                                            }
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="password" className="sr-only">Password</label>

                                        <div className="relative">
                                            <input
                                                type="password"
                                                className="w-full rounded-lg border-none p-4 pe-12 text-sm shadow-sm bg-primary text-white"
                                                placeholder="Enter password"
                                                {...register('password', {
                                                    required: true,
                                                })}
                                            />

                                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="size-4 text-gray-400"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                    />
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                    />
                                                </svg>
                                            </span>
                                            {
                                                errors.password && <span className="text-second_color font-extralight text-[12px]">This field is required</span>
                                            }
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">


                                        <button
                                            type="submit"
                                            className="inline-block rounded-xl bg-second_color px-5 py-3 text-sm font-medium text-white w-full "
                                        >
                                            Login
                                        </button>
                                    </div>
                                </form>
                            </div>

                            <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                                <img src={fondo} className="absolute inset-0 h-full w-full object-cover"
                                />
                            </div>
                        </section>
                    )
            }
        </>
    )
}

export default Login
