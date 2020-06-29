import React, {Component} from 'react';
import TopBar from "../../components/NameComponent/TopBar";
import Bottom from "../../components/NameComponent/Bottom";

class Layout extends Component {
    componentDidMount() {
        const {title = '上层'} = this.props;
        document.title = title;
    }

    render() {

        const { children = '孩子', showTopBar, showBottomBar } = this.props;

        return (
            <div>
                {showTopBar&&<TopBar/>}
               <p>context</p>
                <p>{children}</p>
                {showBottomBar&&<Bottom/>}
            </div>
        );
    }
}

export default Layout;
