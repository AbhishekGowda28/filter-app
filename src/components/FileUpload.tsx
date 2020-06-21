import React, { useState } from "react";

export function FileUpload() {
    const [image, setImage] = useState("");

    const handleFileUpload = (obj: React.ChangeEvent<HTMLInputElement>) => {
        obj.persist();
        const files = obj.target.files;
        if (files && files?.length > 0) {
            const img = URL.createObjectURL(files[0]);
            setImage(img);
        }
    }

    return (
        <div className="image-container">

            <input type="file" accept="image/*" onChange={handleFileUpload} />
            <div className="preview">
                <img src={image} alt="" />
            </div>
        </div>
    )
}