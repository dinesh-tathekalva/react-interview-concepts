import React, { useState } from "react";

const Accordian1 = ({sectionsData}) => {
    const [open, setOpen] = useState(false)

    const toggleSelection = (index) =>{
        setOpen((prev) => ({
            ...prev,
            [index]: !prev[index]
        }))
    }

    return(
        <div>
            {sectionsData?.map((section, index) => {
                return(
                    <>
                    <button onClick={()=>toggleSelection(index)}>{section?.title}</button>
                    {open[index] && <div>{section?.contents}</div>}
                    </>
                )
            })}
        </div>
    )
}

export default Accordian1