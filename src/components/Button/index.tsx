interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children?: React.ReactNode;
}
export default function Button({children, ...props}: ButtonProps) {
    return (
        <button {...props} className="btn btn-primary">
            {children}
        </button>
    );
}
