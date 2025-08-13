import { useState } from "react";
import NoticeList from "./NoticeList";

const NoticeMain = () => {
    const noticeArray=[
        {
            title:"공지사항1",
            authority:1,
            writer:"jamie", 
        },
        {
            title:"공지사항2",
            authority:2,
            writer:"ellie",
        },
        {
            title:"공지사항3",
            authority:3,
            writer:"belly",
        },
    ];
    
    const [record, setRecord]=useState(noticeArray)
   
    return (
        <>
            <NoticeList record={record} />
        </>
    );
}
export default NoticeMain;

