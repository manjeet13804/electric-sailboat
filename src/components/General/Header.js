import { Modal, Form, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { login, logout, register, forgotPassword, resetPassword } from "@/store/slices/authSlice";
import { selectError, selectSuccess, resetError, resetSuccess } from "@/store/slices/alertSlice";
import AlertNotifications from "@/components/AlertNotifications";
import ButtonLoader from "@/components/ButtonLoader";
import { useRouter } from "next/router";
import NProgress from "nprogress";

export default function GeneralHeader() {
    const router = useRouter();
    const errors = useSelector(selectError);
    const success = useSelector(selectSuccess);
    const dispatch = useDispatch();

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const [registerName, setRegisterName] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [registerPasswordConfirm, setRegisterPasswordConfirm] = useState('');
    const [registerAcceptTerms, setRegisterAcceptTerms] = useState(true);

    useEffect(() => {
        setIsLoggedIn(localStorage.getItem('esb_auth_token') ? true : false);
    }, [])

    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showResetModal, setShowResetModal] = useState(false);
    const [emailReset, setEmailReset] = useState("")
    const [showReset, setShowReset] = useState(false)
    const [otp, setOtp] = useState(null)
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const handleRegisterModalClose = () => setShowRegisterModal(false);
    const handleLoginModalClose = () => setShowLoginModal(false);
    const handleResetModalClose = () => setShowResetModal(false);


    const handleRegisterModalShow = () => {
        resetError();
        resetSuccess();
        setShowLoginModal(false);
        setShowResetModal(false);
        setShowRegisterModal(true);
    }
    const handleLoginModalShow = () => {
        resetError();
        resetSuccess();
        setShowRegisterModal(false);
        setShowResetModal(false);
        setShowLoginModal(true);
    }
    const handleResetModalShow = () => {
        resetError();
        resetSuccess();
        setShowRegisterModal(false);
        setShowLoginModal(false);
        setShowResetModal(true);
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const user = {
            email: loginEmail,
            password: loginPassword,
            device_name: "ESB React User"
        };
        setIsLoading(true);
        NProgress.start();
        dispatch(login(user)).then((isLoginSuccess) => {
            setIsLoading(false);
            NProgress.done();
            if (isLoginSuccess) {
                router.push('/member');
            }
        });
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        const user = {
            name: registerName,
            email: registerEmail,
            password: registerPassword,
            password_confirmation: registerPasswordConfirm
        };
        setIsLoading(true);
        NProgress.start();
        dispatch(register(user)).then((isRegisterSuccess) => {
            setIsLoading(false);
            NProgress.done();
            if (isRegisterSuccess) {
                resetRegisterForm();
            }
        });
    };

    const resetRegisterForm = () => {
        setRegisterName('');
        setRegisterEmail('');
        setRegisterPassword('');
        setRegisterPasswordConfirm('');
        setRegisterAcceptTerms(true);
    }

    const handleToggleTerms = () => {
        setRegisterAcceptTerms(!registerAcceptTerms);
    }

    async function signOutHandler(e) {
        e.preventDefault();
        NProgress.start();
        await dispatch(logout());
        setIsLoggedIn(false);
        NProgress.done();
        router.push("/");
    }

    function showDashboard(e) {
        e.preventDefault();
        router.push("/member");
    }
    const handleEmailReset = () => {
        const email = { email: emailReset };
        setIsLoading(true);
        NProgress.start();
        dispatch(forgotPassword(email)).then((isResetSuccess) => {
            setIsLoading(false);
            NProgress.done();
            if (isResetSuccess) {
                setShowReset(true)
            }
        });
    }
    const handleResetEmail = () => {
        const resettPassword = {
            email: emailReset,
            code: otp,
            password: newPassword,
            password_confirmation: confirmPassword
        }
        setIsLoading(true);
        NProgress.start();
        dispatch(resetPassword(resettPassword)).then((isResetSuccess) => {
            setIsLoading(false);
            NProgress.done();
            if (isResetSuccess) {
                setEmailReset("")
                setShowReset(false)
                setOtp(null)
                setNewPassword("")
                setConfirmPassword("")
            }
        });
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top dark-background py-3">
                <div className="container">
                    <Link href="/" className="navbar-brand d-flex align-items-center fw-bold fs-2">
                        <img src="/images/logo.svg" alt="Logo" className="img-fluid logo-size" />
                    </Link>
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                    <div className="collapse navbar-collapse border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto pt-2 pt-lg-0">
                            <li className="nav-item"><a className="nav-link fw-medium active" aria-current="page" href="#">ABOUT</a></li>
                            <li className="nav-item"><a className="nav-link fw-medium" href="#">BLOG</a></li>
                        </ul>
                        {isLoggedIn &&
                            <div className="ps-lg-4">
                                <button className="btn signup_btn me-5" onClick={showDashboard}>Dashboard</button>
                                <button className="btn signin_btn" onClick={signOutHandler}>Sign Out</button>
                            </div>
                        }
                        {!isLoggedIn &&
                            <div className="ps-lg-4">
                                <button className="btn signup_btn me-5" onClick={handleRegisterModalShow}>Sign Up</button>
                                <button className="btn signin_btn" onClick={handleLoginModalShow}>Sign In</button>
                            </div>
                        }
                    </div>
                </div>
            </nav>

            <Modal show={showRegisterModal}
                backdrop="static"
                keyboard={false}
                size="lg"
                centered>
                <Modal.Body className="p-0">
                    <div>
                        <div className="modal-header login-signup-box-bg">
                            <div className="text-center m-auto align-middle">
                                <h1 className="modal-title fs-5 fs-gotham-36 text-uppercase text-white">Create an Account</h1>
                                <p className="text-white">Sign up now to get started with an account.</p>
                            </div>
                            <a href className="align-middle mt-4" onClick={handleRegisterModalClose}><img src="/images/close-btn.svg" /></a>
                        </div>
                        <div className="modal-body">
                            <AlertNotifications error={errors} success={success} />
                            <Form onSubmit={handleRegisterSubmit}>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="register-name" value={registerName} onChange={e => setRegisterName(e.target.value)} />
                                    <label htmlFor="register-name">Name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="register-email" value={registerEmail} onChange={e => setRegisterEmail(e.target.value)} />
                                    <label htmlFor="register-email">Email Address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="register-password" value={registerPassword} onChange={e => setRegisterPassword(e.target.value)} />
                                    <label htmlFor="register-password">Password</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="register-password-confirm" value={registerPasswordConfirm} onChange={e => setRegisterPasswordConfirm(e.target.value)} />
                                    <label htmlFor="register-password-confirm">Confirm Password</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked onChange={handleToggleTerms} />
                                    <label className="form-check-label fs-gotham-400" htmlFor="flexCheckChecked">
                                        I have read and agree to the <span><a href="#" className="text-danger">Terms of Service</a></span>
                                    </label>
                                </div>
                                <div className="create_your_mt-5 w-100">
                                    <Button className="btn create_your_account w-100" disabled={isLoading || !registerAcceptTerms} type="submit"> {isLoading ? <ButtonLoader /> : 'CREATE YOUR ACCOUNT'}</Button>
                                </div>
                                <div className="mt-3 text-center">
                                    <p>Already have an account? <span><a href="#" className="text-danger fs-gotham-600" onClick={handleLoginModalShow}>Log in</a></span></p>
                                </div>
                            </Form>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal show={showLoginModal}
                backdrop="static"
                keyboard={false}
                size="lg"
                centered>
                <Modal.Body className="p-0">
                    <div>
                        <div className="modal-header login-signup-box-bg">
                            <div className="text-center m-auto align-middle">
                                <h1 className="modal-title fs-5 fs-gotham-36 text-uppercase text-white">Sign In Account</h1>
                                <p className="text-white">Sign up now to get started with an account.</p>
                            </div>
                            <span className="c-pointer align-middle mt-4" onClick={handleLoginModalClose}><img src="/images/close-btn.svg" /></span>
                        </div>
                        <div className="modal-body">
                            <AlertNotifications error={errors} success={success} />
                            <Form onSubmit={handleLoginSubmit}>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="login-email" value={loginEmail} onChange={e => setLoginEmail(e.target.value)} />
                                    <label htmlFor="login-email">Email</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="login-password" value={loginPassword} onChange={e => setLoginPassword(e.target.value)} />
                                    <label htmlFor="login-password">Password</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
                                    <label className="form-check-label fs-gotham-400" htmlFor="flexCheckChecked">
                                        I have read and agree to the <span><a href="#" className="text-danger">Terms of Service</a></span>
                                    </label>
                                </div>
                                <div className="create_your_mt-5 w-100">
                                    <Button className="btn create_your_account w-100" disabled={isLoading} type="submit"> {isLoading ? <ButtonLoader /> : 'LOGIN'}</Button>
                                </div>
                                <div className="mt-3 text-center">
                                    <p>Don't have an account? <span><a href="#" onClick={handleRegisterModalShow} className="text-danger fs-gotham-600">Sign up</a></span></p>
                                </div>
                                <div className="text-center">
                                    <a href="#" className="text-danger fs-gotham-600" onClick={handleResetModalShow}><i className="fas fa-arrow-right" /> Forgot Password</a>
                                </div>
                            </Form>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal show={showResetModal}
                backdrop="static"
                keyboard={false}
                size="lg"
                centered>
                <Modal.Body className="p-0">
                    <div>
                        <div className="modal-header login-signup-box-bg">
                            <div className="text-center m-auto align-middle">
                                <h1 className="modal-title fs-5 fs-gotham-36 text-uppercase text-white">Forgot Password</h1>
                            </div>
                            <a className="align-middle mt-4" onClick={handleResetModalClose}><img src="images/close-btn.svg" /></a>
                        </div>
                        <div className="modal-body">
                        <AlertNotifications error={errors} success={success} />
                            <Form>
                                {!showReset && <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="#ame" onChange={(e) => setEmailReset(e.target.value)} />
                                    <label htmlFor="floatingInput">Email</label>
                                </div>}
                                {showReset ?
                                    <div className="create_your_mt-5 w-100">
                                        <div className="form-floating mb-3">
                                            <input type="number" className="form-control" id="floatingInput-otp" placeholder="#ame" onChange={(e) => setOtp(e.target.value)} />
                                            <label htmlFor="floatingInput">Enter OTP</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="password" className="form-control" id="floatingInput-password" placeholder="#ame" onChange={(e) => setNewPassword(e.target.value)} />
                                            <label htmlFor="floatingInput">Enter new Password</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="password" className="form-control" id="floatingInput-confirm" placeholder="#ame" onChange={(e) => setConfirmPassword(e.target.value)} />
                                            <label htmlFor="floatingInput">Confirm new Password</label>
                                        </div>
                                        <Button className="btn create_your_account w-100" onClick={handleResetEmail} >RESET PASSWORD</Button>
                                    </div>
                                    : <div className="create_your_mt-5 w-100">
                                        <Button className="btn create_your_account w-100" onClick={handleEmailReset}>Send Email Link</Button>
                                    </div>
                                }
                                <div className="mt-3 text-center">
                                    <p>Already have an account? <span><a href="#" onClick={handleLoginModalShow} className="text-danger fs-gotham-600">Sign In</a></span></p>
                                </div>
                            </Form>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}