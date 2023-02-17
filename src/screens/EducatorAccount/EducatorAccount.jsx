import React from 'react'
import EducatorAccountTabs from '../../components/EducatorAccountTabs/EducatorAccountTabs'
import Header from '../../components/Header/Header';


export default function EducatorAccount() {
    return (
        <div>
            <Header educatorLogin />
            <div className="container">

            <EducatorAccountTabs />
            </div>
        </div>
    )
}
