import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

import BgLogin from "!assets/bg-login.png";
import { useAos } from "@/lib/hooks/useAos";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    useAos();
    return (
        <>
            <Head title="Log in" />
            <div className="relative flex items-center justify-end min-h-screen">
                <img
                    id="background"
                    className="absolute inset-0 z-0 object-cover w-full h-full"
                    src={BgLogin}
                    alt="Background"
                />

                <div className="relative z-10 w-full max-w-[60%] p-8 rounded-lg shadow-lg bg-[#232323] backdrop-blur-sm">
                    <div className="absolute text-center transform -translate-x-1/2 -top-60 left-1/2">
                        <p
                            data-aos="zoom-in"
                            data-aos-duration="1500"
                            className="text-3xl font-bold text-[#E2F163] mb-4 font-poppins"
                        >
                            Login
                        </p>
                        <p
                            data-aos="zoom-in"
                            data-aos-duration="1500"
                            className="text-6xl font-bold text-white mb-14 font-poppins"
                        >
                            Welcome
                        </p>
                        <p
                            data-aos="zoom-in"
                            data-aos-duration="1500"
                            className="text-sm text-gray-300 font-poppins"
                        >
                            Let’s personalize your health with HarusGerak
                        </p>
                    </div>

                    {/* Form */}
                    {status && (
                        <div className="mb-4 text-sm font-medium text-green-600">
                            {status}
                        </div>
                    )}

                    <form
                        onSubmit={submit}
                        className="flex flex-col items-center"
                    >
                        <div>
                            <InputLabel
                                htmlFor="email"
                                value="Username or Email "
                                className="text-white text-[18px] font-poppins"
                            />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="block w-[350px] h-[50px] mt-1 mx-auto rounded-full px-4 font-poppins text-[18px]"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel
                                htmlFor="password"
                                value="Password"
                                className="text-white text-[18px]"
                            />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="block w-[350px] h-[50px] mt-1 mx-auto rounded-full px-4"
                                autoComplete="current-password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className="block mt-4">
                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) =>
                                        setData("remember", e.target.checked)
                                    }
                                />
                                <span className="text-sm text-gray-600 ms-2">
                                    Remember me
                                </span>
                            </label>
                        </div>

                        <div className="flex items-end justify-end mt-4">
                            {canResetPassword && (
                                <Link
                                    href={route("password.request")}
                                    className="text-sm text-white rounded-md hover:underline hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Forgot your password?
                                </Link>
                            )}
                        </div>
                    </form>
                    <div className="absolute text-center transform -translate-x-1/2 left-1/2">
                        <div
                            data-aos="zoom-in-down"
                            data-aos-duration="1500"
                            className="text-3xl text-[#E2F163] mt-20"
                        >
                            <PrimaryButton
                                className="font-extrabold text-[20px] ms-4 font-poppins"
                                disabled={processing}
                            >
                                Log In
                            </PrimaryButton>
                        </div>
                        <p
                            data-aos="fade-up"
                            data-aos-duration="1500"
                            className="mt-24 font-light text-white text-md font-poppins"
                        >
                            Don't have an account?{" "}
                            <Link
                                href={route("register")}
                                className="text-[#E2F163] hover:text-white hover:underline"
                            >
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
