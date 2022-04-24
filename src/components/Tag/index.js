import './Tag.css';
import { useState } from 'react';

const Tag = ({tagText}) => {
    const [activeTag, setActiveTag] = useState(false);
    const onToggle = () => {
        setActiveTag(activeTag => !activeTag);
    }
    return (
        <span onClick={()=>onToggle()} className={activeTag ? 'active tags' : "tags" }>{tagText}</span>
    ) 
}

export default Tag;