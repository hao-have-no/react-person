import React, {useContext} from "react";
import {ThemeContext} from "../../Context";


function UseContextPage(props) {
    const {themeColor} = useContext(ThemeContext);
    //可以多个参数传递，但是只能用于function组件中
    //不能有render函数

    return (
        <div className="border">
            <h3 className={themeColor}>UseContextPage</h3>
        </div>
    );
}
export default UseContextPage;