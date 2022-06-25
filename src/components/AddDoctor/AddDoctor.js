import React, { useState } from 'react';


const AddDoctor = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = { ...info };
        // console.log(newInfo);
        // console.log(e.target);
        newInfo[e.target.name] = e.target.value;
        // console.log(newInfo)
        setInfo(newInfo);
    }

    const handleChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);

        fetch('https://hidden-journey-37669.herokuapp.comaddADoctor', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className='col-md-10 py-4'>
            <h4 style={{ color: '#15D1CC' }}>Add a Doctor</h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label name="email" className="form-label">Email address</label>
                    <input onBlur={handleBlur} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label name="name" className="form-label">Name</label>
                    <input onBlur={handleBlur} name="name" type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label name="image" className="form-label">Upload image</label>
                    <input onChange={handleChange} type="file" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default AddDoctor;