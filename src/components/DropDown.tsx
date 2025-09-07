type DropDownProps = {
  label: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  direction?: "dropdown-end" | string;
};
export default function DropDown({
  label,
  children,
  className,
  direction = "dropdown-end",
}: DropDownProps) {
  return (
    <div
      className={`dropdown ${direction}  ${className}`}
      onClick={(e) => e.stopPropagation()}
    >
      <div
        tabIndex={0}
        role="button"
        className={`btn m-1 rounded-full p-1.5 size-7 btn-ghost`}
      >
        {label}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box !w-48 z-1 p-2 shadow-sm border border-base-300"
      >
        {children}
      </ul>
    </div>
  );
}
