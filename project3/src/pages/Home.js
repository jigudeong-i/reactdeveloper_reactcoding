import { useSearchParams } from "react-router-dom";
import Button from "../component/Button"
import Header from "../component/Header"
import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";
import { getMonthRangeByDate } from "../util";
import DiaryList from "../component/DiaryList";

const Home = () => {
    const data = useContext(DiaryStateContext);
    const [filteredData, setFilteredData] = useState([]);
    const [pivotDate, setPivotDate] = useState(new Date());
    const headerTitle = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`;






    useEffect(() => {
        if (data.length >= 1) {
            const { beginTimeStamp, endTimeStamp } = getMonthRangeByDate(pivotDate);
            setFilteredData(
                data.filter(
                    (it) => beginTimeStamp <= it.date && it.date <= endTimeStamp
                )
            );
        } else {
            setFilteredData([]);
        }
    }, [data, pivotDate]);









    // <버튼, >버튼 
    const onIncreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
    };
    const onDecreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
    };
    return (
        <div>
            <Header
                title={headerTitle}
                leftChild={<Button text={"<"} onClick={onDecreaseMonth} />}
                rightChild={<Button text={">"} onClick={onIncreaseMonth} />}
            />
            <DiaryList data={filteredData}/>
        </div>
    );
};

export default Home;



// const Home = () => {
//     const[searchParmas, setSearchParams] = useSearchParams();
//     console.log(searchParmas.get("sort"))
//     return(
//         <div>Home 페이지</div>
//     );
// };
// export default Home;

// import Button from "../component/Button";
// const Home = () => {
//     return (
//         <div>
//             Home페이지<br/>
//             <Button 
//                 text={"버튼 텍스트"}
//                 onClick={()=>{
//                     alert("버튼 클릭");
//                 }}                
//             />

//             <Button
//                 type="positive"
//                 text={"긍정 버튼"}
//                 onClick={()=>{
//                     alert("positive 버튼");
//                 }}
//             />

//             <Button 
//                 type="negative"
//                 text={"부정 버튼"}
//                 onClick={()=>{
//                     alert("negative 버튼");
//                 }}
//             />
//         </div>
//     );
// };
// export default Home;



// const Home = () => {
//     return(
//         <div>
//             <Header
//                 title={"Home"}
//                 leftChild={
//                     <Button
//                         type="positive"
//                         text={"긍정 버튼"}
//                         onClick={()=>{
//                             alert("positive 버튼");
//                     }}
//                     />
//                 }
            
//                 rightChild={
//                     <Button
//                         type="negative"
//                         text={"부정 버튼"}
//                         onClick={() => {
//                             alert("negative버튼");
//                         }}
//                     />
//                 }
//             />
//         </div>
//     );
// };
// export default Home;


// import Editor from "../component/Editor";
// const Home = () => {
//     return(
//         <div>
//             <Editor
//                 initData={{
//                     date:new Date().getTime(),
//                     emotionId:1,
//                     content:"이전 일기",
//                 }}
//                 onSubmit={()=>{
//                     alert("작성 완료 버튼 클릭");
//                 }}/>
//         </div>
//     );
// };
// export default Home;