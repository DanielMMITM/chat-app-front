import '@/features/auth/login/login.css';

export const SignUpForm = () => {
  return (
    <>
      <h1 className="heading-text">SignUp</h1>
      <form className="form-container">
        <div className="form-container-input">
          <label>Name</label>
          <input type="text" className="border-radius-xs" />
        </div>
        <div className="form-container-input">
          <label>Email</label>
          <input type="text" className="border-radius-xs" />
        </div>
        <div className="form-container-input">
          <label>Phone number</label>
          <input type="text" className="border-radius-xs" />
        </div>
        <div className="form-container-input">
          <label>Password</label>
          <input type="password" className="border-radius-xs" />
        </div>
        <div className="form-container-input">
          <label>Confirm password</label>
          <input type="password" className="border-radius-xs" />
        </div>
        <button
          className="form-container-button border-radius-xs"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
};
