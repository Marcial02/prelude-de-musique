import Price1 from './Price1.jsx'
function Bacoor(){
    return(
        <section id='bacoor' className='bacoor-section'>
            <div className='header'>
                <div className='banner'></div>
                <h1>Bacoor Branch</h1>
            </div>
            <div className='intro-text'>
                <p>Thank you for choosing Prelude de Musique - Bacoor Branch for your musical journey.

Make sure you have already chosen a teacher and schedule that fits you before filling up the enrollment form. if you have not yet chosen a schedule please message us here.

Please fill up our enrollment form accordingly, after filling up the enrollment form kindly message us on our Facebook page and let us know your start date and send the screenshot of your payment.</p>
            </div>
            <div className='column-container'>
            <Price1 />
            <div className='gform-container'>
                <iframe className='gform' src="https://docs.google.com/forms/d/e/1FAIpQLSdPNIm77wJYDkAPjXO2ck69RMwr7LIG6pbPN4BlN1A0U0t8fw/viewform" frameborder="0"></iframe>
            </div>

            </div>
        
        </section>
    )
}
export default Bacoor