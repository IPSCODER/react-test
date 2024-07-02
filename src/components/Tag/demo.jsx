import React, { useState } from 'react';
import "./tag.css"

function TagInput() {
    const [tags, setTags] = useState([]);
    const [inputValue, setInputValue] = useState('');

    // Function to handle adding a tag
    const handleAddTag = () => {
        if (inputValue.trim() !== '') {
            setTags([...tags, inputValue.trim()]);
            setInputValue(''); // Clear input field after adding tag
        }
    };

    // Function to handle input change
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    // Function to handle key press (for adding tags on space)
    const handleKeyPress = (e) => {
        if (e.key === ' ' && inputValue.trim() !== '') {
            handleAddTag();
        }
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
                <button onClick={handleAddTag}>Add Tag</button>
            </div>
            <div>
                {tags.map((tag, index) => (
                    <span key={index} className="tag">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default TagInput;
