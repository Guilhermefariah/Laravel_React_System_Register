import PrimaryButton from "@/Components/Button/PrimaryButton";
import SuccessButton from "@/Components/Button/SuccessButton";
import WarningButton from "@/Components/Button/WarningButton";
import { AlertMessage } from "@/Components/Delete/AlertMessage/AlertMessage";
import { ConfirmDelete } from "@/Components/Delete/ConfirmDelete";
import { Pagination } from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";

export default function UserIndex({ auth, users }) {
    const { flash } = usePage().props;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Dashboard
                </h2>
            }
        >

            <Head title="users" />
            <div className="py-4 max-w-7xl max-auto sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg dark:bg-gray-800">
                    <div className="flex justify-between items-center m-4 text-white">
                        <h3 className="text-lg">List</h3>
                        <div className="flex space-x-4">
                            <Link href={route("users.create")}>
                                <SuccessButton className="text-sm">
                                    Register
                                </SuccessButton>
                            </Link>
                        </div>
                    </div>
                    <AlertMessage message={flash} />

                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-200 tracking-wider">
                                    ID
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-200 tracking-wider">
                                    Name
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-200 tracking-wider">
                                    E-Mail
                                </th>
                                <th className="px-6 py-3 text-center text-sm font-medium text-gray-200 tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                            {users.data.map((user) => (
                                <tr key={user.id}>
                                    <td className="px-6 py-2 text-sm text-gray-200 tracking-wider">
                                        {user.id}
                                    </td>
                                    <td className="px-6 py-2 text-sm text-gray-200 tracking-wider">
                                        {user.name}
                                    </td>
                                    <td className="px-6 py-2 text-sm text-gray-200 tracking-wider">
                                        {user.email}
                                    </td>
                                    <td className="px-6 py-2 text-sm text-gray-200 tracking-wider text-center">
                                        <Link
                                            href={route("users.show", {
                                                id: user.id,
                                            })}
                                        >
                                            <PrimaryButton className="ms-1">
                                                View
                                            </PrimaryButton>
                                        </Link>

                                        <Link
                                            href={route("users.edit", {
                                                id: user.id,
                                            })}
                                        >
                                            <WarningButton className="ms-1">
                                                Edit
                                            </WarningButton>
                                        </Link>
                                        <ConfirmDelete
                                            id={user.id}
                                            routeName="users.destroy"
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagination
                        links={users.links}
                        currentPage={users.current_page}
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
