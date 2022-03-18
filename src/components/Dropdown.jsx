import React, {useState} from "react";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Dropdown = ({selected, setSelected}) => {
    const [isActive, setIsActive] = useState(false);
    const options = ["Hairstyle", "Makeup"];

    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
                {selected}
                <span/>
                <FontAwesomeIcon icon={faCaretDown}/>
            </div>
            {isActive && (
                <div className="dropdown-content">
                    {options.map(option => (
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