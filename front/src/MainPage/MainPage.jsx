import styles from './MainPage.module.scss'
import {Images} from "../images.js";
import {useEffect, useState} from "react";

export default function MainPage() {
    const [statsCard, setStatsCard] = useState([]);
    const [building, setBuilding] = useState([]);
    const [response, setResponse] = useState([]);
    const [faq, setFaq] = useState([]);
    const [loading, setLoading] = useState({building: false, response: false, faq: false});
    const [startSlice, setStartSlice] = useState({building: 0, response: 0, faq: 0});
    const [endSlice, setEndSlice] = useState({building: 3, response: 3, faq: 3});

    useEffect(() => {
        fetch('http://localhost:3000/card')
            .then(res => res.json())
            .then(data => setStatsCard(data))
        fetch('http://localhost:3000/building')
            .then(res => res.json())
            .then(data => setBuilding(data))
        fetch('http://localhost:3000/response')
            .then(res => res.json())
            .then(data => setResponse(data))
        fetch('http://localhost:3000/faq')
            .then(res => res.json())
            .then(data => setFaq(data))
    }, [])

    function viewClick (props) {
        if(!loading[props]) {
            setLoading(prev => ({ ...prev, [props]: true }));
            setStartSlice(prev => ({...prev, [props]: 0}));
            setEndSlice(prev => ({...prev, [props]: props.length}));
        }
        else{
            setLoading(prev => ({ ...prev, [props]: false }));
            setStartSlice(prev => ({...prev, [props]: 0}));
            setEndSlice(prev => ({...prev, [props]: 3}));
        }
    }
    function nextEl (props, state) {
        if(startSlice[props] < state.length -3 && endSlice[props] < state.length) {
            setStartSlice(prev => ({...prev, [props]: prev[props] + 3}))
            setEndSlice(prev => ({...prev, [props]: prev[props] + 3}))
        }
        else{
            setStartSlice(prev => ({...prev, [props]: 0}))
            setEndSlice(prev => ({...prev, [props]: 3}))
        }
    }
    function prevEl (props, state) {
        if(startSlice[props] > 0 && endSlice[props] > 3) {
            setStartSlice(prev => ({...prev, [props]: prev[props] - 3}))
            setEndSlice(prev => ({...prev, [props]: prev[props] - 3}))
        }
        else{
            setStartSlice(prev => ({...prev, [props]: state.length - 3}))
            setEndSlice(prev => ({...prev, [props]: state.length}))
        }
    }
    return (
        <main>
            <section className={styles.stats}>
                <div className={styles.top}>
                    <div className={styles.top__left}>
                        <div className={styles.info}>
                            <h1>Discover Your Dream Property with Estatein</h1>
                            <p>Your journey to finding the perfect property begins here. Explore our listings to find
                                the home that matches
                                your dreams.</p>
                            <div className={styles.button_block}>
                                <button className='learn_more'>Learn More</button>
                                <button className='browse'>Browse Properties</button>
                            </div>
                            <div className={styles.cards}>
                                <div className={styles.card}>
                                    <div className={styles.card__block}>
                                        <h2>200+</h2>
                                        <p>Happy Customers</p>
                                    </div>
                                </div>
                                <div className={styles.card}>
                                    <div className={styles.card__block}>
                                        <h2>10k+</h2>
                                        <p>Properties For Clients</p>
                                    </div>
                                </div>
                                <div className={styles.card}>
                                    <div className={styles.card__block}>
                                        <h2>16+</h2>
                                        <p>Years of Experience</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.absolute}>
                        <img src={Images.disck} alt=""/>
                    </div>
                    <div className={styles.top__right}>
                        <img src={Images.Build} alt=""/>
                    </div>
                </div>
                <div className={styles.bottom}>
                    {statsCard.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.card__block}>
                                <div className={styles.card__block__top}>
                                    <div></div>
                                    <div className={styles.image}>
                                        <img src={item.image_url} alt=""/>
                                    </div>
                                    <img src={Images.array} alt=""/>
                                </div>
                                <p>{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <div className="space"><img src={Images.forspace} alt=""/></div>
            <section className={styles.sliders}>
                <div className={styles.top}>
                    <div className={styles.top__left}>
                        <h1>Featured Properties</h1>
                        <p>Explore our handpicked selection of featured properties. Each listing offers a glimpse into
                            exceptional homes
                            and investments available through Estatein. Click "View Details" for more information.</p>
                    </div>
                    {!loading.building ? (<button onClick={() => viewClick('building')}>View All Properties</button>)
                        : (<button onClick={() => viewClick('building')}>Hide All Properties</button>)
                    }
                </div>
                <div className="half_space"></div>
                <div className={styles.middle}>
                    {building.slice(startSlice.building, endSlice.building).map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.card__block}>
                                <img src={item.image_url} alt=""/>
                                <h4>{item.title}</h4>
                                <p>{item.text}</p>
                                <div className={styles.button_cont}>
                                    <button><img src={Images.bed} alt=""/><a>{item.bed}-Bedroom</a></button>
                                    <button><img src={Images.bath} alt=""/><a>{item.bath}-Bathroom</a></button>
                                    <button><img src={Images.home} alt=""/> <a>Villa</a></button>
                                </div>
                                <div className={styles.view_block}>
                                    <div className={styles.price_block}>
                                        <p>Price</p>
                                        <h4>${item.price}</h4>
                                    </div>
                                    <button>View Property Details</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {!loading.building && (
                    <div className={styles.bottom}>
                        <div className={styles.bottom__left}>
                            <p><span>{Math.ceil(endSlice.building / 3)}</span> of {Math.ceil(building.length / 3)}</p>
                        </div>
                        <div className={styles.bottom__right}>
                            <button onClick={() => prevEl('building', building)}>←</button>
                            <button onClick={() => nextEl('building', building)}>→</button>
                        </div>
                    </div>
                )}
            </section>
            <div className="space"><img src={Images.forspace} alt=""/></div>
            <section className={styles.sliders}>
                <div className={styles.top}>
                    <div className={styles.top__left}>
                        <h1>What Our Clients Say</h1>
                        <p>Read the success stories and heartfelt testimonials from our valued clients. Discover why
                            they chose Estatein
                            for their real estate needs.</p>
                    </div>
                    {!loading.response ? (<button onClick={() => viewClick('response')}>View All Testimonials</button>)
                        : (<button onClick={() => viewClick('response')}>Hide All Testimonials</button>)
                    }
                </div>
                <div className="half_space"></div>
                <div className={styles.middle}>
                    {response.slice(startSlice.response, endSlice.response).map((item, index) => (
                        <div key={index} className={styles.response}>
                            <div className={styles.response__block}>
                                <div className={styles.response__block__top}>
                                    {[...Array(item.stars)].map((_, index) => (
                                        <img key={index} src={Images.star} alt="star"/>
                                    ))}
                                </div>
                                <div className={styles.response__block__middle}>
                                    <h3>{item.title}</h3>
                                    <h4>{item.resp}</h4>
                                </div>
                                <div className={styles.response__block__bottom}>
                                    <img src={item.profile} alt=""/>
                                    <div className={styles.text}>
                                        <h4>{item.name}</h4>
                                        <p>{item.country}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {!loading.response && (
                    <div className={styles.bottom}>
                        <div className={styles.bottom__left}>
                            <p><span>{Math.ceil(endSlice.response / 3)}</span> of {Math.ceil(response.length / 3)}</p>
                        </div>
                        <div className={styles.bottom__right}>
                            <button onClick={() => prevEl('response', response)}>←</button>
                            <button onClick={() => nextEl('response', response)}>→</button>
                        </div>
                    </div>
                )}
            </section>
            <div className="space"><img src={Images.forspace} alt=""/></div>
            <section className={styles.sliders}>
                <div className={styles.top}>
                    <div className={styles.top__left}>
                        <h1>Frequently Asked Questions</h1>
                        <p>Find answers to common questions about Estatein's services, property listings, and the real estate process.
                            We're here to provide clarity and assist you every step of the way.</p>
                    </div>
                    {!loading.faq ? (<button onClick={() => viewClick('faq')}>View All FAQ’s</button>)
                        : (<button onClick={() => viewClick('faq')}>Hide All FAQ’s</button>)
                    }
                </div>
                <div className="half_space"></div>
                <div className={styles.middle}>
                    {faq.slice(startSlice.faq, endSlice.faq).map((item, index) => (
                        <div key={index} className={styles.faq}>
                            <div className={styles.faq__block}>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                                <button>Read More</button>
                            </div>
                        </div>
                    ))}
                </div>
                {!loading.faq && (
                    <div className={styles.bottom}>
                        <div className={styles.bottom__left}>
                            <p><span>{Math.ceil(endSlice.faq / 3)}</span> of {Math.ceil(faq.length / 3)}</p>
                        </div>
                        <div className={styles.bottom__right}>
                            <button onClick={() => prevEl('faq', faq)}>←</button>
                            <button onClick={() => nextEl('faq', faq)}>→</button>
                        </div>
                    </div>
                )}
            </section>
        </main>
    )
}