import React, { useState } from 'react';
import Header from'./Header';
import CreatNote from './CreatNote';
import Note from './Note';

 const App = () => {
    const [addItem,setaddItem]=useState([]);
    const addNote=(note)=>{
         setaddItem((prevData)=>{
            const allInputData={id:new Date().getTime().toString(),title:note.title,content:note.content};
            return [...prevData,allInputData];
         })
    }
    const Delete_Item=(id)=>{
       
         setaddItem((prevData)=>{
            return prevData.filter((currdata)=>{
                return currdata.id!==id
            });
         })
    }
    const Update_Item=(id,data)=>{
        setaddItem(addItem.map((ele)=>{
            if(ele.id===id){
                return {...ele, id:id,title:data.title,content:data.content}
            }
            return ele;
        }))
      
    }
    return (
        <>
         <Header/>
         <CreatNote passNote={addNote}/>
       
      
        {
            addItem.map((value)=>{
                return <Note 
                delete_item={Delete_Item}
                update_item={Update_Item}
                key={value.id}
                 id={value.id}
                Title={value.title}
                data={value.content}
                
                />;
            })
        }
        </>
    );
}
export default App;