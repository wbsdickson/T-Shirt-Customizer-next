import { useState } from "react";

import CustomButton from "./CustomButton";

const FilePicker = ({ file, setFile, readFile }) => {
    const [previewImage, setPreviewImage] = useState(null);

    return (
        <div className="filepicker-container">
            <div className="flex-1 flex flex-col">
                <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                        const file = e.target.files[0];
                        setFile(file);
                        const reader = new FileReader();
                        reader.onloadend = () => {
                            setPreviewImage(reader.result);
                        };
                        reader.readAsDataURL(file);
                    }}
                />
                <label htmlFor="file-upload" className="filepicker-label">
                    Upload Image
                </label>

                <p className="mt-2 text-gray-500 text-xs truncate">{file === "" ? "No file selected" : file.name}</p>
                {previewImage && (
                    <img src={previewImage} alt="Preview" style={{ width: "300px", height: "auto", marginTop: "10px" }} />
                )}
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
                <CustomButton type="outline" title="Logo" handleClick={() => readFile("logo")} customStyles="text-xs" />
                <CustomButton type="filled" title="Full" handleClick={() => readFile("full")} customStyles="text-xs" />
            </div>
        </div>
    );
};

export default FilePicker;
