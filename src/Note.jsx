import React, { useState } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import './index.css'

const Note=(Props)=>{
  const [edit,setEdit]=useState(true);
  const [data, setData] = useState({
    title: "",
    content: "",
});
const getData = (event) => {
  const { name, value } = event.target;

  setData((prevData) => {
      return { 
          ...prevData,
          [name]: value,
          
      };
  })
}
  if(Props.Title===""&&Props.data===""){
   return;
  }
  const Delete_item=()=>{
     Props.delete_item(Props.id);
    
  }

  const Update_data=()=>{
     
    
     if(edit===true){ 
      setEdit(false)
      setData((prevData)=>{
         return {
         title:Props.Title,
         content:Props.data,  
      };
      })
      
    }
     else {
      Props.update_item(Props.id,data);
      setEdit(true);
      
    };
  
  }

      return(
       <div className='Note-Container'>
       
           <div className='Note' >
           {edit?
             (<><h2>{Props.Title }</h2>
             <p>{Props.data}</p></>)
             :(<><input type='text' className='text_title' placeholder='Title' onChange={getData} value={data.title} name="title" />
             <textarea className='text_note' placeholder='Write a Note...'  onChange={getData} value={data.content} name="content" /></>)
           } 
           </div> 
          {edit?<button className='editButton' title="Edit Item" onClick={Update_data}><EditIcon /></button>:<button className='editButton' title="Save" onClick={Update_data}><CheckCircleIcon/></button>}
           <button className='deleteButton' onClick={Delete_item} title='Delete Item'> <DeleteOutlineIcon /></button>
           </div>
      );
}
export default Note;

