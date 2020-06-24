import React, {useState} from 'react';
import IndexPage from "./pages/indexPage";
import BottomNav from "./components/BottomNav";
import CartPage from "./pages/CartPage";
import OrderListPage from "./pages/OrderListPage";
import UserPage from "./pages/UserPage";

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
    </div>
  );
}

export default App;
