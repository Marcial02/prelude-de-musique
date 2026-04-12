import { defaultClientConditions } from 'vite'
import {testimonials} from './js/testimonials'

const testimonialCard = ({data}) => (
    <div className='testimonial-card'>
        <div className='card-header'>
        <img src={data.avatar} alt="" />
            <div className='user-info'>
                <span className='name'>{data.name}</span>
                <span className='platform'>{data.platform}</span>
            </div>
        </div>
        <p className='content'>{data.content}</p>
        <a href={link}></a>

    </div>
)
function Testimonials () {
    return(
    <section>
        <h1>Students and Parents Testimonials</h1>
        <div className='testimonial-grid'>
            {testimonials.map(
                (item)=>(
                    <testimonialCard key={item} data={item} />
                )
            )}
        </div>
    </section>
)

}



export default Testimonials