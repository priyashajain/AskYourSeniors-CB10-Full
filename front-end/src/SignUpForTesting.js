import { Link } from "react-router-dom";

function SignUpForTesting() {
    const googleAuth = () => {
        window.open(
            `${process.env.REACT_APP_API_URL}/auth/google/callback`,
            "_self"
        );
    };
    return (
        <div>
            <button onClick={googleAuth}>
                <span>Sing up with Google</span>
            </button>
            <p>
                Already Have Account ? <Link to="/login">Log In</Link>
            </p>
        </div>
    );
}

export default SignUpForTesting;