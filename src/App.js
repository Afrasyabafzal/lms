import CourseAdmin from './components/admincourses'
import SignIn from './components/signIn'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Error404 from './Error/error'

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/adminC" element={<CourseAdmin />} />
        <Route path="/*" element={<Error404/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
