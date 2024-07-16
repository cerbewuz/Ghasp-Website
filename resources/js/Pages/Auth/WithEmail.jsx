import GuestLayout from "@/Layouts/GuestLayout";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Head, Link, useForm } from "@inertiajs/react";

import { useState } from "react";
export default function WithEmail() {
    const [password, setPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(false);
    return (
        <>
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
                                    <div className="card-body-item__input">
                                        <label
                                            className="label-item"
                                            htmlFor=""
                                        >
                                            Email
                                        </label>
                                        <input
                                            className="input-item"
                                            type="text"
                                        />
                                    </div>
                                    <div className="card-body-item__input input-flex">
                                        <div className="input-flex__item">
                                            <label
                                                className="label-item"
                                                htmlFor=""
                                            >
                                                First name
                                            </label>
                                            <input
                                                className="input-item"
                                                type="text"
                                            />
                                        </div>
                                        <div className="input-flex__item">
                                            <label
                                                className="label-item"
                                                htmlFor=""
                                            >
                                                Last name
                                            </label>
                                            <input
                                                className="input-item"
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                    <div className="card-body-item__input">
                                        <label
                                            className="label-item"
                                            htmlFor=""
                                        >
                                            Password
                                        </label>
                                        <input
                                            className="input-item input-password"
                                            type={
                                                password ? "text" : "password"
                                            }
                                        />
                                        <div
                                            className="password__icon"
                                            onClick={() =>
                                                setPassword(!password)
                                            }
                                        >
                                            {password ? (
                                                <VisibilityIcon
                                                    style={{ fontSize: 20 }}
                                                />
                                            ) : (
                                                <VisibilityOffIcon
                                                    style={{ fontSize: 20 }}
                                                />
                                            )}
                                        </div>
                                    </div>
                                    <div className="card-body-item__input">
                                        <label
                                            className="label-item"
                                            htmlFor=""
                                        >
                                            Confirm Password
                                        </label>
                                        <input
                                            className="input-item  input-password"
                                            type={
                                                confirmPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                        />
                                        <div
                                            className="password__icon"
                                            onClick={() =>
                                                setConfirmPassword(
                                                    !confirmPassword
                                                )
                                            }
                                        >
                                            {confirmPassword ? (
                                                <VisibilityIcon
                                                    style={{ fontSize: 20 }}
                                                />
                                            ) : (
                                                <VisibilityOffIcon
                                                    style={{ fontSize: 20 }}
                                                />
                                            )}
                                        </div>
                                    </div>
                                    <div className="card-body-item__button">
                                        <button className="card-body-item__button-item">
                                            Create an account
                                        </button>
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
                                        <Link>Terms and Conditions</Link>{" "}
                                        and&nbsp;
                                        <Link>Privacy Policy</Link>
                                    </span>
                                </div>
                                <div className="card-footer__links">
                                    <span className="card-footer__link">
                                        Help
                                    </span>
                                    <span className="card-footer__link">
                                        Privacy
                                    </span>
                                    <span className="card-footer__link">
                                        Terms
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </GuestLayout>
        </>
    );
}
