import { loadGetInitialProps } from "next/dist/next-server/lib/utils";

const Login = (props) => (
  <div>
    <div className="mb-3 row">
      <label htmlFor="userName" className="col-sm-4 col-form-label">
        User Name
      </label>
      <div className="col-sm-8">
        <input type="text" className="form-control" id="userName" />
      </div>
    </div>
    <div className="mb-3 row">
      <label htmlFor="password" className="col-sm-4 col-form-label">
        Password
      </label>
      <div className="col-sm-8">
        <input type="password" className="form-control" id="password" />
      </div>
    </div>
    <div className="mb-3 row">
      <div className="col-sm-12 text-center">
        <input className="btn btn-primary" type="button" value="Sign In" onClick={() => props.onLogin()}/>
      </div>
    </div>
  </div>
);

export default Login;
