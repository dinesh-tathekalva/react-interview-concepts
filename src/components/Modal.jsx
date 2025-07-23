import React, { useEffect } from "react";

const Modal = ({ isOpen, children, onclose }) => {

    useEffect(()=>{
        const handleEscape = e =>{ 
            if(e.key === "Escape")
                onclose()
        }
        window.addEventListener("keydown", handleEscape)
        return ()=>window.removeEventListener("keydown", handleEscape)
    }, [onclose])

    if(!isOpen) return
    return (
        <div className="modal-backdrop" onClick={onclose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()} >
                {children}
                <p style={{color:"black"}}>Test</p>
                <button onClick={onclose}> Close</button>
            </div>
        </div>
    )
}

export default Modal 