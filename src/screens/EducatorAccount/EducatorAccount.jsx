import React from 'react'
import EducatorAccountTabs from '../../components/EducatorAccountTabs/EducatorAccountTabs'
import EducatorAccountTabs2 from '../../components/EducatorAccountTabs2/EducatorAccountTabs.2';
import Header from '../../components/Header/Header';
import './EducatorAccount.scss'


export default function EducatorAccount() {
    return (
        <div>
            <Header educatorProfile />
            <div className="container content-hide">

            <EducatorAccountTabs />
            
            </div>
            <div className="container component-display">

            <EducatorAccountTabs2 />
            </div>
        </div>
    )
}
