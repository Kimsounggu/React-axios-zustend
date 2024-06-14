import axios from "axios";

const JSON_SERVER_HOST = "https://abyssinian-watery-angolatitan.glitch.me/";

export const getExpenses = async () => {
  try {
    const response = await axios.get(`${JSON_SERVER_HOST}/expenses`);
    return response.data;
  } catch (error) {
    console.log(error);
    alert("띠용띠용 getExpenses에서 에러가 발생했습니다 ");
  }
};

export const getExpense = async ({ queryKey }) => {
  try {
    const response = await axios.get(
      `${JSON_SERVER_HOST}/expenses/${queryKey[1]}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    alert("띠용띠용 getExpense에서 에러가 발생했습니다 ");
  }
};

export const postExpense = async (newExpense) => {
  try {
    const { data } = await axios.post(
      `${JSON_SERVER_HOST}/expenses`,
      newExpense
    );
    return data;
  } catch (error) {
    console.log(error);
    alert("삐용삐용 오류발생 오류발생 즉시 해결하도록.");
  }
};

export const putExpense = async (updatedExpense) => {
  const { id, ...rest } = updatedExpense;
  try {
    const { data } = await axios.put(
      `${JSON_SERVER_HOST}/expenses/${id}`,
      rest
    );
    return data;
  } catch (error) {
    console.log(error);
    alert("삐용삐용 오류발생 오류발생 수정이 안된다 즉시 해결하도록.");
  }
};

export const deleteExpense = async (id) => {
  try {
    const { data } = await axios.delete(`${JSON_SERVER_HOST}/expenses/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    alert("삐용삐용 오류발생 오류발생 삭제가 안된다 즉시 해결하도록.");
  }
};
