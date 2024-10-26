import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";

// @ts-ignore
const ExpandableContentBlock = ({ title, content, direction, icon, id }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleContent = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <Fade direction={direction} triggerOnce>
            <div className={`content-block ${direction}`} id={id}>
                <h2>{title}</h2>
                {/*<img src={icon} alt={`${title} icon`} />*/}
                <p>{isExpanded ? content : `${content.substring(0, 150)}...`}</p>
                <button
                    onClick={toggleContent}
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#18216d",
                        color: "#FFF",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    {isExpanded ? "Убрать текст" : "Показать текст"}
                </button>
            </div>
        </Fade>
    );
};

export default ExpandableContentBlock;
