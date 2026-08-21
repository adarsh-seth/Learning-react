import Card from "./Card"


const RightContent = (props) => {
  return (
    <div className=" h-full w-2/3  flex flex-nowrap overflow-x-auto gap-8 p-5" id="right">
        {props.users.map(function(elem,index){
            return (
            <Card
             key={index}
             id={index}
             img={elem.img} 
             description ={elem.description} 
             tag={elem.tag} 
             />
            )
        }) }
    </div>
  )
}

export default RightContent