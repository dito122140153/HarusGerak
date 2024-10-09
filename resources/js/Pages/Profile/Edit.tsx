import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head } from "@inertiajs/react";


interface UserResponse {}

export default function Edit({ auth, mustVerifyEmail, status, response }) {
    const UserData: UserResponse = response;

    console.log(response);

    return (
        <AuthenticatedLayout
            user={auth.user}
            // header={
            //     <h2 className="text-xl font-semibold leading-tight text-gray-800">
            //         Profile
            //     </h2>
            // }
        >
            <Head title="Profile" />

            <div className="py-12">
                <div className="mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8">
                    <div className="absolute top-5 left-5">
                        <a href="/dashboard" target="blank">
                            <button className="text-[#E2F163] font-semibold">
                                &lt; Back
                            </button>
                        </a>
                    </div>
                    <div className="p-4 sm:p-8 sm:rounded-lg">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            profile={response}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="p-4 shadow bg-[#B3A0FF] sm:p-8 sm:rounded-[18px]">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="p-4 bg-[#B3A0FF] shadow sm:p-8 sm:rounded-[18px]">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
