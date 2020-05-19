  import React, { useState } from "react"
  import axios from "axios";

function App() {

const BASE_URL = "http://192.168.0.27:8080";
const [content, setContent] = useState("");
const [uploadedImg, setUploadedImg] = useState({
  fileName: "",
  fillPath: ""
});


const onChange = e => {
  console.log(e.target.files[0])
  setContent(e.target.files[0]);
};

const onSubmit = e => {
  e.preventDefault();
  console.log(content)
  const formData = new FormData();
  formData.append("prd_id",1)
  formData.append("mem_id","test01")
  formData.append("review_subject","ddddd")
  formData.append("review_content","ddfdfdf")
  formData.append("img", content); 
  
  axios
    .post(BASE_URL+"/api/review/review_write", formData, {
      processData: false})
    .then(res => {
      console.log(res.data);
      alert("The file is successfully uploaded");
    })
    .catch(err => {
      console.error(err);
    }); 
};

  return (
    <>
      <form onSubmit={onSubmit}>
        {uploadedImg ? (
          <>
            <img src={uploadedImg.filePath} alt="" />
            <h3>{uploadedImg.fileName}</h3>
          </>
        ) : (
          ""
        )}
        <input type="file" onChange={onChange} />
        <button type="submit">Upload</button>
      </form>
    </>
  );
}

export default App;
