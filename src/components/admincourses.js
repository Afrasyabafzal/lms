import AdminNavbar from './adminNavbar';
import CoursePopUp from './addcoursepopup';
import { useEffect, useState } from 'react';
import { addCourse } from '../redux/action/admin.action';
import { connect } from 'react-redux';
import { getCourses } from '../redux/action/admin.action';
const course = [
    { coursename: 'Programming Fundamental', coursecode: 'CS124', credithours: '3', enrollment: 'Active' },
    
  ]
  
 const CourseAdmin = (props) => {
   const [open, setOpen] = useState(false);
   props.courses ? console.log(props.courses) : console.log("No courses");
   useEffect(() => {
    props.getCourses();
    },[])
    props.courses ? console.log(props.courses) : console.log("No courses");


    return (
      <div className="px-4 sm:px-6 lg:px-8">
        <CoursePopUp open={open} setOpen={setOpen} addCourse={props.addCourse} />
        <AdminNavbar />
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">Admin Courses</h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all the courses with their enrollment status ,Course code and Credit Hours;
            </p>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
              onClick={() => setOpen(true)}
            >
              Add course
            </button>
          </div>
        </div>
        <div className="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                 Course-Name
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                >
                  Course-Description
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Course-Price
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  <span className="sr-only">Edit</span>
                  
                </th>
                <th><td>
                  <span className="sr-only">   Delete</span>
                  </td></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {props.courses? props.courses.map((course) => (
                <tr key={course.coursecode}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                    {course.courseName}
                  </td>
                  <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">
                    {course.courseDescription}
                  </td>
                  <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell">
                    {course.credithours}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{course.price}</td>
                  <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <a href="#" className="text-indigo-600 hover:text-indigo-900">
                      Edit<span className="sr-only">, {course.coursename}</span>
                    </a>
                    <a><td>Delete<span className="sr-only">, {course.coursename}</span></td></a>
                  </td>
                </tr>
              )): <tr><td>No courses</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  const mapStateToProps = (state) => {
    return {
      courses: state.adminState.admin.courses
    }
  }
  
  export default connect(mapStateToProps, { addCourse,getCourses })(CourseAdmin);