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
                    <img src={iconImage.iconEmail} alt="" />
                    <p>preludedemusique@gmail.com</p>
                </div>
                 <div className='contact-card-s'>
                    <img src={iconImage.iconFB} alt="" />
                    <p><a href="www.facebook.com/preludedemusique">fb.com/preludedemusique</a></p>
                </div>
                </div>
                
                 <div className='contact-container-m'>
                <div className='contact-card-m'>
                    <img src={branchImage.branchImus} alt="" />
                    <h2></h2>
                    <p></p>
                </div>
                <div className='contact-card-m'>
                    <img src={branchImage.branchBacoor} alt="" />
                    <h2></h2>
                    <p></p>
                </div>
                <div className='contact-card-m'>
                    <img src={branchImage.branchKawit} alt="" />
                    <h2></h2>
                    <p></p>
                </div>
            </div>

        </section>
    )
}

export default Contact