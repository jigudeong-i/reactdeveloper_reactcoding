// import { useSearchParams } from "react-router-dom";

import Button from "../component/Button"
import Header from "../component/Header"

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


import Editor from "../component/Editor";
const Home = () => {
    return(
        <div>
            <Editor
                onSubmit={()=>{
                    alert("작성 완료 버튼 클릭");
                }}/>
        </div>
    );
};
export default Home;


