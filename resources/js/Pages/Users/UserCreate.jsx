import { Pagination } from "@/Components/Pagination";
import PrimaryButton from "@/Components/Button/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function UserCreate({ auth, users }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Users
                </h2>
            }
        >
            <Head title="users" />

            <div className="py-4 max-w-7xl max-auto sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg dark:bg-gray-800">
                    <div className="flex justify-between items-center m-4 text-white">
                        <h3 className="text-lg">Register</h3>
                        <div className="flex space-x-4">
                            <Link href={route("users.index")}>
                                <PrimaryButton className="text-sm">
                                    List
                                </PrimaryButton>
                            </Link>
                        </div>
                    </div>

                    <div className="bg-gray50 text-sm dark:bg-gray-700 p-4 rounded-lg shadow-md">
                        #
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
