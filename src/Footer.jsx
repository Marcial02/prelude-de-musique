import './css/footer.css'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

function Footer(){
    return(
        <section id="footer" className="footer-section">
            <div className='footer-container'>
                <ul>
                    <li><HashLink to=''>Home</HashLink></li>
                    <li><HashLink to=''>Courses Offered</HashLink></li>
                    <li><Link to=''>Price</Link></li>
                    <li><Link to=''>Enroll Now</Link></li>
                    <li><HashLink to=''>Contact</HashLink></li>
                </ul>
                <a className='keonite' href="keonite.com">© Keonite.com</a>

            </div>

        </section>
    )
}

export default Footer