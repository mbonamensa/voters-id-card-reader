import { useState, useEffect } from 'react'
import { BsCardImage } from 'react-icons/bs'

function Uploader() {

    const [inputData, setInputData] = useState({
        file: null
    })
    const [imgPreview, setImgPreview] = useState()

    function handleChange(event) {
        setInputData(prev => {
            return {

                ...prev,
                file: [event.target.files[0]]
            }
            }    
        )
        setImgPreview(URL.createObjectURL(event.target.files[0]))
    }
    console.log(inputData.file)

    function handleUpload(event) {
        event.preventDefault()
        
        const formData = new FormData()

        formData.append("file", inputData.file)

        // fetch("https://httpbin.org/post", {
        //     method: "POST",
        //     body: formData
        // })
        fetch("https://voters-id-reader.onrender.com/read", {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(data => console.log(data))

        
    }

    return (
        <>
        <form onSubmit={handleUpload} className="uploader">
            <div className="uploader-container" onClick={() => document.getElementById("file-upload").click()}>
                <p>Click to take a photo of your ID or Upload</p>
                <BsCardImage  className='image-icon'/>
                <input onChange={handleChange} type="file" name="filename" id="file-upload" accept="image/*" hidden/>
            </div>

        <button>Upload</button>
        <div className="preview-img">
            <img src={imgPreview} alt="" />
        </div>
        </form>
        </>
    )
}

export default Uploader