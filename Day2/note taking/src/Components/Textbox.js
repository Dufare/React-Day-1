import React,{useState} from "react";
export default function Textbox() {
  const [text,setText] = useState("")
  const [comments,setComments] = useState(["sdfsdf"]);
  const handleChange = (e)=>{
    setText(e.target.value)
  }
  const changeTextToCapital = () => {
    setText(text.toUpperCase())
  }
  const submit =()=> {
    const updatedComment = [...comments,text]
    setComments(updatedComment)
    setText("")
  }
  const deleteData=(index)=>{
    const updatedComment = comments.filter((comment,ind)=>ind!==index)
    setComments(updatedComment)
  }
  return (
    <>
      <div className="container mt-5">
      <label htmlFor="floatingTextarea2 mb-4">{"Comments".toUpperCase()}</label>
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          style={{ height: 100 + "px" }}
          value={text}
          onChange={handleChange}
        ></textarea>
        <p className="float-start">Count: {text.length}</p>
      <button type="button" class="btn btn-primary col-md-2 mx-2 mt-2" onClick={changeTextToCapital}>Make Capital</button>
      <button type="button" class="btn btn-primary col-md-2 mx-2 mt-2" onClick={submit}>Add</button>
    </div>
    <div className="container mt-5">
    {comments.map((comment,index)=>(
      <ul class="list-group">
      <li class="list-group-item clearfix my-auto align-middle">
          {comment}
          <span class="pull-right button-group  float-start">
              {/* <a href="/admin/userA" class="btn btn-primary mx-2 "><span class="glyphicon glyphicon-edit"></span> Edit</a>  */}
              <button type="button" class="btn btn-danger mx-2" onClick={()=>deleteData(index)}><span class="glyphicon glyphicon-remove"></span> Delete</button>
          </span>
      </li>
  </ul>
    ))}
    </div>
    </>
  );
}
