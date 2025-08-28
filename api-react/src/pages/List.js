
import {Container, Row, Col} from "react-bootstrap";
import GyeongnamTourcultureList from "../component/GyeongnamTourcultureList";
import Header from "../component/Header";

const List = () => {
    return(
        <Container>
            <Row>
                <Col>
                    <Header/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 className="text-center">경상남도 문화관광 리스트</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <GyeongnamTourcultureList/>
                </Col>
            </Row>
        </Container>
    )
};
export default List;