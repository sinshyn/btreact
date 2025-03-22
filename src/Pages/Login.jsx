import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";

function Login() {
  const [input, setInput] = useState({ user: {}, btnLogin: false });
  const [data, setData] = useState({ user: {}, isLoading: false });

  const navigate = useNavigate();

  const getInput = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      user: { ...input.user, [name]: value },
      btnLogin: false,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    setInput({ ...input, btnLogin: true });
  };

  useEffect(() => {
    if (!input.btnLogin) return;

    const loginUser = async () => {
      setData({ ...data, isLoading: true });

      try {
        const response = await axios.post("https://dummyjson.com/user/login", {
          username: input.user.un,
          password: input.user.pw,
          expiresInMin: 30,
        });

        setData({ user: response.data, isLoading: false });
        toast.success("Đăng nhập thành công!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
        });
        alert("Đăng nhập thành công!");
        navigate("/");
      } catch (error) {
        setData({ ...data, isLoading: false });
        setInput({ user: {}, btnLogin: false });
        toast.error("Đăng nhập thất bại!", {
          position: "top-center",
          autoClose: 3000,
        });
        alert("Đăng nhập thất bại!!");
        console.error(error);
      }
    };

    loginUser();
  }, [input.btnLogin, input.user.un, input.user.pw, navigate]);

  if (data.isLoading) {
    return <div>Đang đăng nhập...</div>;
  }

  return (
    <div className="login-container">
      <h2>ĐĂNG NHẬP</h2>
      <form onSubmit={submitForm}>
        <div className="input-group">
          <label htmlFor="username">Tên tài khoản</label>
          <input type="text" id="username" name="un" onChange={getInput} required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Mật khẩu</label>
          <input type="password" id="password" name="pw" onChange={getInput} required />
        </div>
        <button type="submit" disabled={data.isLoading}>
          Đăng nhập
        </button>
        <p className="signup-link">
          Bạn không có tài khoản? <a href="/signup">Đăng ký</a>
        </p>
      </form>

      {/* Container để hiển thị thông báo */}
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={true} />
    </div>
  );
}

export default Login;
