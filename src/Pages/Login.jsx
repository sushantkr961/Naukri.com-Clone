import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

function userLogin(state) {
  return fetch(`https://reqres.in/api/login`, {
    method: "POST",
    headers: { "Content-Type": "Application/json" },
    body: JSON.stringify(state),
  }).then((res) => res.json());
}

function Login() {
  const [count, setCount] = useState(false);
  const [state, setState] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const authState = useContext(AppContext);

  const onChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userLogin(state).then((res) => {
      authState.handleLogin(res.token);
      navigate("/");
    });
  };
  const dis = () => {
    setCount(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input
              name="email"
              value={state.email}
              onChange={onChange}
              type="email"
              placeholder="email"
            />
          </label>
        </div>
        <div>
          <label>
            <input
              name="password"
              value={state.password}
              onChange={onChange}
              type="password"
              placeholder="password"
            />
          </label>
        </div>
        <div>
          <button
            // toilet
            onClick={dis}
            disabled={count === true}
            type="submit"
          >
            SUBMIT
          </button>
        </div>
      </form>
      <div>
        <Link to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
}
export default Login;
