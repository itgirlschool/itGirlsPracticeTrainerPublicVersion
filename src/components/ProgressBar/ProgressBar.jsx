import React, { useState, useEffect } from 'react';
import './ProgressBar.scss';
import progressIcon from "../../assets/images/icons/progress-bar.png";


const ProgressBar = ({value, allTasks,currentTasks}) => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        setProgress(value > 100 ? 100 : value < 0 ? 0 : value);
      }, [value]);

    return (
        <div className="progress">
            <div className="progress-icon"><img src={progressIcon} alt="" /></div>
            <div className='progress-wrapper'>
                <div className="progress-count">
                    <p className="progress-percent">30%</p>
                    <p className='progress-text'>Твой прогресс</p>
                </div>
                <div className="progress-container">
                    <div className="progress-bar">
                        <div className="progress-value"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;








