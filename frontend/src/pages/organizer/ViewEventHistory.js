import React from 'react'

function ViewEventHistory() {
    return (
        <div className='view-event-history-container'>
            <div className='hist-table d-flex flex-column justify-content-center text-center'>
                <div className='title-row history-table-data-row'>
                    <div className='event-name'>Event Name</div>
                    <div className='event-type'>Event Type</div>
                    <div className='event-location'>Location</div>
                    <div className='event-date'>Date</div>
                </div>

                <div className='date-row history-table-data-row'>
                    <div className='event-name'>Event Name</div>
                    <div className='event-type'>Event Type</div>
                    <div className='event-location'>Location</div>
                    <div className='event-date'>Date</div>
                </div>    
            </div>

            OrganizerEventHistory
        </div>
    )
}

export default ViewEventHistory;
