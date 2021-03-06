import Layout from "../../components/Layout";

const Login = () => (
  <Layout>
    <label for="userName"> User name </label>
    <input type="text" id="userName" name="userName"></input>
    <label for="password"> Password </label>
    <input type="password" id="password" name="password"></input>
    <button id="loginBtn" type='button' onClick='onLogin();'>Login</button>
  </Layout>
);
export default Login;
