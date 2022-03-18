import React, {useState} from "react";

const Dropdown = ({ selected, setSelected }) => {
    const [isActive, setIsActive] = useState(false);
    const options = ["Hairstyle", "Makeup"];

    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={ () => setIsActive(!isActive)}>
                {selected}
                <span className="fas fa-caret-down"/>
            </div>
            { isActive && (
                <div className="dropdown-content">
                    { options.map(option => (
                        <div className="dropdown-item" onClick={() => {
                            setSelected(option)
                            setIsActive(false)
                        }}>
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;