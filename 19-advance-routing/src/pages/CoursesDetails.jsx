import { useParams } from "react-router-dom"


const CoursesDetails = () => {
    const params = useParams()  
  return (
    <div>
        <h1>{params.id}Courses Details Page</h1>
    </div>
  )
}

export default CoursesDetails