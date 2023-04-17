import { faChevronLeft, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/emkop-logo-transparent-landscape.png';
import { useState } from 'react';

export default function ModalCostum() {

    // Default Modal Toggle
    const [defaultModalToggle, setDefaultModalToggle] = useState(false);

    function onOpenDefault() {
        setDefaultModalToggle(true);
    }

    function onCloseDefault() {
        setDefaultModalToggle(false);
    }

    // Pop-up Modal Toggle
    const [popUpModalToggle, setPopUpModalToggle] = useState(false);

    function onOpenPopUp() {
        setPopUpModalToggle(true);
    }

    function onClosePopUp() {
        setPopUpModalToggle(false);
    }

    // Form Modal Toggle
    const [formModalToggle, setFormModalToggle] = useState(false);

    function onOpenForm() {
        setFormModalToggle(true);
    }

    function onCloseForm() {
        setFormModalToggle(false);
    }

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
                    <h1 className='inline-block align-middle border-l-2 pl-2 font-bold text-xl lg:text-2xl text-blue-800'>Modal Component</h1>
                </div>
            </div>

            {/* Content */}
            {/* ==================== */}
            {/* === Default Modal ===*/}
            {/* ==================== */}
            <Button onClick={onOpenDefault}>
                Default modal
            </Button>
            <Modal
                show={defaultModalToggle}
                onClose={onCloseDefault}
            >
                <Modal.Header>
                    Default Modal
                </Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, at ut! Obcaecati, consequatur nemo quis laborum officia accusantium corporis dolorum sed eveniet quia incidunt iure, molestias aut provident animi tenetur pariatur nisi non cum ratione!
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ab adipisci corrupti tenetur, eum quibusdam, minus totam nisi asperiores temporibus deleniti doloribus. Vitae quibusdam quisquam neque corrupti consequuntur? Ad ducimus debitis veniam fugiat praesentium harum totam excepturi reiciendis nihil consequatur, asperiores perspiciatis assumenda distinctio quisquam doloremque quasi itaque laborum enim!
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onCloseDefault}>
                        Saya terima
                    </Button>
                    <Button
                        color="gray"
                        onClick={onCloseDefault}
                    >
                        Tolak
                    </Button>
                </Modal.Footer>
            </Modal>

            <hr className='my-4' />

            {/* ==================== */}
            {/* === Pop-up Modal === */}
            {/* ==================== */}
            <Button onClick={onOpenPopUp}>
                Pop-up modal
            </Button>
            <Modal
                show={popUpModalToggle}
                size="md"
                popup={true}
                onClose={onClosePopUp}
            >
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        {/* <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" /> */}
                        <FontAwesomeIcon icon={faCircleExclamation} className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200"/>
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Yakin ingin hapus produk ini?
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button
                                color="failure"
                                onClick={onClosePopUp}
                            >
                                Iya, hapus produk
                            </Button>
                            <Button
                                color="gray"
                                onClick={onClosePopUp}
                            >
                                Batal
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <hr className='my-4' />

            {/* ================== */}
            {/* === Form Modal === */}
            {/* ================== */}
            <Button onClick={onOpenForm}>
                Form modal
            </Button>
            <Modal
                show={formModalToggle}
                size="md"
                popup={true}
                onClose={onCloseForm}
            >
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                            Sign in Emkop
                        </h3>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlhtmlhtmlFor="email"
                                    defaultValue="Email"
                                />
                            </div>
                            <TextInput
                                id="email"
                                placeholder="akbar@emkop.co.id"
                                required={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlhtmlhtmlFor="password"
                                    defaultValue="Password"
                                />
                            </div>
                            <TextInput
                                id="password"
                                type="password"
                                required={true}
                            />
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-center gap-2">
                                <Checkbox id="remember" />
                                <Label htmlhtmlhtmlFor="remember">
                                    Ingat saya
                                </Label>
                            </div>
                            <button
                                href="#"
                                className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                            >
                                Lupa password
                            </button>
                        </div>
                        <div className="w-full">
                            <Button>
                                Sign in
                            </Button>
                        </div>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Belum terdaftar?
                            <a
                                href="/modal"
                                className="text-blue-700 hover:underline dark:text-blue-500"
                            >
                                Bikin akun
                            </a>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

        </div>
    )
}
