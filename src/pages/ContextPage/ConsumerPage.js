import React, {Component} from 'react';
import { ThemeConsumer,UserConsumer } from "../../Context";

class ConsumerPage extends Component {
    render() {
        //接收provider可以使用 consumerType接收
        //类组件的话可以接受useContext
        //也可以使用ThemeConsumer组件,我们定义好的consumer接收
        return (
            <div>
                <h3>ConsumerPage</h3>
                <ThemeConsumer>
                    {
                        context=>(
                            <div className={context.themeColor}>
                                omg
                                <UserConsumer>
                                    {
                                        user=>
                                            <p>{user.name}</p>

                                    }
                                </UserConsumer>
                            </div>
                        )
                    }
                </ThemeConsumer>
            </div>
        );
    }
}

export default ConsumerPage;