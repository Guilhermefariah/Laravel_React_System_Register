import React from "react";
import { FaUser, FaPhone, FaEnvelope, FaRegIdCard, FaStar } from "react-icons/fa";
import { IoMdImage, IoMdNotifications, IoMdText } from "react-icons/io";
import { BsCalendarDateFill } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";

export default function TableHead() {
    return (
        <thead className="bg-gray-200 text-gray-400 text-sm">
            <tr>
                <th className="px-4 py-3 text-left">
                    <FaRegIdCard className="size-5 mx-auto text-blue-600 transition-transform duration-200 hover:scale-110 hover:text-yellow-400" />
                </th>
                <th className="px-4 py-3 text-left">
                    <FaUser className="size-5 mx-auto text-blue-600 transition-transform duration-200 hover:scale-110 hover:text-yellow-400" />
                </th>
                <th className="px-4 py-3 text-left">
                    <FaPhone className="size-5 mx-auto text-blue-600 transition-transform duration-200 hover:scale-110 hover:text-yellow-400" />
                </th>
                <th className="px-4 py-3 text-left">
                    <FaEnvelope className="size-5 mx-auto text-blue-600 transition-transform duration-200 hover:scale-110 hover:text-yellow-400" />
                </th>
                <th className="px-4 py-3 text-left">
                    <IoMdNotifications className="size-5 mx-auto text-blue-600 transition-transform duration-200 hover:scale-110 hover:text-yellow-400" />
                </th>
                <th className="px-4 py-3 text-left">
                    <FaStar className="size-5 mx-auto text-blue-600 transition-transform duration-200 hover:scale-110 hover:text-yellow-400" />
                </th>
                <th className="px-4 py-3 text-left">
                    <IoMdImage className="size-5 mx-auto text-blue-600 transition-transform duration-200 hover:scale-110 hover:text-yellow-400" />
                </th>
                <th className="px-4 py-3 text-left">
                    <IoMdText className="size-5 mx-auto text-blue-600 transition-transform duration-200 hover:scale-110 hover:text-yellow-400" />
                </th>
                <th className="px-4 py-3 text-left">
                    <BsCalendarDateFill className="size-5 mx-auto text-blue-600 transition-transform duration-200 hover:scale-110 hover:text-yellow-400" />
                </th>
                <th className="px-4 py-3 text-left">
                    <FiSettings className="size-5 mx-auto text-gray-600 transition-transform duration-200 hover:scale-110 hover:text-gray-400" />
                </th>
            </tr>
        </thead>
    );
}
