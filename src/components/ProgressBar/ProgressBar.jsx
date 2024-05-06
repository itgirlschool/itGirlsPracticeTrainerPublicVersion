//import React, { useState, useEffect } from 'react';
import './ProgressBar.scss';
import ProgressBarSVG from "../ProgressBarSVG/ProgressBarSVG"


const ProgressBar = ({allTasks, currentTask}) => {
    const progress = (currentTask / allTasks * 100).toFixed(0);
    
    return (
        <div className="progress">
            <div className="progress-icon"><ProgressBarSVG/></div>
            <div className='progress-wrapper'>
                <div className="progress-count">
                    <p className="progress-percent">{progress}%</p>
                    <p className='progress-text'>Твой прогресс</p>
                </div>
                <div className="progress-container">
                    <div className="progress-bar">
                        <div className="progress-value" style={{ width: `${progress}%` }} ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;








