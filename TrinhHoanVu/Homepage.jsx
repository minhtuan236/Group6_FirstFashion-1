
import { useNavigate } from "react-router-dom";

function Homepage(clicked) {
    const navigate = useNavigate();

    return (
        <div>
            <div className={`home-chanel-banner ${clicked ? 'clicked' : ''}`}>
                <div className='homepage-banner-title'>
                    <h1 className='home-chanelbanner-title'>CHANEL</h1>
                    <h4 className='home-chanelbanner-speech'>Fashion changes, but style endures.</h4>
                    <button className="home-seemore" onClick={() => navigate('/chanel')}>See More</button>
                </div>
            </div>

            <div className={`home-gucci-banner ${clicked ? 'clicked' : ''}`}>
                <div className='homepage-banner-title'>
                    <h1 className='home-chanelbanner-title'>GUCCI</h1>
                    <h4 className='home-chanelbanner-speech'>Quality Is remembered long after price is forgotten.</h4> <br />
                    <button className="home-seemore" onClick={() => navigate('/gucci')}>See More</button>
                </div>
            </div>
            <div className={`home-hermes-banner ${clicked ? 'clicked' : ''}`}>
                <div className='homepage-banner-title'>
                    <h1 className='home-chanelbanner-title'>HERMES</h1>
                    <h4 className='home-chanelbanner-speech'>You dreamt it up. Hermes makes it happen.</h4>
                    <button className="home-seemore" onClick={() => navigate('/hermes')}>See More</button>
                </div>
            </div>
            <div className="home-contact">
                <table className="home-email-contact">
                    <tr className="homepage-contact-information3">
                        <td className={`homepage-contact-information ${clicked ? 'clicked' : ''}`}>
                            FIRST FASHION Customer Care is available Monday to Sunday, <br />
                            7 AM to 12 AM ET. to answer all your questions.
                            <br /><br />
                            Please call 0123.456.789 with a FIRST FASHION Advisor
                        </td>
                        <td className={`homepage-contact-information2 ${clicked ? 'clicked' : ''}`}>
                            NEWSLETTER <br />
                            Subscribe to receive news from FIRST FASHION <br />
                            <form onSubmit={(event) => { event.preventDefault() }}>
                                <input type="email" placeholder="&#x2709; Email" className={`hompage-contact-emailbutton ${clicked ? 'clicked' : ''}`} />
                                <button type="submit" className={`home-mail-submit-button ${clicked ? 'clicked' : ''}`}>OK</button> <br />
                            </form>
                            <br />
                            <div className={`home-provacy ${clicked ? 'clicked' : ''}`}>By clicking OK, I agree to FIRST FASHION 's <br />
                                Privacy Policy
                                and
                                Legal Statement
                                .</div>
                        </td>
                    </tr>
                </table>
            </div>
            <div className="homepage-googlemap">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.325247630613!2d106.66372207465906!3d10.786382259010797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed23c80767d%3A0x5a981a5efee9fd7d!2zNTkwIMSQLiBDw6FjaCBN4bqhbmcgVGjDoW5nIDgsIFBoxrDhu51uZyAxMSwgUXXhuq1uIDMsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1699950205576!5m2!1svi!2s"
                    width="100%" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="google" title="google"></iframe>
            </div>

        </div>
    );
}

export default Homepage;
