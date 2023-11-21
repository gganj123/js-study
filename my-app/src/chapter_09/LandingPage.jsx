import React, {useState} from "react";
import Toolbar from "./Toolbar";

function LangdingPage(props) {
    const [isLoggedIn, setIsLoggedin] = useState(false);

    const onClickLogin = () => {
        setIsLoggedin(true);
    };

    const onClickLogout = () => {
        setIsLoggedin(false);
    };

    return (
        <div>
            <Toolbar
                isLoggedIn={isLoggedIn}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}
                ></Toolbar>
       
        <div style = {{ padding: 16 }}>소플과 함께하는 이랙트 공부!</div>
        </div>
    );
}

export default LangdingPage;