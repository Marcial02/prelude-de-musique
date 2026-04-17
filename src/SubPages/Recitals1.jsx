import '/src/css/recitals.css'
import { HashLink } from 'react-router-hash-link';
import { recitals8, recitals9 } from '/src/js/recitals.js';


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
            <div className='picture-gallery'>
                <h2>8th Musical Recital</h2>
                <p>December 18, 2022 at Manila Pianos Inc.</p>
          
           <div className='gallery'>
                        {/* Gamit ang pattern mo: map -> component */}
                        {recitals8.map((item) => (
                            <RecitalCard key={item.id} data={item} />
                        ))}
                    </div>

            </div>

            <div className='picture-gallery'>
                <h2>9th Musical Recital</h2>
                <p>December 18, 2022 at Manila Pianos Inc.</p>
          
           <div className='gallery'>
                        {/* Gamit ang pattern mo: map -> component */}
                        {recitals9.map((item) => (
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