import { useParams, useNavigate } from "react-router-dom";

const DayDetail = () => {
  const { date } = useParams();
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{date}일 상세 페이지</h1>
      <p>{date}일에 대한 내용을 여기에 작성하세요.</p>
      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          borderRadius: "8px",
          cursor: "pointer"
        }}
        onClick={() => navigate(-1)}
      >
        ← 캘린더로 돌아가기
      </button>
    </div>
  );
};

export default DayDetail;