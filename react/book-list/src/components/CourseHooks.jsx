import React, { useState } from 'react';
import { getCourses } from '../api/courseApi';


function CoursesHooks(){
    const [courses, setCourses] = useState([]);

    const handleCourses = (course) => {
        getCourses().then(courses => {
            setCourses({
                courses: courses
            })
        })
    }

console.log(courses);
    return(
        <>
    
                <h2>Courses</h2>
                <table className='table'>
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Author ID</th>
                      <th>Category</th>
                    </tr>
                  </thead>
                  <tbody>
                    {handleCourses.map(course => {
                        return(
                      <tr>
                        <td>{course.title}</td>
                        <td>{course.authorId}</td>
                        <td>{course.category}</td>
                      </tr>
                        );
                         } )}
                  </tbody>
                </table>
            
        </>
    )
}
export default CoursesHooks;
// class CoursesPage extends Component {
//   state = {
//     courses: []
//   }

//   componentDidMount () {
//     getCourses().then(courses => this.setState({ courses: courses }))
//   }

//   render () {
//     return (
//       <>
//         <h2>Courses</h2>
//         <table className='table'>
//           <thead>
//             <tr>
//               <th>Title</th>
//               <th>Author ID</th>
//               <th>Category</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.courses.map(course => {
//                 return(
//               <tr>
//                 <td>{course.title}</td>
//                 <td>{course.authorId}</td>
//                 <td>{course.category}</td>
//               </tr>
//                 );
//             })}
//           </tbody>
//         </table>
//       </>
//     )
//   }
// }
// export default CoursesPage
