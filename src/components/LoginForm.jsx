import { useId } from "react";

const LoginForm = ({ onLogin }) => {
    const loginId = useId();
    const passwordId = useId();

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const form = evt.target;
        const { login, password } = form.elements;

        console.log(login, password);
        console.log(login.value, password.value);
        console.log(evt);

        onLogin({
            login: login.value,
            password: password.value
        })

        form.reset() // reset form fields
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="{loginId}">Login</label>
            <input type="text" name="login" id={loginId}/>

            <label htmlFor="{passwordId}">Password</label>
            <input type="password" name="password" id={passwordId} />
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm;