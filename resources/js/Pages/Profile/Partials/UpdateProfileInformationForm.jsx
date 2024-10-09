import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, useForm, usePage } from "@inertiajs/react";
import { useState } from "react";
import { Transition } from "@headlessui/react";

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = "",
    profile,
}) {
    const user = usePage().props.auth.user;

    // State to handle the form data
    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
            gender: profile.gender,
            age: profile.age,
            weight: profile.weight,
            height: profile.height,
        });

    // State to display the current profile data
    const [profileData, setProfileData] = useState({
        name: user.name,
        email: user.email,
        gender: profile.gender,
        age: profile.age,
        weight: profile.weight,
        height: profile.height,
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route("profile.update"), {
            onSuccess: () => {
                setProfileData({ ...data });
            },
        });
    };

    return (
        <div className="flex items-center justify-center min-h-screen font-poppins">
            <div className="w-full max-w-2xl p-6 text-white rounded-xl">
                {/* Profile header (uses profileData to keep it unchanged during form editing) */}
                <div className="flex flex-col items-center p-6 text-black bg-[#B3A0FF] rounded-[18px]">
                    <div className="flex items-center justify-center w-24 h-24 mb-4 bg-white rounded-full">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="64"
                            height="64"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icon-tabler-user-circle"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                            <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                            <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white uppercase">
                        {profileData.name}
                    </h3>
                    <p className="text-sm font-light text-white">
                        {profileData.email}
                    </p>

                    {/* Info Cards */}
                    <div className="flex justify-between w-full px-4 py-4 mt-6 bg-[#896CFE] rounded-[18px] text-white">
                        <div className="flex-1 text-center border-r border-white">
                            <span className="block text-lg font-bold">
                                {profileData.weight} Kg
                            </span>
                            <p className="text-sm text-white">Weight</p>
                        </div>
                        <div className="flex-1 text-center border-r border-white">
                            <span className="block text-lg font-bold">
                                {profileData.age}
                            </span>
                            <p className="text-sm text-white">Years Old</p>
                        </div>
                        <div className="flex-1 text-center">
                            <span className="block text-lg font-bold">
                                {profileData.height} CM
                            </span>
                            <p className="text-sm text-white">Height</p>
                        </div>
                    </div>
                </div>

                {/* Form (uses data to edit and submit) */}
                <form
                    onSubmit={submit}
                    className="flex flex-col items-center mt-6 space-y-4 text-black"
                >
                    <div className="flex flex-col items-center">
                        <InputLabel htmlFor="name" value="Full name" />
                        <TextInput
                            id="name"
                            className="block w-full max-w-3xl px-12 py-3 mt-1 text-center"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            required
                            isFocused
                            autoComplete="name"
                        />
                        <InputError className="mt-2" message={errors.name} />
                    </div>

                    <div className="flex flex-col items-center">
                        <InputLabel htmlFor="email" value="Email" />
                        <TextInput
                            id="email"
                            type="email"
                            className="block w-full max-w-3xl px-12 py-3 mt-1 text-center"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            required
                            autoComplete="email"
                        />
                        <InputError className="mt-2" message={errors.email} />
                    </div>

                    <div className="flex flex-col items-center">
                        <InputLabel htmlFor="gender" value="Gender" />
                        <TextInput
                            id="gender"
                            className="block w-full max-w-3xl px-12 py-3 mt-1 text-center"
                            value={data.gender}
                            onChange={(e) => setData("gender", e.target.value)}
                            required
                        />
                        <InputError className="mt-2" message={errors.gender} />
                    </div>

                    <div className="flex flex-col items-center">
                        <InputLabel htmlFor="age" value="Age" />
                        <TextInput
                            id="age"
                            className="block w-full max-w-3xl px-12 py-3 mt-1 text-center"
                            value={data.age}
                            onChange={(e) => setData("age", e.target.value)}
                            required
                        />
                        <InputError className="mt-2" message={errors.age} />
                    </div>

                    <div className="flex flex-col items-center">
                        <InputLabel htmlFor="weight" value="Weight" />
                        <TextInput
                            id="weight"
                            className="block w-full max-w-3xl px-12 py-3 mt-1 text-center"
                            value={data.weight}
                            onChange={(e) => setData("weight", e.target.value)}
                            required
                        />
                        <InputError className="mt-2" message={errors.weight} />
                    </div>

                    <div className="flex flex-col items-center">
                        <InputLabel htmlFor="height" value="Height" />
                        <TextInput
                            id="height"
                            className="block w-full max-w-3xl px-12 py-3 mt-1 text-center"
                            value={data.height}
                            onChange={(e) => setData("height", e.target.value)}
                            required
                        />
                        <InputError className="mt-2" message={errors.height} />
                    </div>

                    <div className="flex justify-center mt-6">
                        <PrimaryButton className="mt-10" disabled={processing}>
                            Update Profile
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    );
}
