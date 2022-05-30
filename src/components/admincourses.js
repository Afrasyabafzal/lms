import Navbar from './navbar';
const course = [
    { coursename: 'Programming Fundamental', coursecode: 'CS124', credithours: '3', enrollment: 'Active' },
    
  ]
  
 function CourseAdmin()  {
    return (
      <div className="px-4 sm:px-6 lg:px-8">
        <Navbar />
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
                  Course-Code
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                >
                  Credit-Hours
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Entrollement Status
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
              {course.map((course) => (
                <tr key={course.coursecode}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                    {course.coursename}
                  </td>
                  <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">
                    {course.coursecode}
                  </td>
                  <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell">
                    {course.credithours}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{course.enrollment}</td>
                  <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <a href="#" className="text-indigo-600 hover:text-indigo-900">
                      Edit<span className="sr-only">, {course.coursename}</span>
                    </a>
  <a>                      <td>
                      Delete<span className="sr-only">, {course.coursename}</span>
                      </td>
</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  export default CourseAdmin;