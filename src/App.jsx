import { useState } from 'react'
import { ReactSortable } from "react-sortablejs";

import img1 from '/img1.jpg'
import img2 from '/img2.jpg'
import img3 from '/img3.jpg'
import img4 from '/img4.jpg'
import img5 from '/img5.jpg'
import img6 from '/img6.jpg'
import img7 from '/img4.jpg'
import img8 from '/img1.jpg'
import img9 from '/img3.jpg'


function App() {

  const [imgs, setImgs] = useState([
    { id: 1, name: img1},
    { id: 2, name: img2},
    { id: 3, name: img3},
    { id: 4, name: img4},
    { id: 5, name: img5},
    { id: 6, name: img6},
    { id: 7, name: img7},
    { id: 8, name: img8},
    { id: 9, name: img9},
   
    
    
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
