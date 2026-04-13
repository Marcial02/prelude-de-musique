import './css/teachers.css'
import {teachersImage} from './js/images.js'


function Teachers(){
return(
    <section id='teachers' className='teachers-section'>
        <h1><span className='text-color'>PDEM</span> TEACHERS</h1>
         <div className='teachers-container'>

        <div className='teachers-item'>
            <a href="">
            <div className='teachers-item-text-container'>
                 <h3>Laurice Anne Caronan</h3>
            <p>Piano, Voice, Violin and Drum Teacher</p>
            </div>
            <img className='teachers1-img' src={teachersImage.teachers1} alt="" />
            <div className='teachers-item-overlay'></div></a>
        </div>
        <div className='teachers-item'>
            <a href="">
            <div className='teachers-item-text-container'>
             <h3>Mary Ann Elman</h3>
            <p>Piano, Voice, Flute and Recorder Teacher</p>
            </div>
            <img className='teachers2-img' src={teachersImage.teachers2} alt="" />
            <div className='teachers-item-overlay'></div></a>
        </div>
       
        <div className='teachers-item'>
            <a href="">
            <div className='teachers-item-text-container'>
             <h3>Mark Limuel Lontoc</h3>
             <p>Piano, Guitar, Ukulele and Drum Teacher</p>
             </div>
            <img src={teachersImage.teachers3} alt="" />
            <div className='teachers-item-overlay'></div></a>
        </div>
        <div className='teachers-item'>
            <a href="">
            <div className='teachers-item-text-container'>
             <h3>Patrick Amago</h3>
             <p>Piano, Violin and Guitar Teacher</p></div>
            <img src={teachersImage.teachers4} alt="" />
            <div className='teachers-item-overlay'></div></a>
        </div>
        <div className='teachers-item'>
            <a href="">
            <div className='teachers-item-text-container'>
            <h3>John Paul R. Calizon</h3>
            <p>Flute, Saxophone and Piano Teacher</p></div>
            <img src={teachersImage.teachers5} alt="" />
            <div className='teachers-item-overlay'></div></a>
        </div>
        <div className='teachers-item'>
            <a href="">
            <div className='teachers-item-text-container'>
            <h3>Junelle M. Mordoquio </h3>
            <p>Voice and Piano Teacher</p></div>
            <img src={teachersImage.teachers6} alt="" />
            <div className='teachers-item-overlay'></div></a>
        </div>
        <div className='teachers-item'>
            <a href="">
            <div className='teachers-item-text-container'>
            <h3>Hans Ella Daniel L. Amba</h3>
            <p>SVoice, Drum and Piano Teacher</p></div>
            <img src={teachersImage.teachers7} alt="" />
            <div className='teachers-item-overlay'></div></a>
        </div>
        <div className='teachers-item'>
            <a href="">
            <div className='teachers-item-text-container'>
            <h3>Sheila Angela R. Reyes</h3>
            <p>Violin and Piano Teacher</p></div>
            <img src={teachersImage.teachers8} alt="" />
            <div className='teachers-item-overlay'></div></a>
        </div>
        <div className='teachers-item'>
            <a href="">
            <div className='teachers-item-text-container'>
            <h3>Kim P. Yutadco</h3>
            <p>Piano and Trumpet Teacher</p></div>
            <img src={teachersImage.teachers9} alt="" />
            <div className='teachers-item-overlay'></div></a>
        </div>
        <div className='teachers-item'>
            <a href="">
            <div className='teachers-item-text-container'>
            <h3>Dennis Lopez</h3>
            <p>SDrum and Guitar Teacher</p></div>
            <img src={teachersImage.teachers10} alt="" />
            <div className='teachers-item-overlay'></div></a>
        </div>

    </div>
    </section>
   
)

}

export default Teachers