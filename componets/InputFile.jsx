import React from 'react';

const InputFile = ({ handleImageChange }) => {
    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (e.dataTransfer && e.dataTransfer.files.length > 0) {
            const file = e.dataTransfer.files[0];
            handleImageChange(file);
        }
    };

    return (
        <p className="field">
            <label htmlFor="image" className="drop-container">
                <span className="drop-title">Imagen</span> o
                <input
                    type="file"
                    id="image"
                    onChange={handleImageChange}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    required
                />
            </label>
        </p>
    );
};

export default InputFile;
