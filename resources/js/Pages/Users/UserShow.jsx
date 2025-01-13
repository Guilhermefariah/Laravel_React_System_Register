import { Pagination } from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function UserShow({ auth, users }) {
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
                                        Actions
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
