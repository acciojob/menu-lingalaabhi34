import React from "react"
import Breakfast from "./Breakfast"
import Navbar from "./Navbar"
import All from "./All"
import Lunch from "./Lunch"
import Shakes from "./Shakes"
import { Routes,Route } from "react-router-dom"
const App=()=>{
    return(<div>
       
<Navbar/>
<Routes>
<Route path="/All" element={<All/>}></Route>
<Route path="/Breakfast" element={<Breakfast/>}></Route>
<Route path="/Lunch" element={<Lunch/>}></Route>
<Route path="/Shakes" element={<Shakes/>}></Route>
</Routes>
<All/>
    </div>)
}
export default App




