import Price3 from './Price3.jsx'
function Online(){
    return(
        <section id='online' className='online-section section'>
            <div className='header'>
                <div className='banner'></div>
                <h1>Online Lesson</h1>
            </div>
            <div className='intro-text'>
               <p>Thank you for choosing Prelude de Musique - Online Lesson for your musical journey.</p>
                <p>Make sure you have already chosen a teacher and schedule that fits you before filling up the enrollment form. if you have not yet chosen a schedule please message us here.</p>
                <p>Please fill up our enrollment form accordingly, after filling up the enrollment form kindly message us on our Facebook page and let us know your start date and send the screenshot of your payment.</p>
            </div>
           
            <div className='column-container'>
            <Price3 />
            <div className='gform-container'>
                <iframe className='gform' src="https://docs.google.com/forms/d/e/1FAIpQLSemFv5ZIpoV36cu5H_iOTGHIyJstcRWQaCpiTFYnlTO5_A0qg/viewform" frameborder="0"></iframe>
            </div>

            </div>
        
        </section>
    )
}
export default Online