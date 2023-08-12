import React from 'react'
import Topbar from '../../components/common/Topbar';
import './ViewEventHistory.css';

function ViewEventHistory() {
    return (
        <div className='view-event-history-container'>
            <Topbar></Topbar>
            <div className='hist-table d-flex flex-column '>
                <div className='title-row history-table-data-row d-flex mb-4'>
                    <div className='event-name'>Event Name</div>
                    <div className='event-type'>Event Type</div>
                    <div className='event-location'>Location</div>
                    <div className='event-date'>Date</div>
                </div>

                <div className='data-row history-table-data-row d-flex'>
                    <div className='event-name'>Nadagama</div>
                    <div className='event-type'>Musical Show</div>
                    <div className='event-location'>Mathara</div>
                    <div className='event-date'>2023/03/09</div>
                </div>  
                <div className='data-row history-table-data-row d-flex'>
                    <div className='event-name'>Aluth Kalawak</div>
                    <div className='event-type'>Musical Show</div>
                    <div className='event-location'>Mathara</div>
                    <div className='event-date'>2023/03/09</div>
                </div>  
                <div className='data-row history-table-data-row d-flex'>
                    <div className='event-name'>Nadagama</div>
                    <div className='event-type'>Musical Show</div>
                    <div className='event-location'>Mathara</div>
                    <div className='event-date'>2023/03/09</div>
                </div>  
                <div className='data-row history-table-data-row d-flex'>
                    <div className='event-name'>Nadagama</div>
                    <div className='event-type'>Musical Show</div>
                    <div className='event-location'>Mathara</div>
                    <div className='event-date'>2023/03/09</div>
                </div>    
            </div>

           
        </div>
    )
}

export default ViewEventHistory;
