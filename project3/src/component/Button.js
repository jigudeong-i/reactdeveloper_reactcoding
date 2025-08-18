import './Button.css';

const Button = ({text, type='default', onClick}) => {
    const btnType = ["positive", "negative"].includes(type)? type:"default";  // 둘중 하나 타입 가져오는데 포함돼 있으면 타입, 아니면 디폴트 

    return(
        <button 
            className={["Button", `Button_${btnType}`].join(" ")}  // "" 사이를 띄는 이유. 이래야 버튼이랑 스타일 반환. 이래야 클래스 인식 가능 
            onClick={onClick}
        >
            {text}
        </button>
    );
};
export default Button;