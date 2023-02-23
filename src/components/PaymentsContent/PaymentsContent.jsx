import React from 'react'
import "./PaymentsContent.scss";
import DownloadCSV from "../../assets/DownloadCSV.svg";
import greyball from "../../assets/greyball.svg";
import CircularProgress from '../CircularProgressiveBar/CircularProgressiveBar';
const PaymentsContent = () => {
  return (
    <>
    <div className="uihutcsvbtnflex">
        <div className='uihutflex'>
        <div className='uihutdiv'>
                <img className='greyball' src={greyball} alt="" />
            <div className="circularprogress">
          <CircularProgress percent={50}/>
            </div>
            <div>
            <p className='totalrevenue'>Total Revenue</p>
            <p className='uihutdollar'>$3.5k</p>
            </div>
        </div>

        <div className='uihutdiv'>
        <img className='greyball' src={greyball} alt="" />
        <div className="circularprogress">
          <CircularProgress percent={50}/>
            </div>
            <div>
            <p className='totalrevenue'>Total Fee Revenue</p>
            <p className='uihutdollar'>$100</p>
            </div>
        </div>
        </div>

    <div className='maincsv secondcsv'>
    <button className="CSVbtn">
          <img src={DownloadCSV} alt="" />
         <p>Download CSV</p>
        </button>
    </div>
    </div>
    <div className="educatorscroll secondclassforscroll">
        <table className='maineducators'>
            <thead>
                <tr>
                <th><input className="checkboxeducators" type="checkbox" /> <span className='educatorname'>Course</span></th>
                <th>Educator</th>
                <th>Educator Email</th>
                <th>Customer</th>
                <th>Customer Email</th>
                <th>Date Bought</th>
                <th>Total Price</th>
                <th>Stripe Transaction Link</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='educatorfont'><input className="checkboxeducator" type="checkbox" /><span className='uiuxpayment'>UI/UX Design Course</span></td>
                    <td className='educatorfont'>Istiaq Ahmed</td>
                    <td className='educatorfont'>istiaqah@gmail.com</td>
                    <td className='educatorfont'>Nure Afrin</td>
                    <td className='educatorfont'>nureafr@gmail.com</td>
                    <td className='educatorfont'>22/01/2023</td>
                    <td className='educatorfont'>$23.99</td>
                    <td className='educatorfont'>https://stripe.com/transac...</td>
                </tr>
                <tr>
                    <td className='educatorfont'><input className="checkboxeducator" type="checkbox" /><span className='uiuxpayment'>UI/UX Design Course</span></td>
                    <td className='educatorfont'>Istiaq Ahmed</td>
                    <td className='educatorfont'>istiaqah@gmail.com</td>
                    <td className='educatorfont'>Nure Afrin</td>
                    <td className='educatorfont'>nureafr@gmail.com</td>
                    <td className='educatorfont'>22/01/2023</td>
                    <td className='educatorfont'>$23.99</td>
                    <td className='educatorfont'>https://stripe.com/transac...</td>
                </tr>
                <tr>
                    <td className='educatorfont'><input className="checkboxeducator" type="checkbox" /><span className='uiuxpayment'>UI/UX Design Course</span></td>
                    <td className='educatorfont'>Istiaq Ahmed</td>
                    <td className='educatorfont'>istiaqah@gmail.com</td>
                    <td className='educatorfont'>Nure Afrin</td>
                    <td className='educatorfont'>nureafr@gmail.com</td>
                    <td className='educatorfont'>22/01/2023</td>
                    <td className='educatorfont'>$23.99</td>
                    <td className='educatorfont'>https://stripe.com/transac...</td>
                </tr>
                <tr>
                    <td className='educatorfont'><input className="checkboxeducator" type="checkbox" /><span className='uiuxpayment'>UI/UX Design Course</span></td>
                    <td className='educatorfont'>Istiaq Ahmed</td>
                    <td className='educatorfont'>istiaqah@gmail.com</td>
                    <td className='educatorfont'>Nure Afrin</td>
                    <td className='educatorfont'>nureafr@gmail.com</td>
                    <td className='educatorfont'>22/01/2023</td>
                    <td className='educatorfont'>$23.99</td>
                    <td className='educatorfont'>https://stripe.com/transac...</td>
                </tr>
                <tr>
                    <td className='educatorfont'><input className="checkboxeducator" type="checkbox" /><span className='uiuxpayment'>UI/UX Design Course</span></td>
                    <td className='educatorfont'>Istiaq Ahmed</td>
                    <td className='educatorfont'>istiaqah@gmail.com</td>
                    <td className='educatorfont'>Nure Afrin</td>
                    <td className='educatorfont'>nureafr@gmail.com</td>
                    <td className='educatorfont'>22/01/2023</td>
                    <td className='educatorfont'>$23.99</td>
                    <td className='educatorfont'>https://stripe.com/transac...</td>
                </tr>
                <tr>
                    <td className='educatorfont'><input className="checkboxeducator" type="checkbox" /><span className='uiuxpayment'>UI/UX Design Course</span></td>
                    <td className='educatorfont'>Istiaq Ahmed</td>
                    <td className='educatorfont'>istiaqah@gmail.com</td>
                    <td className='educatorfont'>Nure Afrin</td>
                    <td className='educatorfont'>nureafr@gmail.com</td>
                    <td className='educatorfont'>22/01/2023</td>
                    <td className='educatorfont'>$23.99</td>
                    <td className='educatorfont'>https://stripe.com/transac...</td>
                </tr>
                <tr>
                    <td className='educatorfont'><input className="checkboxeducator" type="checkbox" /><span className='uiuxpayment'>UI/UX Design Course</span></td>
                    <td className='educatorfont'>Istiaq Ahmed</td>
                    <td className='educatorfont'>istiaqah@gmail.com</td>
                    <td className='educatorfont'>Nure Afrin</td>
                    <td className='educatorfont'>nureafr@gmail.com</td>
                    <td className='educatorfont'>22/01/2023</td>
                    <td className='educatorfont'>$23.99</td>
                    <td className='educatorfont'>https://stripe.com/transac...</td>
                </tr>
                <tr>
                    <td className='educatorfont'><input className="checkboxeducator" type="checkbox" /><span className='uiuxpayment'>UI/UX Design Course</span></td>
                    <td className='educatorfont'>Istiaq Ahmed</td>
                    <td className='educatorfont'>istiaqah@gmail.com</td>
                    <td className='educatorfont'>Nure Afrin</td>
                    <td className='educatorfont'>nureafr@gmail.com</td>
                    <td className='educatorfont'>22/01/2023</td>
                    <td className='educatorfont'>$23.99</td>
                    <td className='educatorfont'>https://stripe.com/transac...</td>
                </tr>
                <tr>
                    <td className='educatorfont'><input className="checkboxeducator" type="checkbox" /><span className='uiuxpayment'>UI/UX Design Course</span></td>
                    <td className='educatorfont'>Istiaq Ahmed</td>
                    <td className='educatorfont'>istiaqah@gmail.com</td>
                    <td className='educatorfont'>Nure Afrin</td>
                    <td className='educatorfont'>nureafr@gmail.com</td>
                    <td className='educatorfont'>22/01/2023</td>
                    <td className='educatorfont'>$23.99</td>
                    <td className='educatorfont'>https://stripe.com/transac...</td>
                </tr>
                <tr>
                    <td className='educatorfont'><input className="checkboxeducator" type="checkbox" /><span className='uiuxpayment'>UI/UX Design Course</span></td>
                    <td className='educatorfont'>Istiaq Ahmed</td>
                    <td className='educatorfont'>istiaqah@gmail.com</td>
                    <td className='educatorfont'>Nure Afrin</td>
                    <td className='educatorfont'>nureafr@gmail.com</td>
                    <td className='educatorfont'>22/01/2023</td>
                    <td className='educatorfont'>$23.99</td>
                    <td className='educatorfont'>https://stripe.com/transac...</td>
                </tr>
                <tr>
                    <td className='educatorfont'><input className="checkboxeducator" type="checkbox" /><span className='uiuxpayment'>UI/UX Design Course</span></td>
                    <td className='educatorfont'>Istiaq Ahmed</td>
                    <td className='educatorfont'>istiaqah@gmail.com</td>
                    <td className='educatorfont'>Nure Afrin</td>
                    <td className='educatorfont'>nureafr@gmail.com</td>
                    <td className='educatorfont'>22/01/2023</td>
                    <td className='educatorfont'>$23.99</td>
                    <td className='educatorfont'>https://stripe.com/transac...</td>
                </tr>
            </tbody>
        </table>
    </div></>
  )
}

export default PaymentsContent