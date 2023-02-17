import React from 'react'
import EducatorAccountTabs from '../../components/EducatorAccountTabs/EducatorAccountTabs'
import EducatorAccountTabs2 from '../../components/EducatorAccountTabs2/EducatorAccountTabs.2';
import Header from '../../components/Header/Header';


export default function EducatorAccount() {
    return (
        <div>
            <Header educatorLogin />
            <div className="container">

            {/* <EducatorAccountTabs /> */}
            <EducatorAccountTabs2 />
            </div>
        </div>
    )
}
