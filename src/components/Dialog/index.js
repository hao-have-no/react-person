import React, {Component} from 'react';
import {createPortal} from 'react-dom'

class Dialog extends Component {

    constructor(props){
        super(props);
        const doc= window.document;
        this.node = doc.createElement("div");
        doc.body.appendChild(this.node);
    }

    componentWillUnmount() {
        window.document.body.removeChild(this.node);
    }

    //Portal 则提供了一种将组件直接挂载到直接父组件 DOM 层次之外的一类方式。
    //可以作为弹框组件的好的实践方案
    render() {
        return createPortal(
            <div className="dialog">
                <h3>Dialog</h3>
            </div>,
            this.node
        );
    }
}

export default Dialog;
