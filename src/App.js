import CourseAdmin from './components/admincourses'
import SignIn from './components/signIn'
import Adduser from './components/adduser'
import SignUp from './components/signUp'
import Aboutus from './components/aboutus'
import AdminSignIn from './components/AdminSignin'
import Footer from './components/footer'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Error404 from './Error/error'
import Dashboard from './containers/Dashboard'
import AdminDashboard from './containers/AdminDashboard'
import Landingpage from './components/landingpage'
import Aboutuspage from './components/aboutuspage'
import Material from './components/material'

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/adminDashboard" element={<AdminDashboard/>} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/adminC" element={<CourseAdmin />} />
        <Route path="/adduser" element={<Adduser />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/admin" element={<AdminSignIn />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/" element={<Landingpage />} />
        <Route path="/aboutuspage" element={<Aboutuspage/>} />
        <Route path="/material" element={<Material/>} />
        <Route path="/*" element={<Error404/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
