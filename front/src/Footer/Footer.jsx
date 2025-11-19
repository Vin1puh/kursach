import styles from './Footer.module.scss'
import {NavLink} from "react-router-dom";
import {Images} from "../images.js";

export default function Footer() {
    return (
        <footer>
            <section className={styles.CTA}>
                <div className="absolute abs1"></div>
                <div className={styles.CTA__block}>
                    <div className={styles.CTA__block__left}>
                        <h1>Start Your Real Estate Journey Today</h1>
                        <p>Your dream property is just a click away. Whether you're looking for a new home, a
                            strategic investment, or expert
                            real estate advice, Estatein is here to assist you every step of the way. Take the first
                            step towards your real
                            estate goals and explore our available properties or get in touch with our team for
                            personalized assistance.</p>
                    </div>
                    <div className={styles.CTA__block__right}>
                        <button className='browse'>Explore Properties</button>
                    </div>
                </div>
                <div className="absolute abs2"></div>
            </section>
            <section className={styles.footer}>
                <div className={styles.top}>
                    <div className={styles.top__block}>
                        <div className={styles.top__block__left}>
                            <img src={Images.Logo} alt=""/>
                            <form action="">
                                <div className={styles.block}>
                                    <img src={Images.email} alt=""/>
                                    <input type="mail" placeholder='Enter Your Email'/>
                                    <NavLink to=''><img src={Images.send} alt=""/></NavLink>
                                </div>
                            </form>
                        </div>
                        <div className={styles.top__block__right}>
                            <div className={styles.column}>
                                <p>Home</p>
                                <NavLink to=''>Hero Section</NavLink>
                                <NavLink to=''>Features</NavLink>
                                <NavLink to=''>Properties</NavLink>
                                <NavLink to=''>Testimonials</NavLink>
                                <NavLink to=''>FAQ’s</NavLink>
                            </div>
                            <div className={styles.column}>
                                <p>About Us</p>
                                <NavLink to=''>Our Story</NavLink>
                                <NavLink to=''>Our Works</NavLink>
                                <NavLink to=''>How It Works</NavLink>
                                <NavLink to=''>Our Team</NavLink>
                                <NavLink to=''>Our Clients</NavLink>
                            </div>
                            <div className={styles.column}>
                                <p>Properties</p>
                                <NavLink to=''>Portfolio</NavLink>
                                <NavLink to=''>Categories</NavLink>
                            </div>
                            <div className={styles.column}>
                                <p>Contact Us</p>
                                <NavLink to=''>Contact Form</NavLink>
                                <NavLink to=''>Our Offices</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.bottom__block}>
                        <div className={styles.bottom__block__left}>
                            <NavLink to=''>@2023 Estatein. All Rights Reserved.</NavLink>
                            <NavLink to=''>Terms & Conditions</NavLink>
                        </div>
                        <div className={styles.bottom__block__right}>
                            <NavLink to=''><img src={Images.facebook} alt=""/></NavLink>
                            <NavLink to=''><img src={Images.linkedin} alt=""/></NavLink>
                            <NavLink to=''><img src={Images.twitter} alt=""/></NavLink>
                            <NavLink to=''><img src={Images.youtube} alt=""/></NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}