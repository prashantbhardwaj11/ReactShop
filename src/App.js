import './App.css';
import { Routes, Route } from "react-router-dom"
import AppBar from './components/ResponsiveAppBar'
import AddShop from './Pages/AddShop'
import ViewShop from './Pages/ViewShop'
import UpdateShop from './Pages/UpdateShop'
function App() {
  return (
    <div className="App">
    <AppBar/>
    <Routes>
        <Route path="/" element={ <AddShop/> } />
        <Route path="/View" element={ <ViewShop/> } />
        <Route path="/Update" element={ <UpdateShop/> } />

      </Routes>
    </div >
  );
}

export default App;
