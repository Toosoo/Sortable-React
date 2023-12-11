import { useState } from 'react'
import { ReactSortable } from "react-sortablejs";
// import img1 from 'img1.png'

function App() {

  const [imgs, setImgs] = useState([
    { id: 1, name: "./public/img1.jpg",},
    { id: 2, name: "./public/img2.jpg"},
    { id: 3, name: "./public/img3.jpg"},
    { id: 4, name: "./public/img4.jpg"},
    { id: 5, name: "./public/img5.jpg"},
    { id: 6, name: "./public/img6.jpg"},
    
    
  ]);

 

  return (
 

<div className="w-full min-h-screen flex justify-center items-center">


     <ReactSortable className="w-[700px]  flex justify-center items-center flex-wrap gap-10" list={imgs} setList={setImgs} animation={500}>
     {imgs.map((e,i) => (
       <div className=' h-56 w-[200px] flex justify-center items-center' key={e.id}>
       
        <img src={e.name} alt="" className='w-full h-full object-cover rounded-xl' />
        
        
        </div>
       ))}
    </ReactSortable>

       </div>
    

  )
}

export default App
