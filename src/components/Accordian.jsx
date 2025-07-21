import React, { useState } from "react";


const styles = {
    margin: "2em"
}

const Accordian = ({ sectionsData }) => {
    const [open, setOpen] = useState(false)

    const toggleSelection = (index) => {
        setOpen((prev) => ({
            ...prev,
            [index]: !prev[index]
        }))
    }

    return (
        <div className="App">
            {sectionsData.map((section, index) => (
                <div key={index} style={styles}>
                    <button onClick={() => toggleSelection(index)}>
                        {section.title}
                    </button>
                    {open[index] && <div>{section.contents}</div>}
                </div>
            ))

            }
        </div>
    );
}

export default Accordian