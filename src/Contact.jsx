import './css/contact.css'
import {iconImage, branchImage} from './js/images.js'

function Contact (){
    return(
        <section id='contact' className='contact-section'>
            
            <h1>CONTACTS</h1>

            <div className='contact-container-s'>
               
                <div className='contact-card-s'>
                    <img src={iconImage.iconPhone} alt="" />
                    <p>046-8943586 - Kawit Branch <br />
                        046-4241001  - Imus Branch <br />
                        09171257336 / 09778324495</p>
                </div>
                <div className='contact-card-s'>
                    <a href="mailto:preludedemusique@gmail.com"><img src={iconImage.iconEmail} alt="" /></a>
                     <a href="mailto:preludedemusique@gmail.com"><p>preludedemusique@gmail.com</p></a>
                </div>
                 <div className='contact-card-s'>
                    <a href="https://www.facebook.com/preludedemusique"><img src={iconImage.iconFB} alt="" /></a>
                    <p><a href="https://www.facebook.com/preludedemusique">preludedemusique</a></p>
                </div>
                <div className='contact-card-s'>
                    <a href="https://www.youtube.com/@preludedemusique"><img src={iconImage.iconYT} alt="" /></a>
                    <p><a href="https://www.youtube.com/@preludedemusique">@preludedemusique</a></p>
                </div>
                </div>
                
                 <div className='contact-container-m'>
                <div className='contact-card-m'>
                    <a href=""><img src={branchImage.branchImus} alt="" /></a>
                    <h2>Imus Branch</h2>
                    <p>2nd Floor A.V. Lim Property Leasing, # 9073 Gen. Aguinaldo Highway Anabu 2D ,Imus Cavite  
Landmark: Bristol Motorcycle / Infront of International British Academy</p>
                </div>
                <div className='contact-card-m'>
                    <a href=""><img src={branchImage.branchBacoor} alt="" /></a>
                    <h2>Bacoor Branch</h2>
                    <p>2nd Floor, JUMPH Building molino rd. cor Macaria Ave. , Molino 2 Bacoor Cavite
Landmark: Infront of Mcdonald</p>
                </div>
                <div className='contact-card-m'>
                    <a href=""><img src={branchImage.branchKawit} alt="" /></a>
                    <h2>Kawit Branch</h2>
                    <p>Rhd Commercial Stall, Kalayaan Road  Brgy. San Sebastian , Kawit Cavite
Landmark: Total Gas Station / Near Lancaster New City</p>
                </div>
            </div>

        </section>
    )
}

export default Contact