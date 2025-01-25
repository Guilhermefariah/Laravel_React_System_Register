export default function DangerButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-2 py-1 bg-none border border-transparent rounded-md font-semibold text-xs text-red-600 hover:text-white uppercase tracking-widest hover:bg-red-700 transition ease-in-out duration-150               
        
                ${disabled && "opacity-25"}` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
