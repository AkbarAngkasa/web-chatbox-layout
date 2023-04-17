import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'flowbite-react';
import { initFlowbite } from 'flowbite';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/emkop-logo-transparent-landscape.png';
import { useEffect } from 'react';
import useDate from '../../costumHooks/useDate';
import useGenerateGreet from '../../costumHooks/useGenerateGreet';

export default function Login() {
    useEffect(() => {
        initFlowbite();
    });

    return (
        <>
            {/* Header */}
            <div className='absolute top-5 left-5'>
                <Link to={"/"}>
                    <Button pill={true} size="xs">
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </Button>
                </Link>
            </div>

            {/* Content */}
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto my-auto h-screen lg:py-0"> 
                    {/* <Link to="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="w-44" src={logo} alt={logo} />
                    </Link> */}
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            {/* Header */}
                            <div>
                                <div className='flex flex-row justify-around'>
                                    <div>
                                        <Link to="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                                            <img className="w-44" src={logo} alt={logo} />
                                        </Link>
                                    </div>
                                    <div>
                                        <h1 className="my-2 text-2xl font-bold leading-tight tracking-tight text-blue-800 dark:text-white md:text-3xl">
                                            Login
                                        </h1>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex flex-row justify-between">
                                    <h2 className="my-2 font-semibold text-sm w-[70%]">
                                        {useGenerateGreet()}
                                    </h2>
                                    <h2 className="my-2 font-semibold text-sm">
                                        <span className="ml-1">{useDate()}</span>
                                    </h2>
                                </div>
                                {/* <h2 className='my-2 font-semibold text-sm'>
                                    Woo pretty excited!
                                </h2> */}
                                {/* <h2 className='my-2 font-semibold text-sm'>
                                    Let's goo!
                                </h2> */}
                                {/* <h2 className="my-2 font-semibold text-sm">
                                    <FontAwesomeIcon icon={faHandFist} className="mr-1"/>Lets go
                                </h2> */}
                            </div>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@emkop.co.id" required="" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div className="flex items-center justify-between">
                                    {/* <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div> */}
                                    <Link to="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</Link>
                                </div>
                                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <Link to="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
