import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <div className="main-guest">
                <div className="main-guest__card">
                    <div className="main-guest__card-flex">
                        <div className="main-guest__card-head">
                            <h1 style={{ fontSize: 20 }}>Logo Here!</h1>
                        </div>
                        <div className="main-guest__card-body">
                            <div className="card-body__item top">
                                <h1 style={{ fontSize: 22 }}>
                                    Create a *app* account
                                </h1>
                            </div>
                            <div className="card-body__item content">
                                <div className="card-body-item__button">
                                    <Link
                                        href={route("withEmailGet")}
                                        className="card-body-item__button-item signup-to"
                                    >
                                        <div className="signup-to__item">
                                            <svg
                                                width="30"
                                                height="22"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                                                    stroke="#000000"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <rect
                                                    x="3"
                                                    y="5"
                                                    width="18"
                                                    height="14"
                                                    rx="2"
                                                    stroke="#000000"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                />
                                            </svg>
                                        </div>
                                        <span> Sign up with Email</span>
                                    </Link>
                                    <button className="card-body-item__button-item signup-to">
                                        <div className="signup-to__item">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                x="0px"
                                                y="0px"
                                                width="30"
                                                height="22"
                                                viewBox="0 0 48 48"
                                            >
                                                <linearGradient
                                                    id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"
                                                    x1="9.993"
                                                    x2="40.615"
                                                    y1="9.993"
                                                    y2="40.615"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop
                                                        offset="0"
                                                        stop-color="#2aa4f4"
                                                    ></stop>
                                                    <stop
                                                        offset="1"
                                                        stop-color="#007ad9"
                                                    ></stop>
                                                </linearGradient>
                                                <path
                                                    fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
                                                    d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                                                ></path>
                                                <path
                                                    fill="#fff"
                                                    d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <span> Sign up with Facebook</span>
                                    </button>
                                    <button className="card-body-item__button-item signup-to">
                                        <div className="signup-to__item">
                                            <svg
                                                width="18"
                                                height="20"
                                                viewBox="-0.5 0 48 48"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                            >
                                                <title>Google-color</title>
                                                <desc>
                                                    Created with Sketch.
                                                </desc>
                                                <defs></defs>
                                                <g
                                                    id="Icons"
                                                    stroke="none"
                                                    stroke-width="1"
                                                    fill="none"
                                                    fill-rule="evenodd"
                                                >
                                                    <g
                                                        id="Color-"
                                                        transform="translate(-401.000000, -860.000000)"
                                                    >
                                                        <g
                                                            id="Google"
                                                            transform="translate(401.000000, 860.000000)"
                                                        >
                                                            <path
                                                                d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                                                                id="Fill-1"
                                                                fill="#FBBC05"
                                                            ></path>
                                                            <path
                                                                d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                                                                id="Fill-2"
                                                                fill="#EB4335"
                                                            ></path>
                                                            <path
                                                                d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                                                                id="Fill-3"
                                                                fill="#34A853"
                                                            ></path>
                                                            <path
                                                                d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                                                                id="Fill-4"
                                                                fill="#4285F4"
                                                            ></path>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <span> Sign up with Google</span>
                                    </button>
                                </div>
                                <div className="card-body-item__divide">
                                    <span className="divide__or">or</span>
                                </div>

                                <div className="card-body-item__redirects sign-up-redirects">
                                    <span className="redirect-text">
                                        Already have an account?
                                    </span>
                                    <Link
                                        href={route("login")}
                                        className="redirect-link"
                                    >
                                        Sign in
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="main-guest__card-footer">
                            <div className="card-footer__remind">
                                <span>
                                    By proceeding, you agree to the&nbsp;
                                    <Link>Terms and Conditions</Link> and&nbsp;
                                    <Link>Privacy Policy</Link>
                                </span>
                            </div>
                            <div className="card-footer__links">
                                <span className="card-footer__link">Help</span>
                                <span className="card-footer__link">
                                    Privacy
                                </span>
                                <span className="card-footer__link">Terms</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form> */}
        </GuestLayout>
    );
}
