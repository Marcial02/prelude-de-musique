import Price1 from './Price1.jsx'
function Kawit(){
    return(
        <section id='kawit' className='kawit-section section'>
            <div className='header'>
                <div className='banner'></div>
                <h1>Kawit Branch</h1>
            </div>
            <div className='intro-text'>
              <p>Thank you for choosing Prelude de Musique - Kawit Branch for your musical journey.</p>
                <p>Make sure you have already chosen a teacher and schedule that fits you before filling up the enrollment form. if you have not yet chosen a schedule please message us here.</p>
                <p>Please fill up our enrollment form accordingly, after filling up the enrollment form kindly message us on our Facebook page and let us know your start date and send the screenshot of your payment.</p>
            </div>
            <div className='column-container'>
            <Price1 />
            <div className='gform-container'>
                <iframe className='gform' src="https://docs.google.com/forms/d/e/1FAIpQLSf8gy9kJzs-STWMDs9YSJOVK9hUpWZXkpsMoNAMOL14Kq_99g/viewform" frameborder="0"></iframe>
            </div>

            </div>
        
        </section>
    )
}
export default Kawit