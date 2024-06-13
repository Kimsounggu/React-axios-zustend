import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { register } from "../lib/Auth";

const Register = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    const trimId = id.trim();
    const trimPassword = password.trim();
    const trimNickname = nickname.trim();

    //아이디 유효성 검사
    if (trimId.length < 4 || id.length > 10) {
      alert("아이디의 글자는 4글자 이상 10글자 이하로 만들어주세요~");
      return;
    }
    //비밀번호 유효성 검사
    if (trimPassword.length < 4 || password.length > 15) {
      alert("비밀번호는 4글자 이상 15글자 이하로 만들어주세요~");
      return;
    }
    //닉네임 유효성 검사
    if (trimNickname.length < 1 || nickname.length > 10) {
      alert("닉네임은 1글자 이상 10글자 이하로 만들어주세요~");
      return;
    }

    const response = await register({
      id: id,
      password: password,
      nickname: nickname,
    });

    if (response) {
      confirm(
        "회원가입이 정상적으로 완료되었습니다. 로그인 창으로 이동합니다."
      );
      navigate("/Login");
    }
  };

  return (
    <StRegisterBox>
      <StLabelBox htmlFor="id">
        회원가입 아이디
        <StRegisterInput
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="아이디"
        />
      </StLabelBox>
      <StLabelBox htmlFor="password">
        비밀번호
        <StRegisterInput
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
        />
      </StLabelBox>
      <StLabelBox htmlFor="nickname">
        닉네임
        <StRegisterInput
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="닉네임"
        />
      </StLabelBox>
      <StRegisterButton onClick={handleRegister}>회원가입</StRegisterButton>
      <StBackButton onClick={() => navigate("/Login")}>돌아가기</StBackButton>
    </StRegisterBox>
  );
};

export default Register;

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

export const StRegisterButton = styled.button`
  margin: 0 auto;
  margin-top: 10px;
  padding: 5px 100px 5px 100px;
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
