import CourseAdmin from './components/admincourses'
import SignIn from './components/signIn'
import Adduser from './components/adduser'
import SignUp from './components/signUp'
import AdminSignIn from './components/AdminSignin'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Error404 from './Error/error'
import Dashboard from './containers/Dashboard'
import AdminDashboard from './containers/AdminDashboard'

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/adminDashboard" element={<AdminDashboard/>} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/adminC" element={<CourseAdmin />} />
        <Route path="/adduser" element={<Adduser />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/admin" element={<AdminSignIn />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/*" element={<Error404/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
