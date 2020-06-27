import React, {Component} from 'react';
import {ThemeContext} from "../../Context";

class ContextTypePage extends Component {
    static contextType = ThemeContext; //只能接受单一的context，接受其他的当前的会被覆盖掉

    render() {
        const {themeColor} = this.context;
        return (
            <div className="border">
                <h3 className={themeColor}>ContextTypePage</h3>
            </div>
        );
    }
}

export default ContextTypePage;