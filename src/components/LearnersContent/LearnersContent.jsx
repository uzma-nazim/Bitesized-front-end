import React from 'react'
import "./LearnersContent.scss";
import DownloadCSV from "../../assets/DownloadCSV.svg";
import educatoravatar from "../../assets/educatoravatar.svg";

const LearnersContent = () => {
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
                <th><input className="checkboxeducators" type="checkbox" /> <span className='educatorname'>Full Name</span></th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Account Created</th>
                <th>**# of microcourse Bought</th>
                <th>Amount Spent</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='educatorfont'><input className="checkboxeducator" type="checkbox" /> <img className="educatoravatar" src={educatoravatar} alt="" /> Ragina Cooper</td>
                    <td className='educatorfont'>istiaqah@gmail.com</td>
                    <td className='educatorfont'>+88012838394</td>
                    <td className='educatorfont'>22/01/2023</td>
                    <td className='educatorfont'>1.5k</td>
                    <td className='educatorfont'>$1.5k</td>
                </tr>
                <tr>
                    <td className='educatorfont'><input className="checkboxeducator" type="checkbox" /> <img className="educatoravatar" src={educatoravatar} alt="" /> Ragina Cooper</td>
                    <td className='educatorfont'>istiaqah@gmail.com</td>
                    <td className='educatorfont'>+88012838394</td>
                    <td className='educatorfont'>22/01/2023</td>
                    <td className='educatorfont'>1.5k</td>
                    <td className='educatorfont'>$1.5k</td>
                </tr>
                <tr>
                    <td className='educatorfont'><input className="checkboxeducator" type="checkbox" /> <img className="educatoravatar" src={educatoravatar} alt="" /> Ragina Cooper</td>
                    <td className='educatorfont'>istiaqah@gmail.com</td>
                    <td className='educatorfont'>+88012838394</td>
                    <td className='educatorfont'>22/01/2023</td>
                    <td className='educatorfont'>1.5k</td>
                    <td className='educatorfont'>$1.5k</td>
                </tr>
                <tr>
                    <td className='educatorfont'><input className="checkboxeducator" type="checkbox" /> <img className="educatoravatar" src={educatoravatar} alt="" /> Ragina Cooper</td>
                    <td className='educatorfont'>istiaqah@gmail.com</td>
                    <td className='educatorfont'>+88012838394</td>
                    <td className='educatorfont'>22/01/2023</td>
                    <td className='educatorfont'>1.5k</td>
                    <td className='educatorfont'>$1.5k</td>
                </tr>
                <tr>
                    <td className='educatorfont'><input className="checkboxeducator" type="checkbox" /> <img className="educatoravatar" src={educatoravatar} alt="" /> Ragina Cooper</td>
                    <td className='educatorfont'>istiaqah@gmail.com</td>
                    <td className='educatorfont'>+88012838394</td>
                    <td className='educatorfont'>22/01/2023</td>
                    <td className='educatorfont'>1.5k</td>
                    <td className='educatorfont'>$1.5k</td>
                </tr>
                <tr>
                    <td className='educatorfont'><input className="checkboxeducator" type="checkbox" /> <img className="educatoravatar" src={educatoravatar} alt="" /> Ragina Cooper</td>
                    <td className='educatorfont'>istiaqah@gmail.com</td>
                    <td className='educatorfont'>+88012838394</td>
                    <td className='educatorfont'>22/01/2023</td>
                    <td className='educatorfont'>1.5k</td>
                    <td className='educatorfont'>$1.5k</td>
                </tr>
                <tr>
                    <td className='educatorfont'><input className="checkboxeducator" type="checkbox" /> <img className="educatoravatar" src={educatoravatar} alt="" /> Ragina Cooper</td>
                    <td className='educatorfont'>istiaqah@gmail.com</td>
                    <td className='educatorfont'>+88012838394</td>
                    <td className='educatorfont'>22/01/2023</td>
                    <td className='educatorfont'>1.5k</td>
                    <td className='educatorfont'>$1.5k</td>
                </tr>
                <tr>
                    <td className='educatorfont'><input className="checkboxeducator" type="checkbox" /> <img className="educatoravatar" src={educatoravatar} alt="" /> Ragina Cooper</td>
                    <td className='educatorfont'>istiaqah@gmail.com</td>
                    <td className='educatorfont'>+88012838394</td>
                    <td className='educatorfont'>22/01/2023</td>
                    <td className='educatorfont'>1.5k</td>
                    <td className='educatorfont'>$1.5k</td>
                </tr>
            </tbody>
        </table>
    </div></>
  )
}

export default LearnersContent