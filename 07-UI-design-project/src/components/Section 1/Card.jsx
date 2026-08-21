import CardContent from "./CardContent"


const Card = (props) => {
  return (
     <div className="h-full w-1/3 rounded-4xl overflow-hidden shrink-0  relative  ">
        <img className="h-full w-full object-cover" src={props.img} alt="" />
   
        <CardContent 
        id={props.id}
        tag={props.tag}
        description={props.description}
        />
        
    </div>

  )
}

export default Card