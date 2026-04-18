import './css/enroll.css'
import { HashLink } from 'react-router-hash-link';
import {logoImage} from './js/images.js'

function Enroll(){
    return(
        <section id="enroll" className="enroll-section">
            <div className="header">
                <div className="banner"></div>
                <h1>Enroll Now</h1>
            </div>
                <div className='branch-text'>
                 <p>We cater face-to-face, online music lesson and home service. Please choose which enrollment form you wish to proceed. Please fill up the form only when your decided to proceed with enrolling with Prelude de Musique.</p>
             <p><ol>
        <p>Enrollment Process:</p>
        <li>Choose which instrument you would like to enroll in.</li>
        <li>Message us on our Facebook Page to see the available schedule of your selected teacher.</li>
        <li>Once you have selected the teacher and schedule that fits you, please fill up one of the enrollment form below.</li>
        <li>After filling up the enrollment form, please let us know by sending a message on our facebook page.</li>
    <li>Please send screenshot of payment on our facebook page.</li>
    </ol></p>
    </div>
            
            <div className="branch-container">
               
                <div className="branch-item">
                    <h2>Imus Branch</h2>
                <HashLink to="/imus#imus"><img  src={logoImage.pdem2} alt="" /></HashLink>
                </div> 
                <div className="branch-item">
                    <h2>Bacoor Branch</h2>
                <HashLink to="/bacoor#bacoor"><img  src={logoImage.pdem2} alt="" /></HashLink>
                </div>
                 <div className="branch-item">
                    <h2>Kawit Branch</h2>
                <HashLink to="/kawit#kawit"><img  src={logoImage.pdem2} alt="" /></HashLink>
                </div>
                 <div className="branch-item">
                    <h2>Damariñas Branch</h2>
                 <HashLink to="/dasmariñas#dasmariñas"><img  src={logoImage.pdem2} alt="" /></HashLink>

                </div>
                 <div className="branch-item">
                    <h2>Online</h2>
               <HashLink to="/online#online"><img  src={logoImage.pdem2} alt="" /></HashLink>

                </div>
                 <div className="branch-item">
                    <h2>Home Service</h2>
               <HashLink to="/homeservice#homeservice"><img  src={logoImage.pdem2} alt="" /></HashLink>
                </div>
            </div>
            <div className='branch-text'>
        
       
            </div>

        </section>
    )

}
export default Enroll