import './css/footer.css'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

function Footer(){
    return(
        <section id="footer" className="footer-section">
            <div className='footer-container'>
                <ul>
                    <li><HashLink to='/#home'>Home</HashLink></li>
                    <li><HashLink to='/#courses'>Courses Offered</HashLink></li>
                    <li><Link to='/Enroll/#enroll'>Price</Link></li>
                    <li><Link to='/Enroll/#enroll'>Enroll Now</Link></li>
                    <li><HashLink to='#contact'>Contact</HashLink></li>
                </ul>
                <a className='keonite' href="https://keonite.com" target='_blank'>© Keonite.com</a>

            </div>

        </section>
    )
}

export default Footer