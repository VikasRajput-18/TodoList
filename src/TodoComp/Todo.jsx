import React, { useState } from "react";
import "./Style.css";
import TodoImg from "../images/todo-list.webp";

const Todo = () => {
  const [inputData, setInputdata] = useState("");
  const [items, setItems] = useState([]);

  const InputEvent = (e) => {
    const val = e.target.value;
    setInputdata(val);
  };

  const addItem = () => {
    if (inputData !== "") {
      setItems([...items, inputData]);
      setInputdata("");
    }
  };

  const delItem = (index) => {
     const upItems = items.filter((elm,id)=>{
         return id !== index

     })
     setItems(upItems);
  };


  const remove = ()=>{
       setItems([]);
  }

  return (
    <div className="main_div">
      <div className="child_div">
        <figure className="imgBox">
          <img src={TodoImg} alt="Todo_img" className="img" />
          <figcaption className="title">Add Your List Here 👌</figcaption>
        </figure>
        <div className="addItem">
          <input
            type="text"
            placeholder="✍️ Write Todo"
            value={inputData}
            onChange={InputEvent}
          />
          <i className="fas fa-plus" title="Add-Item" onClick={addItem}></i>
        </div>

        <div className="show-items">
          {/* <div className="each-item">
            <h1 className="items">Apple</h1>
            <i className="fas fa-trash-alt"></i>
          </div> */}

          {items.map((curVal, index) => {
            return (
              <div className="each-item" key ='index'>
                <h1 className="items">{curVal}</h1>
                <i className="fas fa-trash-alt" onClick={()=>{delItem(index)}}></i>
              </div>
            );
          })}
        </div>

        <div className="show-items">
          <button className="btn effect04" data-sm-link-text="Remove All" onClick = {remove}>
            {" "}
            <span> Remove All </span>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
