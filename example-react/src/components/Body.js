
const chanung = () => {
    
    const Body = () => {
        
        const name = "박지원"
        const address = "서울시 장안동"
        const pn = "01023123123"
        
        return(
            <>
            <div
                className="react" //시작태그를 여러 줄로 작성하게 된다면 여기에 주석을 작성할 수 있다.
            ></div>      
            {/*주석문 명시*/}
            <h3>{name}</h3>
            <h3>{address}</h3> 
            <h3>{pn}</h3>
            </>
        )

    };

    const Ka = () => {
        const number = 8;
        if (number % 2 === 0){
            return <div>{number}은(는) 짝수입니다.</div>
        } else {
            return <div>{number}은(는) 홀수입니다.</div>
        }
    };

    return(
        <div>
            <Body />
            <Ka />
        </div>
    );
}
export default chanung;

