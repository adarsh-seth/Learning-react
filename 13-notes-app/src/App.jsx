import { useState } from "react";

const App = () => {
  const [text, setText] = useState('');
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task]
    copyTask.push({ text, details })
    setTask(copyTask)
    
    setText('')
    setDetails('')
  };

  const deleteNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx,1)
    setTask(copyTask)
  }
  return (
    <div className="lg:flex h-screen bg-black">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="p-10 flex flex-col gap-10 lg:w-1/2 "
      >
        <h2 className="text-center font-bold text-white text-3xl">Add Notes</h2>

        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          type="text"
          placeholder="Enter notes heading"
          className="px-5 w-full py-3 border-2 rounded outline-none text-white bg-black"
        />
        <textarea
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
          type="text"
          placeholder="Write Details"
          className="px-5 py-3 w-full h-30 border-2 rounded outline-none text-white bg-black"
        />
        <button className="bg-white w-full px-5 py-3 outline-none rounded ">
          Add Notes
        </button>
      </form>

      <div className=" lg:w-1/2  p-10">
        <h2 className="text-center font-bold text-white text-3xl">
          Recent Notes
        </h2>
        <div className="flex flex-wrap gap-5 mt-7 h-full overflow-auto">
        {task.map(function(elem, idx){
          return <div key={idx} className=" flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
            <div>
                <h3 className='leading-tight text-lg font-bold'>{elem.text}</h3>
                <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.details}</p>
              </div>
              <button onClick={() => {
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
              </div>

              
        })}
        
        </div>
      </div>
    </div>
  );
};

export default App;
