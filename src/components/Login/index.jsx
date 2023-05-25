import { Avatar, Button, Card, Space } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import GoogleIcon from "../../assets/icons/search.png";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../FirebaseConfig";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleGoogleSingIn = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        const user = res.user;
        localStorage.setItem("token", JSON.stringify(user.accessToken));
        return navigate("/");
      })
      .catch((err) => console.log(err));
  };

  if (localStorage.getItem("token")) {
    return navigate("/");
  }
  return (
    <div
      className="container d-flex align-items-center justify-content-center h-full"
      style={{ height: "100vh" }}
    >
      <Card
        style={{
          width: 400,
        }}
        actions={[
          <Space
            direction="vertical"
            style={{
              width: "92%",
            }}
          >
            <Button onClick={handleGoogleSingIn} type="primary" block>
              Sign in
            </Button>
          </Space>,
        ]}
      >
        <Meta
          avatar={<Avatar src={GoogleIcon} />}
          title="Google Auth"
          description="Sign in with your Google Account"
        />
      </Card>
    </div>
  );
};

export default Login;
