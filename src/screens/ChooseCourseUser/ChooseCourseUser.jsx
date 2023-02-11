import React from "react";
import ChooseCourseUIDesignBootcamp from "../../components/ChooseCourseUIDesignBootcamp/ChooseCourseUIDesignBootcamp";
import CustomerReviews from "../../components/CustomerReviews/CustomerReviews";
import Header from "../../components/Header/Header";
import IntroductionCard from "../../components/IntroductionCard/IntroductionCard";
import "./ChooseCourseUser.scss"

const ChooseCourseUser = () =>{
    return(
        <>
            <Header userLogin/>
            <ChooseCourseUIDesignBootcamp/>
            <IntroductionCard/>
            <CustomerReviews/>
        </>
    )
}

export default ChooseCourseUser;