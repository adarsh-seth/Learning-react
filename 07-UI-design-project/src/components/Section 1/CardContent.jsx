

const CardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-7 flex flex-col  justify-between ">
                <h2 className="bg-white font-semibold rounded-full h-10 w-10 flex justify-center items-center">{props.id+1}</h2>
                <div>
                    <p className="text-shadow-2xl text-1.5xl text-white font-semibold mb-16 leading-relaxed">
                         {props.description}
                    </p>

                    <div className="flex justify-between" >
                        <button className="bg-blue-500 text-white rounded-4xl px-3 py-1">{props.tag}</button>
                        <button className="bg-blue-500 text-white rounded-4xl px-3 py-1"><i className="ri-arrow-right-up-line"></i></button>
                    </div>
                </div>

        </div>

   
  )
}

export default CardContent