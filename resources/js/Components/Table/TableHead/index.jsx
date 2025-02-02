import React from "react";
import { FaRegIdCard } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { IoMdNotifications, IoMdText } from "react-icons/io";
import { BsCalendarDateFill } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";

export default function TableHead() {
    return (
        <thead className="bg-gray-100 max-w-2 cursor-pointer">
            <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-blue-600 hover:text-gray-700 tracking-wider hover:bg-gray-50 hover:rounded-lg">
                    <FaRegIdCard className="size-6" />
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-blue-600 hover:text-gray-700 tracking-wider hover:bg-gray-50 hover:rounded-lg">
                    <FaRegIdCard className="size-6" />
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-blue-600 hover:text-gray-700 tracking-wider hover:bg-gray-50 hover:rounded-lg">
                    <FaRegIdCard className="size-6" />
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-blue-600 hover:text-gray-700 tracking-wider hover:bg-gray-50 hover:rounded-lg">
                    <FaRegIdCard className="size-6" />
                </th>
                <th className="px-10 py-3 text-left text-sm font-medium text-blue-600 hover:text-gray-700 tracking-wider hover:bg-gray-50 hover:rounded-lg">
                    <FaStar className="size-6" />
                </th>
                <th className="px-20 py-3 text-left text-sm font-medium text-blue-600 hover:text-gray-700 tracking-wider hover:bg-gray-50 hover:rounded-lg">
                    <IoMdText className="size-6" />
                </th>
                <th className="px-14 py-3 text-left text-sm font-medium text-blue-600 hover:text-gray-700 tracking-wider hover:bg-gray-50 hover:rounded-lg">
                    <BsCalendarDateFill className="size-5" />
                </th>
                <th className="px-8 py-3 text-left text-sm font-medium text-blue-600 hover:text-gray-700 tracking-wider hover:bg-gray-50 hover:rounded-lg">
                    <IoMdNotifications className="size-6" />
                </th>
                <th className="flex px-6 py-3 text-center justify-center text-sm font-medium text-blue-600 hover:text-gray-700 tracking-wider hover:bg-gray-50 rounded-lg">
                    <FiSettings className="size-6" />
                </th>
            </tr>
        </thead>
    );
}
