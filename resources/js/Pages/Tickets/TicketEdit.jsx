import InfoButton from "@/Components/Button/InfoButton";
import PrimaryButton from "@/Components/Button/PrimaryButton";
import WarningButton from "@/Components/Button/WarningButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function UserEdit({ auth, user }) {
    const { data, setData, put, processing, errors } = useForm({
        id: user.id || "",
        name: user.name || "",
        email: user.email || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        put(route("users.update", { user: data.id }));
    };

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
                        <h3 className="text-lg">Edit</h3>
                        <div className="flex space-x-1">
                            <Link href={route("users.index")}>
                                <InfoButton className="text-sm">
                                    List
                                </InfoButton>
                            </Link>
                            <Link href={route("users.show", { user: user.id })}>
                                <PrimaryButton className="text-sm">
                                    View
                                </PrimaryButton>
                            </Link>
                        </div>
                    </div>

                    <div className="bg-gray50 text-sm dark:bg-gray-700 p-4 rounded-lg shadow-md">
                        <form onSubmit={handleSubmit} action="#">
                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Name User"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                                {errors.name && (
                                    <span className="text-red-500">
                                        {errors.name}
                                    </span>
                                )}
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    E-Mail
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="E-Mail User"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                                {errors.email && (
                                    <span className="text-red-500">
                                        {errors.email}
                                    </span>
                                )}
                            </div>

                            <div className="flex justify-end">
                                <WarningButton
                                    type="submit"
                                    disabled={processing}
                                    className="text-sm"
                                >
                                    Save
                                </WarningButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
