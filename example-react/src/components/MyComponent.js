
// [요구사항]
// 이름, 나이, 이메일, 좋아하는 숫자, 좋아하는 명언, 취미(2개이상) 속성으로 갖는 MyComponent를 생성하여 
// 데이터를 출력해 주세요. 약간의 스타일을 부여해 주세요. 

const MyComponent = (props) => {
    console.log(props);
    const {name, age, email, quote, hobby} = props;
    return(
        <div>
        <h2>{name}님은</h2>
        <h2>{age}살이고</h2>
        <h2>{email}로 연락하세요.</h2>
        <h2>좋아하는 명언 : {quote}</h2>
        <h2>취미</h2>
        
        {hobby.map((hobby, index) => (
            <li key = {index}>{hobby}</li>
        ))}
        </div>
    );
}
export default MyComponent