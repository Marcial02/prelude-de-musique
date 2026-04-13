import {testimonials} from './js/testimonials'
import './css/testimonials.css'

const TestimonialCard = ({data}) => (
    <div className='testimonial-card'>
        <div className='card-header'>
        <img className='avatar' src={data.avatar} alt="" />
            <div className='user-info'>
                <span className='name'>{data.name}</span>
                <span className='platform'>{data.platform}</span>
            </div>
        </div>
        <span>{data.branch}</span>
        <div className='testimonial-star'>
            {data.rate && <div className='stars-row'>{[...Array(5)].map((_, i) => <span key={i} style={{ color: i < data.rate ? '#f8bc25' : '#444' }}>★</span>)}</div>}
        </div>
        <p className='content'>{data.content}</p>
        <img className='testimonials-picture' src={data.picture} alt="" />
        <a className='card-link' href={data.link} target='_blank'>see more...</a>

    </div>
)
function Testimonials () {
    return(
    <section id='testimonials' className='testimonials-section'>
        <h2 className='testimonials-section-sub-title'>Students and Parents</h2>
        <h1 className='testimonials-section-title'>TESTIMONIALS</h1>
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