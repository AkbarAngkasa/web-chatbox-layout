import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/emkop-logo-transparent-landscape.png';

export default function FormsCostum() {
    return (
        <div className='mx-[5%] lg:w-[50%] lg:mx-auto my-10 grid grid-cols-1 place-content-center'>
            {/* Header */}
            <div>
                <Link to={"/"}>
                    <Button pill={true} size="xs">
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </Button>
                </Link>
                <div className='my-4 border-b-2 border-slate-300'>
                    <img src={logo} alt={logo} className="w-36 lg:w-40 align-middle inline-block" />
                    <h1 className='inline-block align-middle border-l-2 pl-2 font-bold text-xl lg:text-2xl text-blue-800'>Forms Component</h1>
                </div>
            </div>

            {/* Content */}
            <div className='w-full flex flex-col'>
                <form>
                    <div className="mb-6">
                        <label htmlhtmlhtmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="akbar@emkop.co.id" required />
                    </div>
                    <div className="mb-6">
                        <label htmlhtmlhtmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input id="ingat" type="checkbox" defaultValue="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                        </div>
                        <label htmlhtmlhtmlFor="ingat" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ingat saya</label>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full lg:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                </form>

                <hr className='my-4' />

                <form>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlhtmlhtmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlhtmlhtmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="password" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlhtmlhtmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Konfirmasi password</label>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlhtmlhtmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nama awal</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlhtmlhtmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nama akhir</label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlhtmlhtmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nomor telepon (62-812-3456-7890)</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlhtmlhtmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Perusahaan (Contoh. Google)</label>
                        </div>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full lg:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Kirim</button>
                </form>

                <hr className='my-4' />

                <div className="mb-6">
                    <label htmlhtmlhtmlFor="username-success" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Username</label>
                    <input type="text" id="username-success" className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" placeholder="John Doe" />
                    <p className="mt-2 text-sm text-green-600 dark:text-green-500"><span className="font-medium">Keren!</span> Username tersedia!</p>
                </div>
                <div>
                    <label htmlhtmlhtmlFor="username-error" className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Username</label>
                    <input type="text" id="username-error" className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" placeholder="John Doe" />
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Oops!</span> Username telah terdaftar!</p>
                </div>

                <hr className='my-4' />

                {/* Select input */}
                <label htmlhtmlhtmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pilih negara</label>
                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>Indonesia</option>
                    <option>Singapore</option>
                    <option>Malaysia</option>
                    <option>Thailand</option>
                </select>

                <hr className='my-4' />

                {/* Checkbox */}
                <fieldset>
                    <legend className="sr-only">Checkbox variants</legend>

                    <div className="flex items-center mb-4">
                        <input id="checkbox-1" type="checkbox" defaultValue="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlhtmlhtmlFor="checkbox-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Saya setuju dengan <button href="#" className="text-blue-600 hover:underline dark:text-blue-500">syarat dan ketentuan</button>.</label>
                    </div>

                    <div className="flex items-center mb-4">
                        <input id="checkbox-2" type="checkbox" defaultValue="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlhtmlhtmlFor="checkbox-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Saya ingin mendapatkan tawaran promosi</label>
                    </div>

                    <div className="flex items-center mb-4">
                        <input id="checkbox-3" type="checkbox" defaultValue="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlhtmlhtmlFor="checkbox-3" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Saya 18 tahun atau lebih tua</label>
                    </div>
                    
                    <div className="flex mb-4">
                        <div className="flex items-center h-5">
                            <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" defaultValue="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        </div>
                        <div className="ml-2 text-sm">
                            <label htmlhtmlhtmlFor="helper-checkbox" className="font-medium text-gray-900 dark:text-gray-300">Kupon diskon Emkop</label>
                            <p id="helper-checkbox-text" className="text-xs font-normal text-gray-500 dark:text-gray-400">Untuk minimal nominal transaksi sebesar Rp.50.000,00</p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <input id="international-shipping-disabled" type="checkbox" defaultValue="" className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" disabled/>
                        <label htmlhtmlhtmlFor="international-shipping-disabled" className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500">Berhak asuransi (disabled)</label>
                    </div>
                </fieldset>

                <hr className='my-4'/>

                <fieldset>
                    <legend className="sr-only">Countries</legend>

                    <div className="flex items-center mb-4">
                        <input id="country-option-1" type="radio" name="countries" defaultValue="USA" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
                            <label htmlhtmlhtmlFor="country-option-1" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Indonesia
                            </label>
                    </div>

                    <div className="flex items-center mb-4">
                        <input id="country-option-2" type="radio" name="countries" defaultValue="Germany" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlhtmlhtmlFor="country-option-2" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Singapore
                            </label>
                    </div>

                    <div className="flex items-center mb-4">
                        <input id="country-option-3" type="radio" name="countries" defaultValue="Spain" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlhtmlhtmlFor="country-option-3" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Malaysia
                            </label>
                    </div>

                    <div className="flex items-center mb-4">
                        <input id="country-option-4" type="radio" name="countries" defaultValue="United Kingdom" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring:blue-300 dark:focus-ring-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlhtmlhtmlFor="country-option-4" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Thailand
                            </label>
                    </div>

                    <div className="flex items-center">
                        <input id="option-disabled" type="radio" name="countries" defaultValue="China" className="w-4 h-4 border-gray-200 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600" 
                        disabled/>
                            <label htmlhtmlhtmlFor="option-disabled" className="block ml-2 text-sm font-medium text-gray-300 dark:text-gray-700">
                                China (disabled)
                            </label>
                    </div>
                </fieldset>

                <hr className='my-4'/>

                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlhtmlhtmlFor="user_avatar">Upload file</label>
                <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file"/>
                <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">Ukuran maksimal dokumen adalah 5mb</div>


            </div>
        </div>
    )
}
