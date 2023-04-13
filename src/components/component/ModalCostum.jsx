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
                    Terms of Service
                </Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onCloseDefault}>
                        I accept
                    </Button>
                    <Button
                        color="gray"
                        onClick={onCloseDefault}
                    >
                        Decline
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
                        <FontAwesomeIcon icon={faCircleExclamation} />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Are you sure you want to delete this product?
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button
                                color="failure"
                                onClick={onClosePopUp}
                            >
                                Yes, I'm sure
                            </Button>
                            <Button
                                color="gray"
                                onClick={onClosePopUp}
                            >
                                No, cancel
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
                            Sign in to our platform
                        </h3>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="email"
                                    value="Your email"
                                />
                            </div>
                            <TextInput
                                id="email"
                                placeholder="name@company.com"
                                required={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="password"
                                    value="Your password"
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
                                <Label htmlFor="remember">
                                    Remember me
                                </Label>
                            </div>
                            <a
                                href="/modal"
                                className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                            >
                                Lost Password?
                            </a>
                        </div>
                        <div className="w-full">
                            <Button>
                                Log in to your account
                            </Button>
                        </div>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Not registered?
                            <a
                                href="/modal"
                                className="text-blue-700 hover:underline dark:text-blue-500"
                            >
                                Create account
                            </a>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

        </div>
    )
}
