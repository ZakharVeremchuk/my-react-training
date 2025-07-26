export const Button = ({variant, children}) => {
    return <button className={clsx("button", variant)}>{children}</button>
}