import { useParams } from "react-router-dom";

const Diary = ()=> {
    const{id} = useParams();
    
    // const params = useParams();
    // console.log(params);    
    
    return(
        <div>
            <div>{id}번 일기</div>
            <div>Diary 페이지</div>
        </div>
    );
};
export default Diary;