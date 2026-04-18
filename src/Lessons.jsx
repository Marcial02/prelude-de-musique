import './css/lessons.css'
import { courseImage } from './js/images.js' 

function Lesson(){
    return(
        <section id='piano' className='lessons-section section'>
            <div className='header'>
                <div className='banner'></div>
                <h1>Choose Your Intruments</h1>
            </div>

            <div className='page-container'>


                <div id='piano' className='instrument-container'>
                    <div className='instrument-text'>
                    <h2>Piano Lesson</h2>
                    <p>Piano is considered an ideal instrument for all ages. It is one of the easiest and most user-friendly instrument. As early as  age four is recommended to start their music journey.</p>
                    <p>Learning music at an early age can make structural changes within the brain that develops with you for the rest of your life. </p>
                    <p>Here in PDEM we build a firm foundation and understanding of music. We ensure to impart their knowledge on music Theory(Note Reading), Rhythm, Scales, Piano Techniques, Memory Training, Efficient Practice, Chords, Ear Training and other related performance practices.</p>
                    <p>Playing the piano can improve your overall aural awareness no matter where you fall in this range. Playing the piano trains you to recognize tones, intervals, and chords as well as helping you to develop a sense of pitch. </p>
                    <p>Furthermore, piano playing offers different physical and physiological advantages to players. It sharpens fine motor skills, improves dexterity and hand-eye coordination. Playing the piano also makes your hands and arm muscles much stronger than the average person.</p>
                    </div>
                    <div className='instrument-img'>
                        <img src={courseImage.course1} alt="" />
                    </div>
                </div>


                <div id='voice' className='instrument-container'>
                    <div className='instrument-text'>
                    <h2>Voice Lesson</h2>
                    <p>If you are passionate about singing and want to build a connection and confidence performing or perhaps the child has inclination in music, well then we are here to provide you a quality music education for your child.  </p>
                    <p>Whatever the reason, voice lessons can prove to be just perfect! Whether you are looking forward in developing your passion in singing to a career, a hobby, and to the professional level. </p>
                    <p>Learning to sing is not just about sounding good. There’s so much more to learn! The repertoires from pop, broadway, or to the very artistic art songs and arias will hone your singing skills. Together with our PDEM Voice teachers, they will bring out that passion and talent to the next level in reaching new heights.</p>
                    
                    </div>
                    <div className='instrument-img'>
                        <img src={courseImage.course2} alt="" />
                    </div>
                </div>

                <div id='violin' className='instrument-container'>
                    <div className='instrument-text'>
                    <h2>Violin Lesson</h2>
                    <p>The Violin is one of popular instrument to learn because of its beautiful tone.</p>
                    <p>Here in PDEM we build a firm foundation and understanding of music. We ensure to impart their knowledge on music theory(Note Reading), Bowing with proper posture and finger techniques, Pulse (Understanding rhythm will never be a problem), Phonology and personality (of the music)</p>
                    <p>Here are some benefits of learning violin - Improves Coordination/Dexterity, Enhances The Understanding Of Music, Yields Transferable Skills To All Other String Instruments, Improves Discipline & Concentration,Builds Confidence and others..</p>
                    </div>
                    <div className='instrument-img'>
                        <img src={courseImage.course3} alt="" />
                    </div>
                </div>

                <div id='viola' className='instrument-container'>
                    <div className='instrument-text'>
                    <h2>Viola Lesson</h2>
                    <p>is a string instrument that is bowed, plucked, or played with varying techniques. Slightly larger than a violin, it has a lower and deeper sound. </p>
                    <p> The technique required for playing a viola has certain differences compared with that of a violin, partly because of its larger size: the notes are spread out farther along the fingerboard and often require different fingerings. The viola's less responsive strings and the heavier bow warrant a somewhat different bowing technique, and a violist has to lean more intensely on the strings.</p>
                    <p>Same with Violin, here in PDEM we build a firm foundation and understanding of music. We ensure to impart their knowledge on music theory(Note Reading), Bowing with proper posture and finger techniques, Pulse (Understanding rhythm will never be a problem), Phonology and personality (of the music).</p>
                    
                    </div>
                    <div className='instrument-img'>
                        <img src={courseImage.course4} alt="" />
                    </div>
                </div>

                                <div id='guitar' className='instrument-container'>
                    <div className='instrument-text'>
                    <h2>Guitar Lesson</h2>
                    <p>A guitar is a musical instrument with six strings and a long neck. You play the guitar by plucking or strumming the strings.</p>
                    <p>The guitar is a very versatile instrument that can be used to make many types of music. It’s also a very accessible instrument that is made in huge quantities each year. Their polyphonic design and tuning arrangements allow for a dynamic experience. This is very attractive to musicians.</p>
                    <p>Playing the guitar is a great way to relieve stress. It can also help you connect with other people who share your passion for music. Playing guitar can also improve your coordination and fine motor skills. In addition, research has shown that playing guitar can improve your memory and cognitive skills. Playing guitar is also a great way to express yourself creatively. And last but not least, playing guitar can be a great way to boost your self-confidence.</p>

                    </div>
                    <div className='instrument-img'>
                        <img src={courseImage.course5} alt="" />
                    </div>
                </div>

                                <div id='ukelele' className='instrument-container'>
                    <div className='instrument-text'>
                    <h2>Ukelele Lesson</h2>
                    <p>Ukuleles are beginner friendly, can boost IQ, and can help increase focus and discipline. It can also be a stress reliever, promotes good posture, and it can give a sense of accomplishment.</p>
                    <p>Ukuleles are so popular these days, not only because it's smaller than a guitar, easy to transport, simple to learn, and with a cheerful and fun sound. In recent years, the ukulele – sometimes abbreviated to ‘uke’ – has won the hearts of many people. Even the word ukulele, meaning ‘hopping flea’ in the Hawaiian language, sounds fun. This term most likely refers to the speed with which it is played, with the fingers moving very quickly across the strings. </p>
                    <p>The ukulele is a string instrument that originated in Portugal in the second century B.C. With a small, guitar-shaped body that is fitted with four strings, it is considered a member of the chordophone family. Sound is produced through these instruments by plucking and strumming the strings. The strings in turn vibrate and are amplified by the resonating body. The ukulele is manufactured in a similar way as a full size guitar.</p>
                    </div>
                    <div className='instrument-img'>
                        <img src={courseImage.course6} alt="" />
                    </div>
                </div>

                                <div id='flute' className='instrument-container'>
                    <div className='instrument-text'>
                    <h2>Flute Lesson</h2>
                    <p>The flute is a long, narrow instrument most often made out of silver-tone metal. It produces a light, cheerful sound.</p>
                    <p>The flute has a lovely mellow breathy sound that brightens as it ascends in pitch. Flutes were known to exist in ancient civilizations. Over the years, they have been made of wood or metal which produces a light, cheerful sound.</p>
                    <p>Among many health benefits, it notably promotes good posture, proper and healthy breathing, core strengthand control, and finger dexterity. Flute requires a high degree of patience and discipline, which happen to be necessary attributes for academic excellence and good work ethic.</p>
                    <p>Becoming a skilled flautist takes time, dedication, humility and a willingness to improve continually. From the mechanics to the in-depth theory, learning to play the flute is a fun way to learn music and also develop discipline and concentration.</p>
                    </div>
                    <div className='instrument-img'>
                        <img src={courseImage.course7} alt="" />
                    </div>
                </div>

                                <div id='recorded' className='instrument-container'>
                    <div className='instrument-text'>
                    <h2>Recorder Lesson</h2>
                    <p>The recorder is a whistle-type woodwind instrument that is from an ancient family of instruments called the internal duct flutes.</p>
                     <p>Recorders are played in many elementary schools and can be a wonderful instrument to learn on its own or as an introductory band instrument. </p>
                     <p>The recorder is an invaluable instrument for improving all aspects of musicality and an excellent pre-band instrument. Many skills are learned from the playing of the recorder, such as fingering skills, embouchure development, breath support, articulation, and development of the inner ear.</p>
                     </div>
                    <div className='instrument-img'>
                        <img src={courseImage.course8} alt="" />
                    </div>
                </div>

                <div id='saxophone' className='instrument-container'>
                    <div className='instrument-text'>
                    <h2>Saxophone Lesson</h2>
                    <p>Saxophone is a type of single reed woodwind instrument with a conical body usually made of brass and one of the more well known musical instrument in the world, being a staple in jazz, big band, marching band and some classical and even pop. There are health benefits when playing a saxophone: Strengthen your lungs because you're breathing in and out through an instrument that requires you to use your diaphragm, strengthening mental muscles when playing music the mind can be trained like any other muscles in the body through repetition, proactive and hard work, Develops your lips & tongue muscles playing the mouthpiece requires a great deal of lip strength and control, stress reliever.</p>
                    <p>Playing Saxophone has been proven to be one of the best ways to relieve stress from everyday life problem, help improve memory function which reduces the risk of developing alzheimer's disease. It improves balance and coordination, sculpting your body. Playing saxophone is a form of excercise, the saxophone is heavy so you'll be using your muscles to hol it up and breathe into it, this can help with weight loss. It gives you a better posture, boost energy levels as well as reduces stress hormones in individuals who have difficulty sleeping and who suffers from anxiety or depression.</p>
                   
                    </div>
                    <div className='instrument-img'>
                        <img src={courseImage.course9} alt="" />
                    </div>
                </div>

                <div id='trumpet' className='instrument-container'>
                    <div className='instrument-text'>
                    <h2>Trumpet Lesson</h2>
                    <p>Beginner trumpet lessons focus on establishing proper posture, creating a steady "buzz" with the lips, and mastering basic articulation ("doo/too") to produce sound. Key basics include holding the instrument with the left hand while operating valves with the right, aiming for consistent airflow.</p>
                    </div>
                    <div className='instrument-img'>
                        <img src={courseImage.course10} alt="" />
                    </div>
                </div>

                <div id='drum' className='instrument-container'>
                    <div className='instrument-text'>
                    <h2>Drum Lesson</h2>
                    <p>A “drum kit” is a set of drums, cymbals, and other percussion instruments that one person, typically seated, plays with a pair of drumsticks. Drums can be found anywhere in the world and in very ancient cultures, which suggests these musical instruments have a very ancient history.</p>
                    <p>In an band set up, the drummer lays the foundations, provides the pulse and brings the groove for the track, letting the rest of the band express themselves creatively. The beat of the track ties everyone together and the drummer proving themselves as a reliable timekeeper breeds trust amongst other players, ultimately leading to better music.</p>
                    <p>Learning to play drums can reduce stress, boost brain power, increase academic performance, develop confidence, and motor skill development. Playing the drums can help people express themselves and get in touch with their emotional state. Drumming helps us connect to our core, enhances our sense of empowerment and stimulates our creative expression.</p>                    
                    </div>
                    <div className='instrument-img'>
                        <img src={courseImage.course11} alt="" />
                    </div>
                </div>



            </div>
            
        </section>
    )
}
export default Lesson