
const Notice = ({title, authority, writer}) => {
    return(
        <div className="notice-item">
            <div className="title">{title}</div>
            <div>{authority}</div>
            <div className="date">{writer}</div>
        </div>
    )
};
export default Notice;
