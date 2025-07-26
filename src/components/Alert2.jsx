import clsx from "clsx";
import "./Alert.css"

const className = clsx (
    "first",
    10,
    undefined && "second",
    true && "third",
    false ? "fourh": "fifth"
);

console.log(className)

export const Alert2 = ({variant, outlined, elevated, children}) => {
    return (
        <p
            className={clsx("alert", variant, outlined && "is-outlined", elevated && "is-elevated")}>
            {children}
        </p>
    )
}