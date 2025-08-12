
import './Header.css';

const Header = () => {
    const date = new Date();
    const options = {
        year: 'numeric',
        month: '2-digit',//long으로 하면 08 대신 8로 표기
        day: 'numeric',
        weekday:'long', //short
    }
    const formattedDate = date.toLocaleDateString('ko-KR', options);

    return(
        <div className="Header">
            <h3>오늘은📆</h3>
            <h1>{formattedDate}</h1>
        </div>
    );
};
export default Header;