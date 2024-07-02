import React, { useState } from 'react';
import "./tag.css"

function TagInput() {
    const [tags, setTags] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [dropdownValue, setDropdownValue] = useState('');

    const dropdownOptions = ['Option 1', 'Option 2', 'Option 3']; // Example dropdown options

    const handleAddTag = (tag) => {
        if (tag.trim() !== '') {
            setTags([...tags, tag.trim()]);
            setInputValue('');
        }
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === ' ' && inputValue.trim() !== '') {
            handleAddTag(inputValue);
        }
    };

    const handleDropdownChange = (e) => {
        setDropdownValue(e.target.value);
        handleAddTag(e.target.value)
    };

    const handleDropdownSelect = () => {
        if (dropdownValue.trim() !== '') {
            handleAddTag(dropdownValue);
            setDropdownValue('');
        }
    };

    const handleDeleteTag = (index) => {
        const newTags = [...tags];
        newTags.splice(index, 1);
        setTags(newTags);
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                    placeholder="Enter tags..."
                />
                <button onClick={() => handleAddTag(inputValue)}>Add Tag</button>
            </div>
            <div>
                <select value={dropdownValue} onChange={handleDropdownChange}>
                    <option value="">Select an option...</option>
                    {dropdownOptions.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                <button onClick={handleDropdownSelect}>Add from Dropdown</button>
            </div>
            <div>
                {tags.map((tag, index) => (
                    <span key={index} className="tag">
                        <span>{tag}</span>
                        <span style={{cursor:"pointer",marginLeft:"10px"}} onClick={() => handleDeleteTag(index)}>x</span>
                    </span>
                ))}
            </div>
        </div>
    );
}

export default TagInput;
