/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();

  const handleGoogleSignIn = () => {
    googleLogin().then((data) => {
      if (data?.user?.email) {
        const userInfo = {
          email: data?.user?.email,
          name: data?.user?.displayName,
        };
        fetch("http://localhost:4000/user", {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(userInfo),
        })
          .then(res => res.json())
          .then(data => localStorage.setItem('token', data?.token))
      }

    });
  };

  return (
    <button onClick={handleGoogleSignIn} className="btn w-full">
      <div className="flex items-center gap-2">
        <p>Sign in with</p>  <FcGoogle size={24} />

      </div>
    </button>
  );
};

export default GoogleLogin;
