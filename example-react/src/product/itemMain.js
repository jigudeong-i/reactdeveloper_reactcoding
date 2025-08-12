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
   
    //새로운 상품 등록

   const[form, setForm] = useState({
        name:"",
        price:0,
        quantity:0,
    });

    const handleChange = (e) => {
        const{name, value} = e.target;
        setForm(
            {...form, [name]:value
            }
        );
    };

    const[items, setItems] = useState(itemDataArray); 
    const onCreate = () => {
        setItems([...items, form]);
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
    );     // handleChange라는 변수를 handleChange라는 이름으로 전달. ItemInput 안에서는 props.handleChange로 가능
};
export default ItemMain;





