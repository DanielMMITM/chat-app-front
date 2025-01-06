import '@/features/auth/login/login.css';

export const LoginForm = () => {
  return (
    <>
      <h1 className="login__heading-text">Login</h1>
      <form className="login__form-container">
        <div className="login__form-container-input">
          <label>Email</label>
          <input type="text" className="border-radius-xs" />
        </div>
        <div className="login__form-container-input">
          <label>Password</label>
          <input type="password" className="border-radius-xs" />
        </div>
        <button
          className="login__form-container-button border-radius-xs"
          type="submit"
        >
          Submit
        </button>
      </form>
      <section className="login__oauth">
        <h4 className="login__oauth--title">or</h4>
        <div>GOOGLE</div>
      </section>
    </>
  );
};
