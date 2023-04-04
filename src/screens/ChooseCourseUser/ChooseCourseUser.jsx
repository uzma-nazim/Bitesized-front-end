import React,{useEffect,useState} from "react";
import ChooseCourseUIDesignBootcamp from "../../components/ChooseCourseUIDesignBootcamp/ChooseCourseUIDesignBootcamp";
import CustomerReviews from "../../components/CustomerReviews/CustomerReviews";
import Header from "../../components/Header/Header";
import IntroductionCard from "../../components/IntroductionCard/IntroductionCard";
import "./ChooseCourseUser.scss"
import {useParams} from 'react-router-dom';
import {baseUrl,get_course_by_id} from '../../urls'

const ChooseCourseUser = () =>{
    const {id}=useParams();
    const [isLoading , setIsLoading]=useState(false)
    const [playlist,setPlaylist]=useState({});
    const [courses,setCourses]=useState([])
    const getCourseById=async()=>{
        setIsLoading(true)
            const res=await (await fetch(`${baseUrl}${get_course_by_id}/${id}`,{
            method:"GET",
            headers:{
                'Content-Type':'application/json',
                'user_access_token':localStorage.getItem('token')
            }
        })).json();
        if(res.success){
            setPlaylist(res.playlist);
            setCourses(res.courses);
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        getCourseById();
    },[])
    return(
        <> 
            <Header userLogin/>
            {isLoading  
            ?<h1>Loading....</h1>
            :(
            <>
            {playlist}
                <ChooseCourseUIDesignBootcamp playlist={playlist}/>
                <IntroductionCard courses={courses}/>
                <CustomerReviews/>
            </>)
            }
            
        </>
    )
}

export default ChooseCourseUser;