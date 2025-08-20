import { useNavigate, useParams } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import Button from "../component/Button";
import Header from "../component/Header";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

const Edit = () => {
    const {id} = useParams();
    const data = useDiary(id);
    const navigate = useNavigate();
    const {onDelete} = useContext(DiaryDispatchContext);

    const goBack=() => {
        navigate(-1)
    }

    const onClickDelete = () => {
        if(window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")){
            onDelete(id);
            navigate("/",{replace:true});
        }
    };

    if(!data){
        return<div>일기를 읽어오는 중...</div>
    }else{
        return (
            <div>
                <Header
                    title={"일기 수정하기"}
                    leftChild={
                        <Button 
                        text={"<뒤로 가기"} 
                        onClick={goBack}
                    />
                    }
                    rightChild={
                        <Button 
                        type={"negative"} 
                        text={"삭제하기"}
                        onClick={onClickDelete}
                    />
                    }
                />
            </div>
        );
    };
};
export default Edit;