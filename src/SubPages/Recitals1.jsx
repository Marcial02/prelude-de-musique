import '/src/css/recitals.css'
import { HashLink } from 'react-router-hash-link';
import { recitals8, recitals9, recitals10, recitals11, recitals12, recitalsm1, recitals13, recitals14, recitals15 } from '/src/js/recitals.js';


const RecitalCard = ({ data }) => (
    <div className='gallery-items'>
        <img src={data.image} alt="recital" />
        <p>{data.name}</p>
    </div>
);


function Recitals1(){



    return(
 <section>
        <div className='page-container'>
            <div id='r8' className='picture-gallery'>
                <h2>8th Musical Recital</h2>
                <p>December 18, 2022 at Manila Pianos Inc.</p>
          
           <div className='gallery'>
                        {/* Gamit ang pattern mo: map -> component */}
                        {recitals8.map((item) => (
                            <RecitalCard key={item.id} data={item} />
                        ))}
                    </div>

            </div>

            <div id='r9' className='picture-gallery'>
                <h2>9th Musical Recital</h2>
                <p>December 18, 2022 at Manila Pianos Inc.</p>
          
           <div className='gallery'>
                        {/* Gamit ang pattern mo: map -> component */}
                        {recitals9.map((item) => (
                            <RecitalCard key={item.id} data={item} />
                        ))}
                    </div>

            </div>

            <div id='r10' className='picture-gallery'>
                <h2>10th Musical Recital</h2>
                <p>August 13, 2023 at Manila Pianos Inc.</p>
          
           <div className='gallery'>
                        {recitals10.map((item) => (
                            <RecitalCard key={item.id} data={item} />
                        ))}
                    </div>
            </div>

            <div id='r11' className='picture-gallery'>
                <h2>11th Musical Recital</h2>
                <p>ADecember 17, 2023 at Sunshine Place, Makati</p>
          
           <div className='gallery'>
                        {recitals11.map((item) => (
                            <RecitalCard key={item.id} data={item} />
                        ))}
                    </div>
            </div>

            <div id='r12' className='picture-gallery'>
                <h2>12th Musical Recital</h2>
                <p>July 07, 2024 at Antel Grand Village, Clubhouse</p>
          
           <div className='gallery'>
                        {recitals12.map((item) => (
                            <RecitalCard key={item.id} data={item} />
                        ))}
                    </div>
            </div>

        <div id='rm1' className='picture-gallery'>
                <h2>1st Mall Culminating Activity</h2>
                <p>August 18, 2024 at CityMall Anabu, Imus</p>
          
           <div className='gallery'>
                        {recitalsm1.map((item) => (
                            <RecitalCard key={item.id} data={item} />
                        ))}
                    </div>
            </div>

            <div  id='r13'className='picture-gallery'>
                <h2>13th Musical Recital</h2>
                <p>July 07, 2024 at Antel Grand Village, Clubhouse</p>
          
           <div className='gallery'>
                        {recitals13.map((item) => (
                            <RecitalCard key={item.id} data={item} />
                        ))}
                    </div>
            </div>

            <div id='r14' className='picture-gallery'>
                <h2>14th Musical Recital</h2>
                <p>July 07, 2024 at Antel Grand Village, Clubhouse</p>
          
           <div className='gallery'>
                        {recitals14.map((item) => (
                            <RecitalCard key={item.id} data={item} />
                        ))}
                    </div>
            </div>

                <div id='r15' className='picture-gallery'>
                <h2>15th Musical Recital</h2>
                <p>July 07, 2024 at Antel Grand Village, Clubhouse</p>
          
           <div className='gallery'>
                        {recitals15.map((item) => (
                            <RecitalCard key={item.id} data={item} />
                        ))}
                    </div>
            </div>


                <div className='video-gallery'>
                    <h2></h2>
                    <div className='galley'>
                       

                    </div>
                    

                </div>



        </div>
  
    </section>
    )
   
}
export default Recitals1