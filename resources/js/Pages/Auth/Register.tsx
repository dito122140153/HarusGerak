import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

import BgLogin from "!assets/bg-login.png";
import { useAos } from "@/lib/hooks/useAos";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    useAos();
    return (
        <>
            <Head title="Register" />
            <div className="relative flex items-center justify-end min-h-screen">
                {/* Background image */}
                <img
                    id="background"
                    className="absolute inset-0 z-0 object-cover w-full h-full"
                    src={BgLogin}
                    alt="Background"
                />

                {/* Container form dan teks di atasnya */}
                <div className="relative z-10 w-full max-w-[60%] p-9 rounded-lg shadow-lg bg-[#232323] backdrop-blur-sm mb-10">
                    {/* Tulisan tepat di atas form */}
                    <div className="absolute text-center transform -translate-x-1/2 -top-60 left-1/2">
                        <p
                            data-aos="fade-down"
                            data-aos-duration="1500"
                            className="text-3xl font-bold text-[#E2F163] mt-6 font-poppins"
                        >
                            Create Account
                        </p>
                        <p
                            data-aos="fade-down"
                            data-aos-duration="1500"
                            className="text-2xl font-bold text-white mt-14 font-poppins"
                        >
                            Let's Start!
                        </p>
                    </div>

                    {/* Form */}
                    <form
                        onSubmit={submit}
                        className="flex flex-col items-center"
                    >
                        <div>
                            <InputLabel
                                htmlFor="name"
                                value="Name"
                                className="text-white text-[18px] font-poppins"
                            />
                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="block w-[350px] h-[50px] mt-1 mx-auto rounded-full px-4 font-poppins text-[18px]"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel
                                htmlFor="email"
                                value="Email"
                                className="text-white text-[18px] font-poppins"
                            />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="block w-[350px] h-[50px] mt-1 mx-auto rounded-full px-4 font-poppins text-[18px]"
                                autoComplete="username"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                required
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
                                className="text-white text-[18px] font-poppins"
                            />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="block w-[350px] h-[50px] mt-1 mx-auto rounded-full px-4"
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel
                                htmlFor="password_confirmation"
                                value="Confirm Password"
                                className="text-white text-[18px] font-poppins"
                            />
                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="block w-[350px] h-[50px] mt-1 mx-auto rounded-full px-4"
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value
                                    )
                                }
                                required
                            />
                            <InputError
                                message={errors.password_confirmation}
                                className="mt-2"
                            />
                        </div>

                        <div className="absolute text-center transform -translate-x-1/2 left-1/2">
                            <div
                                data-aos="fade-down"
                                data-aos-duration="1500"
                                className="text-3xl text-[#E2F163] mt-96"
                            >
                                <PrimaryButton
                                    className="font-extrabold text-[20px] ms-4 mt-10 font-poppins"
                                    disabled={processing}
                                >
                                    Sign Up
                                </PrimaryButton>
                            </div>
                            <p
                                data-aos="zoom-in-down"
                                data-aos-duration="1500"
                                className="mt-16 font-light text-white text-md font-poppins"
                            >
                                Already have an account?{" "}
                                <Link
                                    href={route("login")}
                                    className="text-[#E2F163] hover:text-white hover:underline"
                                >
                                    Log In
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
