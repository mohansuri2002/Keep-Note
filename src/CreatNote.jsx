import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import './index.css'

const CreatNote = (Props) => {
    const [data, setData] = useState({
       
        title: "",
        content: "",
    });
    const [show,setShow]=useState(false);
    const getData = (event) => {
        const { name, value } = event.target;
      
        setData((prevData) => {
            return { 
                ...prevData,
                [name]: value,
                
            };
        })
    }
    const makeNote = (event) => {
        
        
        event.preventDefault();
        setData({
            title: "",
            content: "",
        })
        Props.passNote(data);
    }
   
    const show_title=()=>{
        setShow(true);
    }
    const makeNotes=(event)=>{
       if(event.key==='Enter'){
        event.preventDefault();
        setData({
            title: "",
            content: "",
        })
        Props.passNote(data);
       }
    }
    return (
       <>
       
        <div className='CreatNote-container' onDoubleClick={()=>{
            setShow(false);
        }}>
            <form onSubmit={makeNote} onClick={show_title} onKeyDown={makeNotes}>
                {show? (<input type='text' className='text_title' placeholder='Title' onChange={getData} value={data.title} name="title" />):null}
                <textarea className='text_note' placeholder='Write a Note...' onChange={getData} value={data.content} name="content" />
                {show?(<button className='Add_item' title='Add Item'><AddIcon /></button>):null}
            </form>
        </div>
        </>
    );
}
export default CreatNote ;

