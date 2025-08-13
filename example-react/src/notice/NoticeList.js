
import Notice from "./Notice";

const NoticeList = ({record})=>{
    return(
        <div className="notice-list">
            <div className="text-center">
                <h2>공지 게시판</h2>
            </div>
            <div className="list-wrapper">
                {record.map((notice, index) => (
                    <Notice key={index}{...notice}/>  //<Notice />라는 태그
                ))}
            </div>
        </div>
    );
};
export default NoticeList;