export default function InputLabel({
    value,
    className = "",
    children,
    ...props
}) {
    return (
        <label
            {...props}
            className={`block font-medium text-md text-[#896CFE] ` + className}
        >
            {value ? value : children}
        </label>
    );
}
