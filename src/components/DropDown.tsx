type DropDownProps = {
  label: React.ReactNode;
  children: React.ReactNode;
};
export default function DropDown({ label, children }: DropDownProps) {
  return (
    <div className="dropdown dropdown-end" onClick={(e) => e.stopPropagation()}>
      <div
        tabIndex={0}
        role="button"
        className="btn m-1 rounded-full p-1.5 size-7"
      >
        {label}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm"
      >
        {children}
      </ul>
    </div>
  );
}
