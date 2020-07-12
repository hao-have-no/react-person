import React, {Component} from "react";
import {RouterContext} from "./Context";

export default class Redirect extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {context => {
          const {history} = context;
          const {to, push = false} = this.props;
          return (
            //  通过lifeCycle,导入生命周期，从而合理实现相关功能
            <LiceCycle
              onMount={() => {
                // 兼容了to是字符串，在源码中要处理to是字符串和对象两个情况
                push ? history.push(to) : history.replace(to);
              }}
            />
          );
        }}
      </RouterContext.Consumer>
    );
  }
}

class LiceCycle extends Component {
  componentDidMount() {
    if (this.props.onMount) {
      this.props.onMount.call(this, this);
    }
  }

  render() {
    return null;
  }
}
