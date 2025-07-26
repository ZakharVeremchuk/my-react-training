import css from "./Alert.module.css";
import clsx from "clsx";

console.log(css)

export const Alert3 = ({ variant, outlined, elevated, children }) => {
  return (
    <p
       className={clsx(
        css[variant],
        outlined && css.isOutlined,
        elevated && css.isElevated
      )}
    >
      {children}
    </p>
  );
};
