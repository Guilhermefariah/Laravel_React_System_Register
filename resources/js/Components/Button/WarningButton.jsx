import { FaEdit } from "react-icons/fa";

export default function WarningButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-2 py-1 bg-none border border-transparent rounded-md font-semibold text-xs text-blue-600 hover:text-white uppercase tracking-widest hover:bg-blue-700 transition ease-in-out duration-150 

                
                ${disabled && "opacity-25"}` + className
            }
            disabled={disabled}
        >
            <FaEdit className="size-6" />
            {children}
        </button>
    );
}
