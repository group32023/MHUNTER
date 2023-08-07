import React from 'react'
import "../../assets/css/OrganizerComplaint.css"
import Topbar from '../../components/common/Topbar';

function OrganizerComplaint() {
    return (
        <div className='complaint_content_container'>
            <Topbar />

            <div className='complaint_content_container_main_row row mt-4 p-3'>
                <div className='complaintForm col-md-4 p-3'>
                    <div className="p-4 text-center">
                        <p className='fs-5' style={{ fontFamily: 'MyCustomFont1' }}>Complaint Form</p>
                        <hr></hr>
                    </div>
                </div>

                <div className='complaintTableDiv col-md-7 p-3 mx-4'>
                    content
                </div>

            </div>
        </div>
    )
}

export default OrganizerComplaint