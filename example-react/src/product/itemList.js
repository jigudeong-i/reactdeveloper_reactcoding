
import Item from "./item";

//속성(props) 값 수신
const ItemList = ({items})=>{
    return(
        <ul>
            {/* item이라는 props 값 지정 */} 
            {items.map((item) =>(
                <Item key={item.name} item={item}/>
            ))}
        </ul>
    );
};
export default ItemList;