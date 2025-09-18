import axios from "axios";

// 서버 주소
export const API_SERVER_HOST = "http://localhost:8080";
// http://localhost:8080/api/todo/${tno}
// 기본 매핑
const prefix = `${API_SERVER_HOST}/api/todo`;

export const getOne = async(tno) => {
    // HTTP GET 요청을 보내고 응답을 기다림
    const response = await axios.get(`${prefix}/${tno}`);
    // 성공적으로 응답을 받으면 데이터를 반환
    return response.data;
};

export const getList = async(pageParam) => {
    const {page, size} = pageParam;
    const response = await axios.get(
        `${prefix}/list`,
        {params: {page:page, size:size}}
    );
    return response.data;
};

export const postAdd = async (todoObject) => {
    const response = await axios.post(`${prefix}/` , todoObject)
    return response.data
};

export const deleteOne = async(tno) => {
    const response = await axios.delete(`${prefix}/${tno}`);
    return response.data;
};

export const putOne = async(todo) => {
    const response = await axios.put(`${prefix}/${todo.tno}`, todo);
    return response.data;
}