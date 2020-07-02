import React, {useState} from 'react';
import IndexPage from "./pages/IndexPage";
import BottomNav from "./components/BottomNav";
import CartPage from "./pages/CartPage";
import OrderListPage from "./pages/OrderListPage";
import UserPage from "./pages/UserPage";
import ContextPage from "./pages/ContextPage/ContextPage";
// import "antd/dist/antd.css"
import AntdFormPage from "./pages/AntdFormPage/AntdFormPage";
import MyRCFieldForm from "./pages/ContextPage/MyRCFieldForm";
import MyRcForm from "./pages/ContextPage/MyRcForm";
import DialogPage from "./pages/ContextPage/DialogPage";
// import ReduxPage from "./pages/ReduxPage";
import ReactReduxPage from "./pages/ReactReduxPage";
import HooksPage from "./pages/ReactReduxPage/HooksPage";

function App() {
    // const [activeNum,setActiveNum] = useState(0);
    //useState:react hook提供的方法，用于修改指定的值(activeNum)

  return (
    <div className="App">
        {/*{activeNum === 0 && <IndexPage/>}*/}
        {/*{activeNum === 1 && <CartPage/>}*/}
        {/*{activeNum === 2 && <OrderListPage/>}*/}
        {/*{activeNum === 3 && <UserPage/>}*/}
        {/*<BottomNav activeNum={activeNum} setActiveNum={setActiveNum}/>*/}
        {/*<ContextPage/>*/}
        {/*<AntdFormPage/>*/}
        {/*<MyRCFieldForm/>*/}
        {/*<MyRcForm/>*/}
        {/*<DialogPage/>*/}
        {/*<ReduxPage/>*/}
        {/*<ReactReduxPage/>*/}
        <HooksPage/>
    </div>
  );
}

export default App;
