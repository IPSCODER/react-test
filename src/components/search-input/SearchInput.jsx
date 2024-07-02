import React, { useRef, useState } from 'react'
import "./search.css"
import useOutsideClick from '../../hooks/useOutsideClick';

const SearchInput = () => {
    const [tags, setTags] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [visible,setVisible] = useState(false)
    const [filteredOptions, setFilteredOptions] = useState([]);
    const dropdownRef = useRef(null);

    useOutsideClick(dropdownRef, () => {
      setVisible(false);
  });

    const dropdownOptions = ['Option1', 'Option2', 'Option3']; // Example dropdown options

    const handleAddTag = (tag) => {
        if (tag.trim() !== '') {
            setTags([...tags, tag.trim()]);
            setInputValue('');
        }
    };
    
    const handleInputChange = (e) => {
      const inputValue = e.target.value;
      setInputValue(inputValue.trim(" "));
      // Filter options based on input value
      const filteredOptions = dropdownOptions.filter(option =>
          option.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredOptions(filteredOptions);
      setVisible(true); // Show dropdown on input change
  };

    const handleKeyPress = (e) => {
        if (e.key === ' ' && inputValue.trim() !== '') {
            handleAddTag(inputValue);
        }
    };

    const handleDeleteTag = (index) => {
        const newTags = [...tags];
        newTags.splice(index, 1);
        setTags(newTags);
    };
  return (
    <>
    <span ref={dropdownRef} className='search-input' onClick={() => setVisible(true)} >
    {tags.map((tag, index) => (
                    <span key={index} className="tag">
                        <span>{tag}</span>
                        <span style={{cursor:"pointer",marginLeft:"10px"}} onClick={() => handleDeleteTag(index)}>x</span>
</span>))}
{tags.length !== 5 && <input type='text' value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyPress} placeholder="Enter tags..." />}
<ul className='list-style' >
{
  visible && filteredOptions.map((item)=>(
    <li key={item} onClick={()=>{handleAddTag(item); setVisible(false) }} >{item}</li>
  ))
}
</ul>
    </span>
    </>
  )
}

export default SearchInput