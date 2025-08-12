import {useMemo} from "react";

const ItemTotal = ({items}) => {
    const calcTotalPrice = (items)=>{
        return items.reduce(function (sum, item){
            return sum + item.price * item.quantity;
        }, 0);
    };

    // useMemo Hook 을 사용하면 상태값이 변경되지 않으면 
    // 그 전에 계산된 값을 보관하고 있다가 그대로 사용하여 성능을 향상시킴
    const totalPrice = useMemo(() => calcTotalPrice(items),[items]);
    return(
        <p>합계:{totalPrice}원</p>
    )
};
export default ItemTotal;