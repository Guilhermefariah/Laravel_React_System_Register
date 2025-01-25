export default function SuccessButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-2 py-1 bg-none border border-transparent rounded-md font-semibold text-xs text-green-600 hover:text-white uppercase tracking-widest hover:bg-green-700 transition ease-in-out duration-150 
                  
                ${disabled && "opacity-25"}` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
