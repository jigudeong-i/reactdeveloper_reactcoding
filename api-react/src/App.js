import { useEffect, useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from "react-bootstrap/Button";

const url = 'http://apis.data.go.kr/6480000/gyeongnammuseum/gyeongnammuseumList?serviceKey=37e276a5a628951fdef2a0eba3f51cae64effac405a5bf069b2a2de5a66dcca2&pageNo=1&numOfRows=5&resultType=json'
const App = () => {
  const[result,setResult] = useState([]);
  useEffect(() => {

    fetch(url)
    .then(response => response.json())
    .then(data => {
      //console.log(data.getWalkingKr.item.map((it) => it.MAIN_TITLE));
      setResult(data.gyeongnammuseumList.body.items.item)
    })
    .catch(error => console.log(error));
  },[]);

  return(
    <div className="App">
    
      <h3>경상남도_박물관 정보</h3>
      <table className="App-table">
        <thead>
          <tr>
            <th>고유번호</th>
            <th>기관명</th>
            <th>소재지</th>
            <th>홈페이지</th>
            <th>연락처</th>
          </tr>
        </thead>
        <tbody>
          {
            result.map( item => (
              <tr key={item.entid}>
                <td>{item.entid}</td>
                <td>{item.title}</td>
                <td>{item.roadaddress}</td>
                <td>{item.homepage}</td>
                <td>{item.tel}</td>
              </tr>
            ))
          }
        </tbody>
      </table>

      {/* <Button variant="primary">기본 버튼</Button> */}

    </div>
  );
};
export default App;