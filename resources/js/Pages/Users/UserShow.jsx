import { Pagination } from "@/Components/Pagination";
import PrimaryButton from "@/Components/Button/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";

export default function UserShow({ auth, user }) {
    const { flash } = usePage().props;

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
                        <h3 className="text-lg">View</h3>
                        <div className="flex space-x-4">
                            <Link href={route("users.index")}>
                                <PrimaryButton className="text-sm">
                                    List
                                </PrimaryButton>
                            </Link>
                        </div>
                    </div>

                    {flash.success && (
                        <div className="p-4 m-4 text-sm text-green-800 rounded-lg bg-white dark:bg-green-800 dark:text-green-400">
                            {flash.success}
                        </div>
                    )}
                    <div className="bg-white text-sm dark:bg-gray-800 p-4 shadow-md">
                        <div className="mb-4">
                            <p className="text-md font-semibold text-gray-400 dark:text-gray-200">
                                ID
                            </p>
                            <p className="text-gray-600 dark:text-gray-400">
                                {user.id}
                            </p>
                        </div>
                        <div className="mb-4">
                            <p className="text-md font-semibold text-gray-400 dark:text-gray-200">
                                Name
                            </p>
                            <p className="text-gray-600 dark:text-gray-400">
                                {user.name}
                            </p>
                        </div>
                        <div className="mb-4">
                            <p className="text-md font-semibold text-gray-400 dark:text-gray-200">
                                Email
                            </p>
                            <p className="text-gray-600 dark:text-gray-400">
                                {user.email}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
