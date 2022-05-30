import CourseAdmin from './components/admincourses'
import SignIn from './components/signIn'
import Adduser from './components/adduser'
import SignUp from './components/signUp'
import AdminSignIn from './components/AdminSignin'
import Footer from './components/footer'

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
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/admin" element={<AdminSignIn />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/*" element={<Error404/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
