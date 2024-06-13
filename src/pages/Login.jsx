import { useState } from "react";
import styled from "styled-components";
import { login } from "../lib/Auth";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const trimId = id.trim();
    const trimPassword = password.trim();
    const { userId, nickname, avatar } = await login({
      id: id,
      password: password,
    });

    setUser({ userId, nickname, avatar });

    if (trimId.length < 4 || id.length > 10) {
      alert("아이디의 글자는 4글자 이상 10글자 이하로 만들어주세요~");
      return;
    }
    //비밀번호 유효성 검사
    if (trimPassword.length < 4 || password.length > 15) {
      alert("비밀번호는 4글자 이상 15글자 이하로 만들어주세요~");
      return;
    }
    alert("로그인이 완료되었습니다 ^^d");
    navigate("/");
  };

  return (
    <StRegisterBox>
      <StLabelBox htmlFor="id">
        로그인 아이디
        <StRegisterInput
          type="text"
          placeholder="아이디"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </StLabelBox>

      <StLabelBox htmlFor="password">
        비밀번호
        <StRegisterInput
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </StLabelBox>

      <StLoginButton onClick={handleLogin}>로그인</StLoginButton>
      <StBackButton onClick={() => navigate("/Register")}>
        돌아가기
      </StBackButton>
    </StRegisterBox>
  );
};

export default Login;

export const StLabelBox = styled.label`
  font-weight: bold;
`;

export const StRegisterBox = styled.div`
  background-color: pink;
  height: 300px;
  margin: 100px 150px 150px 350px;
  border-radius: 10px;
  width: 500px;
  padding: inherit;
`;

export const StRegisterInput = styled.input`
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  padding: 10px 300px 10px 10px;
  border: none;
  margin: 10px;
`;

export const StLoginButton = styled.button`
  margin: 0 auto;
  margin-top: 10px;
  padding: 5px 100px 5px 115px;
  border-radius: 7px;
  border: none;
  cursor: pointer;
`;

export const StBackButton = styled.button`
  margin: 10px;
  padding: 5px 100px 5px 100px;
  border-radius: 7px;
  border: none;
  background-color: #c0c0c0;
  cursor: pointer;
`;
