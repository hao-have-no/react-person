import React, {useState} from 'react';
import IndexPage from "./pages/indexPage";
import BottomNav from "./components/BottomNav";
import CartPage from "./pages/CartPage";
import OrderListPage from "./pages/OrderListPage";
import UserPage from "./pages/UserPage";
import ReduxPage from "./pages/ReduxPage/ReduxPage";
// import ClasComponent from "./components/TestComponent/ClasComponent";
// import FuncComponent from "./components/TestComponent/FuncComponent";
import LifeCycle from "./pages/LifeCyclePage";
import Layout from "./pages/LayoutPage";
import CompositionPage from "./pages/LayoutPage/card";
import ReactReduxPage from "./pages/ReduxPage/ReactReduxPage";
import RouterPage from "./pages/RouterPage";
import HookPage from "./pages/HookPage/HookPage";
import CustomHook from "./pages/HookPage/CustomHookPage";
import HookApi from "./pages/HookPage/HookApi";



function App() {
    const [activeNum,setActiveNum] = useState(0);
    //useState:react hook提供的方法，用于修改指定的值(activeNum)

  return (
        <div className="App">
            {activeNum === 0 && <IndexPage/>}
            {activeNum === 1 && <CartPage/>}
            {activeNum === 2 && <OrderListPage/>}
            {activeNum === 3 && <UserPage/>}
            <BottomNav activeNum={activeNum} setActiveNum={setActiveNum}/>
            {/*<h3>2353</h3>*/}
            {/*<ReduxPage/>*/}
            {/*<ClasComponent/>*/}
            {/*<FuncComponent/>*/}
            {/*<LifeCycle/>*/}
            {/*<Layout　showTopBar={true} showBottomBar={true} title = '用户中心'/>*/}
            {/*<CompositionPage/>*/}
            {/*<RouterPage/>*/}
            {/*<ReactReduxPage/>*/}
            {/*<HookPage/>*/}
            {/*<CustomHook/>*/}
            <HookApi/>
        </div>
  );
}

export default App;
