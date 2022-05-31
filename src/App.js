import CourseAdmin from './components/admincourses'
import SignIn from './components/signIn'
import Adduser from './components/adduser'
import SignUp from './components/signUp'
import Aboutus from './components/aboutus'
import AdminSignIn from './components/AdminSignin'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Error404 from './Error/error'

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />

        <Route path="/adminC" element={<CourseAdmin />} />
        <Route path="/adduser" element={<Adduser />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/admin" element={<AdminSignIn />} />
        <Route path="/*" element={<Error404/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
