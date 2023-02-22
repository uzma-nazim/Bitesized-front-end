import React from 'react'
import "./EducatorsCotent.scss";
import educatoravatar from "../../assets/educatoravatar.svg";
import educatorstar from "../../assets/educatorstar.svg";
import DownloadCSV from "../../assets/DownloadCSV.svg";

const EducatorsCotent = () => {
  return (
    <>
    <div className='maincsv'>
    <button className="CSVbtn">
          <img src={DownloadCSV} alt="" />
         <p>Download CSV</p>
        </button>
    </div>
    <div className="educatorscroll">
        <table className='maineducators'>
            <thead>
                <tr>
                <th><input className="checkboxeducators" type="checkbox" /> <span className='educatorname'>Name</span></th>
                <th>Email</th>
                <th>Account Created</th>
                <th>Ratings & Reviews</th>
                <th>**# of microcourse sold</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='educatorfont'><input className="checkboxeducator" type="checkbox" /> <img className="educatoravatar" src={educatoravatar} alt="" /> Ragina Cooper</td>
                    <td className='educatorfont'>istiaqah@gmail.com</td>
                    <td className='educatorfont'>22/01/2023</td>
                    <td className="educatorstarfont"><img className="educatorstar" src={educatorstar} alt="" /> 4.8(23 Reviews)</td>
                    <td className='educatorfont'>1.5k</td>
                    <td className='viewprofileforcenter'><button className='educatorviewprofile'>View Profile</button></td>
                </tr>
                <tr>
                    <td className='educatorfont'><input className="checkboxeducator" type="checkbox" /> <img className="educatoravatar" src={educatoravatar} alt="" /> Ragina Cooper</td>
                    <td className='educatorfont'>istiaqah@gmail.com</td>
                    <td className='educatorfont'>22/01/2023</td>
                    <td className="educatorstarfont"><img className="educatorstar" src={educatorstar} alt="" /> 4.8(23 Reviews)</td>
                    <td className='educatorfont'>1.5k</td>
                    <td className='viewprofileforcenter'><button className='educatorviewprofile'>View Profile</button></td>
                </tr>
                <tr>
                    <td className='educatorfont'><input className="checkboxeducator" type="checkbox" /> <img className="educatoravatar" src={educatoravatar} alt="" /> Ragina Cooper</td>
                    <td className='educatorfont'>istiaqah@gmail.com</td>
                    <td className='educatorfont'>22/01/2023</td>
                    <td className="educatorstarfont"><img className="educatorstar" src={educatorstar} alt="" /> 4.8(23 Reviews)</td>
                    <td className='educatorfont'>1.5k</td>
                    <td className='viewprofileforcenter'><button className='educatorviewprofile'>View Profile</button></td>
                </tr>
                <tr>
                    <td className='educatorfont'><input className="checkboxeducator" type="checkbox" /> <img className="educatoravatar" src={educatoravatar} alt="" /> Ragina Cooper</td>
                    <td className='educatorfont'>istiaqah@gmail.com</td>
                    <td className='educatorfont'>22/01/2023</td>
                    <td className="educatorstarfont"><img className="educatorstar" src={educatorstar} alt="" /> 4.8(23 Reviews)</td>
                    <td className='educatorfont'>1.5k</td>
                    <td className='viewprofileforcenter'><button className='educatorviewprofile'>View Profile</button></td>
                </tr>
                <tr>
                    <td className='educatorfont'><input className="checkboxeducator" type="checkbox" /> <img className="educatoravatar" src={educatoravatar} alt="" /> Ragina Cooper</td>
                    <td className='educatorfont'>istiaqah@gmail.com</td>
                    <td className='educatorfont'>22/01/2023</td>
                    <td className="educatorstarfont"><img className="educatorstar" src={educatorstar} alt="" /> 4.8(23 Reviews)</td>
                    <td className='educatorfont'>1.5k</td>
                    <td className='viewprofileforcenter'><button className='educatorviewprofile'>View Profile</button></td>
                </tr>
                <tr>
                    <td className='educatorfont'><input className="checkboxeducator" type="checkbox" /> <img className="educatoravatar" src={educatoravatar} alt="" /> Ragina Cooper</td>
                    <td className='educatorfont'>istiaqah@gmail.com</td>
                    <td className='educatorfont'>22/01/2023</td>
                    <td className="educatorstarfont"><img className="educatorstar" src={educatorstar} alt="" /> 4.8(23 Reviews)</td>
                    <td className='educatorfont'>1.5k</td>
                    <td className='viewprofileforcenter'><button className='educatorviewprofile'>View Profile</button></td>
                </tr>
                <tr>
                    <td className='educatorfont'><input className="checkboxeducator" type="checkbox" /> <img className="educatoravatar" src={educatoravatar} alt="" /> Ragina Cooper</td>
                    <td className='educatorfont'>istiaqah@gmail.com</td>
                    <td className='educatorfont'>22/01/2023</td>
                    <td className="educatorstarfont"><img className="educatorstar" src={educatorstar} alt="" /> 4.8(23 Reviews)</td>
                    <td className='educatorfont'>1.5k</td>
                    <td className='viewprofileforcenter'><button className='educatorviewprofile'>View Profile</button></td>
                </tr>
                <tr>
                    <td className='educatorfont'><input className="checkboxeducator" type="checkbox" /> <img className="educatoravatar" src={educatoravatar} alt="" /> Ragina Cooper</td>
                    <td className='educatorfont'>istiaqah@gmail.com</td>
                    <td className='educatorfont'>22/01/2023</td>
                    <td className="educatorstarfont"><img className="educatorstar" src={educatorstar} alt="" /> 4.8(23 Reviews)</td>
                    <td className='educatorfont'>1.5k</td>
                    <td className='viewprofileforcenter'><button className='educatorviewprofile'>View Profile</button></td>
                </tr>
            </tbody>
        </table>
    </div></>
  )
}

export default EducatorsCotent