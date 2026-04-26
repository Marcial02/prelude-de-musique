import './css/footer.css'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'



function Footer(){

  const basePath = window.location.hostname === 'localhost' ? '/prelude-de-musique/' : '/';

    return(
        <section id="footer" className="footer-section">
            <div className='footer-container'>
                <ul>
                    <li><HashLink to={`${basePath}#hero`}>Home</HashLink></li>
                    <li><HashLink to='/about#about'>About</HashLink></li>
                    <li><HashLink to={`${basePath}#courses`}>Courses</HashLink></li>
                    <li><HashLink to='/Enroll#enroll'>Enroll</HashLink></li>
                    <li><HashLink to='#contact'>Contact</HashLink></li>
                </ul>
                <a className='keonite' href="https://keonite.com" target='_blank'>© 2026 Prelude de Musique | Powered by keonite.com</a>

            </div>

        </section>
    )
}

export default Footer