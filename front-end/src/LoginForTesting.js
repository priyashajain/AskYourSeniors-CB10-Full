import { Link } from "react-router-dom";

function LoginForTesting() {
    const googleAuth = () => {
        window.open(
            `${process.env.REACT_APP_API_URL}/auth/google/callback`,
            "_self"
        );
    };
    return (
        <div>

            <button onClick={googleAuth}>
                <span>Sign in with Google</span>
            </button>
            <p>
                New Here ? <Link to="/signup">Sing Up</Link>
            </p>
        </div>

    );
}

export default LoginForTesting;