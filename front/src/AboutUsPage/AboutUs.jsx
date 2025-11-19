import {Images} from "../images.js";
import styles from './AboutUs.module.scss'
import {stepsData, teamData} from "../data.js";
import {useEffect, useState} from "react";


export default function AboutUs() {
    const [client, setClient] = useState([]);
    const [loading, setLoading] = useState({client: false,});
    const [startSlice, setStartSlice] = useState({client: 0,});
    const [endSlice, setEndSlice] = useState({client: 2,});

    useEffect(() => {
        fetch('http://localhost:3000/client')
            .then(res => res.json())
            .then(data => setClient(data))
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
            setEndSlice(prev => ({...prev, [props]: 2}));
        }
    }
    function nextEl (props, state) {
        if(startSlice[props] < state.length -2 && endSlice[props] < state.length) {
            setStartSlice(prev => ({...prev, [props]: prev[props] + 2}))
            setEndSlice(prev => ({...prev, [props]: prev[props] + 2}))
        }
        else{
            setStartSlice(prev => ({...prev, [props]: 0}))
            setEndSlice(prev => ({...prev, [props]: 2}))
        }
    }
    function prevEl (props, state) {
        if(startSlice[props] > 0 && endSlice[props] > 2) {
            setStartSlice(prev => ({...prev, [props]: prev[props] - 2}))
            setEndSlice(prev => ({...prev, [props]: prev[props] - 2}))
        }
        else{
            setStartSlice(prev => ({...prev, [props]: state.length - 2}))
            setEndSlice(prev => ({...prev, [props]: state.length}))
        }
    }
    return (
        <main>
            <div className="space"><img src={Images.forspace} alt=""/></div>
            <section className={styles.journey}>
                <div className={styles.journey__left}>
                    <div className={styles.journey__left__top}>
                        <h1>Our Journey</h1>
                        <p>Our story is one of continuous growth and evolution. We started as a small team with big
                            dreams, determined
                            to create a real estate platform that transcended the ordinary. Over the years, we've
                            expanded our reach,
                            forged valuable partnerships, and gained the trust of countless clients.</p>
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
                <div className={styles.journey__right}>
                    <img src={Images.house} alt=""/>
                </div>
            </section>
            <div className="space"><img src={Images.forspace} alt=""/></div>
            <section className={styles.values}>
                <div className={styles.values__left}>
                    <h1>Our Values</h1>
                    <p>Our story is one of continuous growth and evolution. We started as a small team with big dreams,
                        determined to
                        create a real estate platform that transcended the ordinary.</p>
                </div>
                <div className={styles.values__right}>
                    <div className={styles.values__right__block}>
                        <div className={styles.cards}>
                            <div className={styles.card}>
                                <div className={styles.card__top}>
                                    <img src={Images.values1} alt=""/>
                                    <h3>Trust</h3>
                                </div>
                                <p>Trust is the cornerstone of every successful real estate transaction.</p>
                            </div>
                            <div className={styles.vertical}></div>
                            <div className={styles.card}>
                                <div className={styles.card__top}>
                                    <img src={Images.values2} alt=""/>
                                    <h3>Excellence</h3>
                                </div>
                                <p>We set the bar high for ourselves. From the properties we list to the services we
                                    provide.</p>
                            </div>
                            <div className={styles.horizontal}></div>
                            <div className={styles.card}>
                                <div className={styles.card__top}>
                                    <img src={Images.values3} alt=""/>
                                    <h3>Client-Centric</h3>
                                </div>
                                <p>Your dreams and needs are at the center of our universe. We listen, understand.</p>
                            </div>
                            <div className={styles.vertical}></div>
                            <div className={styles.card}>
                                <div className={styles.card__top}>
                                    <img src={Images.values4} alt=""/>
                                    <h3>Our Commitment</h3>
                                </div>
                                <p>We are dedicated to providing you with the highest level of service, professionalism,
                                    and support.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="space"><img src={Images.forspace} alt=""/></div>
            <section className={styles.achievements}>
                <div className={styles.achievements__top}>
                    <h1>Our Achievements</h1>
                    <p>Our story is one of continuous growth and evolution. We started as a small team with big dreams,
                        determined to create
                        a real estate platform that transcended the ordinary.</p>
                </div>
                <div className={styles.achievements__bottom}>
                    <div className={styles.card}>
                        <div className={styles.card__block}>
                            <div className={styles.card__block__space}>
                                <h2>3+ Years of Excellence</h2>
                                <p>With over 3 years in the industry, we've amassed a wealth of knowledge and
                                    experience, becoming
                                    a go-to resource for all things real estate.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.card__block}>
                            <div className={styles.card__block__space}>
                                <h2>Happy Clients</h2>
                                <p>Our greatest achievement is the satisfaction of our clients. Their success stories
                                    fuel our passion
                                    for what we do.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.card__block}>
                            <div className={styles.card__block__space}>
                                <h2>Industry Recognition</h2>
                                <p>We've earned the respect of our peers and industry leaders, with accolades and awards
                                    that reflect our
                                    commitment to excellence.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="space"><img src={Images.forspace} alt=""/></div>
            <section className={styles.navigating}>
                <div className={styles.navigating__top}>
                    <h1>Navigating the Estatein Experience</h1>
                    <p>At Estatein, we've designed a straightforward process to help you find and purchase your dream
                        property with ease.
                        Here's a step-by-step guide to how it all works.</p>
                </div>
                <div className="half_space"></div>
                <div className={styles.navigating__bottom}>
                    {stepsData.map((item, index) => (
                        <div key={index} className={styles.full_card}>
                            <h4>Step {item.step}</h4>
                            <div className={styles.card}>
                                <div className={styles.card__block}>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <div className="space"><img src={Images.forspace} alt=""/></div>
            <section className={styles.team}>
                <div className={styles.team__top}>
                    <h1>Meet the Estatein Team</h1>
                    <p>At Estatein, our success is driven by the dedication and expertise of our team. Get to know the
                        people
                        behind our mission to make your real estate dreams a reality.</p>
                </div>
                <div className="half_space"></div>
                <div className={styles.team__bottom}>
                    {teamData.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.card__block}>
                                <div className={`${item.class} ${styles.image}`}>
                                    <div className={styles.twitter}>
                                        <img src={Images.twitter_icon} alt=""/>
                                    </div>
                                </div>
                                <div className={styles.text_block}>
                                    <h3>{item.name}</h3>
                                    <p>{item.role}</p>
                                    <form action="">
                                        <input type="text" placeholder='Say Hello 👋'/>
                                        <button><img src={Images.send} alt=""/></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <div className="space"><img src={Images.forspace} alt=""/></div>
            <section className={styles.sliders}>
                <div className={styles.top}>
                    <div className={styles.top__left}>
                        <h1>Frequently Asked Questions</h1>
                        <p>Find answers to common questions about Estatein's services, property listings, and the real
                            estate process.
                            We're here to provide clarity and assist you every step of the way.</p>
                    </div>
                    {!loading.client ? (<button onClick={() => viewClick('client')}>View All FAQ’s</button>)
                        : (<button onClick={() => viewClick('client')}>Hide All FAQ’s</button>)
                    }
                </div>
                <div className="half_space"></div>
                <div className={styles.middle}>
                    {client.slice(startSlice.client, endSlice.client).map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.card__block}>
                                <div className={styles.card__block__space}>
                                    <div className={styles.card__block__space__top}>
                                        <div className={styles.text}>
                                            <p>Since {item.year}</p>
                                            <h2>{item.name}</h2>
                                        </div>
                                        <button>Visit Website</button>
                                    </div>
                                    <div className={styles.card__block__space__middle}>
                                        <div className={styles.carta}>
                                            <p><img src={Images.domain} alt=""/> Domain</p>
                                            <h4>{item.domain}</h4>
                                        </div>
                                        <div className={styles.line}></div>
                                        <div className={styles.carta}>
                                            <p><img src={Images.category} alt=""/> Domain</p>
                                            <h4>{item.category}</h4>
                                        </div>
                                    </div>
                                    <div className={styles.card__block__space__bottom}>
                                        <div className={styles.card__block__space__bottom__block}>
                                            <p>What They Said 🤗</p>
                                            <h5>{item.coment}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {!loading.client && (
                    <div className={styles.bottom}>
                        <div className={styles.bottom__left}>
                            <p><span>{Math.ceil(endSlice.client / 3)}</span> of {Math.ceil(client.length / 3)}</p>
                        </div>
                        <div className={styles.bottom__right}>
                            <button onClick={() => prevEl('client', client)}>←</button>
                            <button onClick={() => nextEl('client', client)}>→</button>
                        </div>
                    </div>
                )}
            </section>
            <div className="space"></div>
        </main>
    )
}