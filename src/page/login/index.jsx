import { useNavigate } from "react-router-dom";
import LayoutLogin from "../../components/layout/layout-login";

const LoginPage = () => {
  const navigate = useNavigate();

  const onClickToJoin = () => {
    navigate("/join");
  };
  return <LayoutLogin />;
};

export default LoginPage;
