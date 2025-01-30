import Home from './pages/Home'
import Sobre from './components/sobre'
import Login from './components/login'
import Unidades from './pages/unidades'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

const App = () => {
    return(
        <>
        <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/sobre' element={<Sobre/>}/>
            <Route path='/unidades' element={<Unidades/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
        </Router>
        </>
    )
}

export default App;