import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Join from './component/Join/Join';
import Chat from './component/Chat/Chat';
import Register from './component/Join/Register';
import SendResetEmail from './component/Join/SendResetEmail';
import Confrimpass from './component/Join/Confrimpass';


function App() {


 return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Join />}>
        </Route>
        <Route path="/register" element={<Register/>}/>
        <Route path="/sendresetlink" element={<SendResetEmail/>}/>
        <Route path="/confirmpassword/:id/:token" element={<Confrimpass/>} />



        <Route path="/chat" element={<Chat/>}/>

      </Routes>
    </BrowserRouter >
       </div>
  );
}

export default App;
