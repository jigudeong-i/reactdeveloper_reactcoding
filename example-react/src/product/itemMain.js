import { useState } from "react";
import ItemList from "./itemList";
import ItemTotal from "./itemTotal"
import ItemInput from "./itemInput";

const ItemMain = () => {
    const itemDataArray=[
        {
            name:"CPU",
            price:290000,
            quantity:1,
        },
        {
            name:"메인보드",
            price:110000,
            quantity:1,
        },
        {
            name:"메모리",
            price:79000,
            quantity:2
        },
    ];
    
    const[items, setItems] = useState(itemDataArray); 

    //새로운 상품 등록
   const[form, setForm] = useState({
        name:"",
        price:0,
        quantity:0,
    });
    const handleChange = (e) => {
        const{name, value} = e.target;
        setForm(            // setForm 지워봐. 커서는 있는데 입력이 안 됨.
            {...form,       
            [name]:value    // name이 가리키는 속성만 value 로 바꿈. (대괄호 표기 : 계산된 속성 문법) 
            }
        );
    };
    const onCreate = () => {
        setItems([...items, form]);         // 등록 버튼 누르면 목록에 추가 
        alert("새로운 상품이 등록되었습니다~");
    };

    return(   
        <>
            {/*onChangePrice 속성(props) 값 지정 */}
            <ItemInput form={form} handleChange={handleChange} onCreate={onCreate} />  
            <hr/>
            <ItemList items={items}/>
            <ItemTotal items={items}/>
        </>
    );     
};
export default ItemMain;





