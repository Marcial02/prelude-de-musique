import { useState } from 'react'
import './theme.css'
import PDEMLogo from './assets/PDEM Logo.jpg'

function Navbar (){
const [activeMenu, setActiveMenu] = useState(null);
    return(
 <nav className='navbar'>
    <div>
        {/*Brand Logo*/}
        <a href="">
        <img src={PDEMLogo} alt="" width={200} />
        </a>
    </div>
    
    <ul className='nav-links'>
        <li><a href="">About</a></li>
        
        <li 
         onMouseEnter={() => setActiveMenu ('courses')}
         onMouseLeave={() => setActiveMenu (null)}
        >
            <a href=""   > Courses Offered ▾</a>

        {activeMenu === 'courses' && (
            <ul className='dropdown-menu'>
                <li><a href="">Piano Lesson</a></li>
                <li><a href="">Voice Lesson</a></li>
                <li><a href="">Viola Lesson</a></li>
                <li><a href="">Guitar Lesson</a></li>
                <li><a href="">Ukelele Lesson</a></li>
                <li><a href="">Flute Lesson</a></li>
                <li><a href="">Saxophone Lesson</a></li>
                <li><a href="">Recorder Lesson</a></li>
                <li><a href="">Drum Lesson</a></li>
                <li><a href="">Trumphet Lesson</a></li>
            </ul>
            

        )}
        </li>


        <li><a href="">Pricing</a></li>
    </ul>

    
    <div className='nav-action'>
        <div
        onMouseEnter={() => setActiveMenu ('enroll')}
        onMouseLeave={() => setActiveMenu (null)}
        >
             <a href="">Enroll Now ▾</a>
            
        {activeMenu === 'enroll' && (
            <ul className=' dropdown-menu'>
                <li><a href="">Piano Branch</a></li>
                <li><a href="">Voice Branch</a></li>
                <li><a href="">Viola Branch</a></li>
                <li><a href="">Guitar Branch</a></li>
                <li><a href="">Ukelele Branch</a></li>
                <li><a href="">Flute Branch</a></li>
                <li><a href="">Saxophone Branch</a></li>
                <li><a href="">Recorder Branch</a></li>
                <li><a href="">Drum Branch</a></li>
                <li><a href="">Trumphet Branch</a></li>
                
            </ul>
        )}
        </div>
       
        <a href="">Contact Us</a>
    </div>
    

</nav>

    )
   
}
export default Navbar
