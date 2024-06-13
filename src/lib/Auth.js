import axios from "axios";

const AUTH_HOST = "https://moneyfulpublicpolicy.co.kr"; //이거 호출이 401이 뜨는데 내일 튜터님 한테 여쭤보기
//회원가입
export const register = async ({ id, password, nickname }) => {
  try {
    const response = await axios.post(`${AUTH_HOST}/register`, {
      id,
      password,
      nickname,
    });
    return response.data;
  } catch (error) {
    console.log(error?.response?.data?.message);
    alert(error?.response?.data?.message);
  }
};
//로그인
export const login = async ({ id, password }) => {
  try {
    const response = await axios.post(`${AUTH_HOST}/login`, {
      id,
      password,
    });
    localStorage.setItem("accessToken", response.data.accessToken);
    return response.data;
  } catch (error) {
    console.log(error?.response?.data?.message);
    alert(error?.response?.data?.message);
  }
};

//
export const getUserInfo = async () => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    try {
      const response = await axios.get(`${AUTH_HOST}/user`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error?.response?.data?.message);
      alert(error?.response?.data?.message);
    }
  }
};

export const updateProfile = async (formData) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    try {
      const response = await axios.patch(`${AUTH_HOST}/profile`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error?.response?.data?.message);
      alert(error?.response?.data?.message);
    }
  }
};
