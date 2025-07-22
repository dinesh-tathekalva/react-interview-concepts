import React, { useState, useEffect } from 'react'
function ProgressBar() {

    const [progress, setProgress] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => prev < 100 ? prev + 10 : 100)
        }, 1000)
        return (() => clearInterval(interval))
    }, [])

    return (
        <div className='bar'>
            <div className='bar-contents' style={{ width: `${progress}%` }}></div>
        </div>
    );
}

export default ProgressBar;