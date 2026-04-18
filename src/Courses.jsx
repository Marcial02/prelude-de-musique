import './css/courses.css'
import { courseImage } from './js/images'
import { HashLink } from 'react-router-hash-link';



function Courses(){
return(
    <section id='courses' className='courses-section'>
        <h1>COURSES OFFERED</h1>
         <div className='course-container'>

        <div className='course-item'>
            <HashLink to="/lessons#piano">
            <div className='course-item-text-container'>
                 <h3>Piano</h3>
            <p>Suitable for ages 4 and above</p>
            </div>
            <img src={courseImage.course1} alt="" />
            <div className='course-item-overlay'></div></HashLink>
        </div>
        <div className='course-item'>
            <HashLink to="/lessons#voice">
            <div className='course-item-text-container'>
             <h3>Voice</h3>
            <p>Suitable for ages 4 and above</p>
            </div>
            <img src={courseImage.course2} alt="" />
            <div className='course-item-overlay'></div></HashLink>
        </div>
       
        <div className='course-item'>
            <HashLink to="/lessons#violin">
            <div className='course-item-text-container'>
             <h3>Violin</h3>
             <p>Suitable for ages 5 and above</p>
             </div>
            <img src={courseImage.course3} alt="" />
            <div className='course-item-overlay'></div></HashLink>
        </div>
        <div className='course-item'>
            <HashLink to="/lessons#viola">
            <div className='course-item-text-container'>
             <h3>Viola</h3>
             <p>Suitable for ages 6 and above</p></div>
            <img src={courseImage.course4} alt="" />
            <div className='course-item-overlay'></div></HashLink>
        </div>
        <div className='course-item'>
            <HashLink to="/lessons#guitar">
            <div className='course-item-text-container'>
            <h3>Guitar</h3>
            <p>Suitable for ages 6 and above</p></div>
            <img src={courseImage.course5} alt="" />
            <div className='course-item-overlay'></div></HashLink>
        </div>
        <div className='course-item'>
            <HashLink to="/lessons#ukelele">
            <div className='course-item-text-container'>
            <h3>Ukelele</h3>
            <p>Suitable for ages 5 and above</p></div>
            <img src={courseImage.course6} alt="" />
            <div className='course-item-overlay'></div></HashLink>
        </div>
        <div className='course-item'>
            <HashLink to="/lessons#flute">
            <div className='course-item-text-container'>
            <h3>Flute</h3>
            <p>Suitable for ages 9 and above</p></div>
            <img src={courseImage.course7} alt="" />
            <div className='course-item-overlay'></div></HashLink>
        </div>
        <div className='course-item'>
            <HashLink to="/lessons#recorder">
            <div className='course-item-text-container'>
            <h3>Recorder</h3>
            <p>Suitable for ages 6 and above</p></div>
            <img src={courseImage.course8} alt="" />
            <div className='course-item-overlay'></div></HashLink>
        </div>
        <div className='course-item'>
            <HashLink to="/lessons#saxophone">
            <div className='course-item-text-container'>
            <h3>Saxophone</h3>
            <p>Suitable for ages 9 and above</p></div>
            <img src={courseImage.course9} alt="" />
            <div className='course-item-overlay'></div></HashLink>
        </div>
        <div className='course-item'>
            <HashLink to="/lessons#trumpet">
            <div className='course-item-text-container'>
            <h3>Trumpet</h3>
            <p>Suitable for ages 8 and above</p></div>
            <img src={courseImage.course10} alt="" />
            <div className='course-item-overlay'></div></HashLink>
        </div>
        <div className='course-item'>
            <HashLink to="/lessons#drum">
            <div className='course-item-text-container'>
            <h3>Drum</h3>
            <p>Suitable for ages 5 and above</p></div>
            <img src={courseImage.course11} alt="" />
            <div className='course-item-overlay'></div></HashLink>
        </div>

    </div>
    </section>
   
)

}

export default Courses