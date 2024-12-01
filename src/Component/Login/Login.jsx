import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";
import { data } from "react-router-dom";

const Login = () => {
  const { loginuser } = useContext(AuthContext);

  const handlelogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;

    const passsword = form.passsword.value;
    const uesrlog = { email, passsword };
    console.log(uesrlog);
    loginuser(email, passsword)
      .then((result) => {
        console.log(result.user);
        alert("it succes");
        const lastSignInTime = result?.user?.metadata?.lastSignInTime;
        const loginInfo = {email ,lastSignInTime}

        fetch('http://localhost:5000/users',{
          method: "PATCH",
          headers :{
            'content-Type' : 'application/json'
          },
          body: JSON.stringify(loginInfo)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          
        })
      })
      .catch((error) => {
        console.log("ERROR", error.message);
      });
  };
  return (
    <div>
      <h1>This is login page</h1>
      <div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={handlelogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="passsword"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
