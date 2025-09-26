import useCustomLogin from "../hooks/useCustomLogin";
import BasicLayout from "../layouts/BasicLayout";
import { Navigate } from "react-router-dom";

const AboutPage = () => {
    const {isLogin} = useCustomLogin();
    
    if (!isLogin) {
        return <Navigate replace to="/member/login" />;
    }

    return (
        <BasicLayout>
            <div className=" text-3xl">About Page</div>
        </BasicLayout>
    );
}

export default AboutPage;