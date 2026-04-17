import './css/recitals.css'
import { HashLink } from 'react-router-hash-link';
import Recitals1 from './SubPages/Recitals1';

function Recitals(){
    return(
        <section id='recitals' className='section-recital section'>
             <div className='header'>
                <div className='banner'></div>
                <h1>Recitals Gallery</h1>
            </div>
            <div className='page-container'>
            <div className='recitals-gallery'>
                <HashLink to ="/recitals#r8">8th Musical Recital
          <p>December 18, 2022 at Manila Pianos Inc.</p></HashLink>
          <HashLink to ="/recitals#r9">9th Musical Recital
          <p>February 19, 2023 at Manila Pianos Inc.</p></HashLink>
          <HashLink to ="/recitals#r10">10th Musical Recital
          <p>August 13, 2023 at Manila Pianos Inc.</p></HashLink>
          <HashLink to ="/recitals#r11">11th Musical Recital
          <p>December 17, 2023 at Sunshine Place, Makati</p></HashLink>
          <HashLink to ="/recitals#r12">12th Musical Recital
          <p>July 07, 2024 at Antel Grand Village, Clubhouse</p></HashLink>
          <HashLink to ="/recitals#rm1">1st Mall Culminating Activity
          <p>August 18, 2024 at CityMall Anabu, Imus</p></HashLink>
          <HashLink to ="/recitals#r13">13th Musical Recital
          <p>December 15, 2024 at PETA Theater, Quezon City</p></HashLink>
          <HashLink to ="/recitals#r14">14th Musical Recital
          <p>July 5, 2025 at De La Salle University - Dasmariñas, Tanghalang Julian Felipe</p></HashLink>
          <HashLink to ="/recitals#r15">15th Musical Recital
          <p>December 7, 2025 at Founder's Hall, St. Paul Manila University</p></HashLink>
            </div>

            </div>
        <Recitals1/>

        </section>
    )
}
export default Recitals