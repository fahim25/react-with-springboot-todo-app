import React from "react"
import {  
  BrowserRouter,
  Routes,
  Route, 
  useNavigate
} from "react-router-dom"
import ErrorComponent from "./Error"
import Footer from "./Footer"
import Header from "./Header"
import LogIn from "./Login"
import Logout from "./Logout"
import TodoComponent from "./TodoComponent"
import TodoList from "./TodoList"
import WelcomeComp from "./Welcome"

const TodoApp = () => {
    return (
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={ <AppWithRoute/>} />
            <Route path="/login" element={<AppWithRoute/>} />
            <Route path="/logout" element={<Logout/>} />
            <Route path="/todos/:id" element={<TodoComponent/>} />
            <Route path='/welcome/:name' element={<WelcomeComp/>}>
              <Route path=""  element={<AppWithRoute/>}/>
            </Route>
            {/* <Route path="/welcome/:name" element={<WelcomeComp/>} /> */}
            <Route path='/todolist' element={<TodoList/>}>
              <Route path=""  element={<AppWithRoute/>}/>
            </Route>
            <Route path="*" element={<ErrorComponent/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )
}

export function AppWithRoute(props){
  const navigate = useNavigate();
  return(
    <LogIn navigate={navigate}></LogIn>
  )
}


export { TodoApp }
