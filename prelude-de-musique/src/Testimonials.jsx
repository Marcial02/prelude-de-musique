import {testimonials} from './js/testimonials'
import './css/testimonials.css'

const TestimonialCard = ({data}) => (
    <div className='testimonial-card'>
        <div className='card-header'>
        <img src={data.avatar} alt="" />
            <div className='user-info'>
                <span className='name'>{data.name}</span>
                <span className='platform'>{data.platform}</span>
            </div>
        </div>
        <p className='content'>{data.content}</p>
        <a href={data.link}></a>

    </div>
)
function Testimonials () {
    return(
    <section className='testimonials-section'>
        <h1>Students and Parents Testimonials</h1>
        <div className='testimonial-grid'>
            {testimonials.map(
                (item)=>(
                    <TestimonialCard key={item.id} data={item} />
                )
            )}
        </div>
    </section>
)

}



export default Testimonials