
import Card from './component/Card'


const App = () => {


  const jobs = [
  {
    company: "Amazon",
    logo: "https://cdn.vectorstock.com/i/500p/39/87/amazon-logo-smile-icon-vector-34243987.jpg",
    posted: "5 days ago",
    title: "Senior UI/UX Designer",
    type: "Part Time",
    level: "Senior Level",
    salary: "$120/hr",
    location: "Mumbai, India"
  },
  {
    company: "Google",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_-aa4QAmLM93FQ0PPNQ0kNuxwSr3C84c8GTgI6LotBg&s=10",
    posted: "2 days ago",
    title: "Frontend Developer",
    type: "Full Time",
    level: "Mid Level",
    salary: "$100/hr",
    location: "Bangalore, India"
  },
  {
    company: "Microsoft",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRikGFJR-a0827PjlHAYz5Afmo_7FYLw2JY-2w07VfIYA&s=10",
    posted: "1 day ago",
    title: "Software Engineer",
    type: "Full Time",
    level: "Senior Level",
    salary: "$110/hr",
    location: "Hyderabad, India"
  },
  {
    company: "Meta",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf0lP2_kgCkHUWXDSmcPvGTYhE2XLv3amPV-aPYMxhrQ&s=10",
    posted: "3 days ago",
    title: "React Developer",
    type: "Full Time",
    level: "Mid Level",
    salary: "$95/hr",
    location: "Gurgaon, India"
  },
  {
    company: "Apple",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLoXXqjqyTCX8TagURd1ITIt9OTzoSAKVrwhd4ejY0Ng&s=10",
    posted: "4 days ago",
    title: "Product Designer",
    type: "Part Time",
    level: "Senior Level",
    salary: "$125/hr",
    location: "Bangalore, India"
  },
  {
    company: "Netflix",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw3csX8RWr7CMLV5g6vzwjLgPqMmmpYAQ7WAH4yoioxA&s=10",
    posted: "6 days ago",
    title: "UI Designer",
    type: "Full Time",
    level: "Junior Level",
    salary: "$85/hr",
    location: "Mumbai, India"
  },
  {
    company: "Adobe",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKhLGYgGIe_JxAk30fWRZdSwcCFhboTIRpNldnlj0XQw&s=10",
    posted: "2 days ago",
    title: "UX Researcher",
    type: "Full Time",
    level: "Mid Level",
    salary: "$90/hr",
    location: "Noida, India"
  },
  {
    company: "Spotify",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1_p8uJHFmtbgqPsR1qc-aefXnH0mZq6hSTK2I_Wq0BA&s=10",
    posted: "7 days ago",
    title: "Frontend Engineer",
    type: "Part Time",
    level: "Junior Level",
    salary: "$80/hr",
    location: "Pune, India"
  },
  {
    company: "Tesla",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUtXQqql1XLc4kJ7KypkKET1jQR0qMQ-ZPUd77BGwjRA&s=10",
    posted: "3 days ago",
    title: "Product Manager",
    type: "Full Time",
    level: "Senior Level",
    salary: "$115/hr",
    location: "Delhi, India"
  },
  {
    company: "Flipkart",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJYyVv7EIFCvQzcfebbNsOpGbsl8dxAMjIwfNoEYiBIg&s=10",
    posted: "1 day ago",
    title: "Backend Developer",
    type: "Full Time",
    level: "Mid Level",
    salary: "$75/hr",
    location: "Bangalore, India"
  }
];
  return (
    <div className="parent">
       {jobs.map(function(elem){

        return <Card company ={elem.company} logo = {elem.logo} posted = {elem.posted} title = {elem.title} type = {elem.title} type = {elem.type} level ={elem.level} salary = {elem.salary} location = {elem.location} />
       })}
    </div>
  )
}

export default App