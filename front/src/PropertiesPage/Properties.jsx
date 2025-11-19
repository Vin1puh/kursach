import styles from './Properties.module.scss'
import {Images} from "../images.js";
import {useEffect, useState} from "react";

export default function Properties() {
    const [building, setBuilding] = useState([]);
    const [loading, setLoading] = useState({building: false});
    const [startSlice, setStartSlice] = useState({building: 0});
    const [endSlice, setEndSlice] = useState({building: 3});

    useEffect(() => {
        fetch('http://localhost:3000/building')
            .then(res => res.json())
            .then(data => setBuilding(data))
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



    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        location: '',
        propertyType: '',
        bathrooms: '',
        bedrooms: '',
        budget: '',
        message: '',
        agree: false
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Обработчик изменения полей
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

        // Очищаем ошибку при изменении поля
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    // Валидация формы
    const validateForm = () => {
        const newErrors = {};

        // Required fields validation
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
        if (!formData.location) newErrors.location = 'Location is required';
        if (!formData.propertyType) newErrors.propertyType = 'Property type is required';
        if (!formData.bathrooms) newErrors.bathrooms = 'Bathrooms is required';
        if (!formData.bedrooms) newErrors.bedrooms = 'Bedrooms is required';
        if (!formData.budget) newErrors.budget = 'Budget is required';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        if (!formData.agree) newErrors.agree = 'You must agree to terms';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Обработчик отправки формы
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            // Убираем contactMethod из отправляемых данных
            const { agree, ...submitData } = formData;

            const response = await fetch('http://localhost:3000/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(submitData)
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Form submitted successfully:', result);

                // Сброс формы после успешной отправки
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    location: '',
                    propertyType: '',
                    bathrooms: '',
                    bedrooms: '',
                    budget: '',
                    message: '',
                    agree: false
                });

                alert('Form submitted successfully!');
            } else {
                throw new Error('Failed to submit form');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Error submitting form. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <main>
            <section className={styles.first}>
                <div className={styles.first__block}>
                    <h1>Find Your Dream Property</h1>
                    <p>Welcome to Estatein, where your dream property awaits in every corner of our beautiful world.
                        Explore our
                        curated selection of properties, each offering a unique story and a chance to redefine your
                        life. With categories
                        to suit every dreamer, your journey </p>
                </div>
            </section>
            <section className={styles.form_section}>
                <form action="" className={styles.form}>
                    <div className={styles.form__block}>
                        <div className={styles.form__block__space}>
                            <input type="text" placeholder='Search For A Property'/>
                            <button><img src={Images.search} alt=""/>Find Property</button>
                        </div>
                    </div>
                </form>
                <form action="" className={styles.form2}>
                    <div className={styles.form2__block}>
                        <div className={styles.select}>
                            <select name="" id="">
                                <option value="Location" disabled selected hidden>Location</option>
                                <option value="Russia">Russia</option>
                            </select>
                        </div>
                        <div className={styles.select}>
                            <select name="" id="">
                                <option value="Property Type" disabled selected hidden>Property Type</option>
                                <option value="Russia">Russia</option>
                            </select>
                        </div>
                        <div className={styles.select}>
                            <select name="" id="">
                                <option value="Pricing Range" disabled selected hidden>Pricing Range</option>
                                <option value="Russia">Russia</option>
                            </select>
                        </div>
                        <div className={styles.select}>
                            <select name="" id="">
                                <option value="Property Size" disabled selected hidden>Property Size</option>
                                <option value="Russia">Russia</option>
                            </select>
                        </div>
                        <div className={styles.select}>
                            <select name="" id="">
                                <option value="Build Year" disabled selected hidden>Build Year</option>
                                <option value="2019">2019</option>
                            </select>
                        </div>
                    </div>
                </form>
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
                                <div className={styles.button_cont}>
                                    <button><a>{item.info}</a></button>
                                </div>
                                <h4>{item.title}</h4>
                                <p>{item.text}</p>
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
            <section className={styles.makeit}>
                <div className={styles.makeit__top}>
                    <h1>Let's Make it Happen</h1>
                    <p>Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will
                        work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together.</p>
                </div>
                <div className="half_space"></div>
                <div className={styles.makeit__bottom}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.section}>
                            <div className={styles.little}>
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder='Enter First Name'
                                    className={errors.firstName ? styles.error : ''}
                                />
                                {errors.firstName && <span className={styles.errorText}>{errors.firstName}</span>}
                            </div>
                            <div className={styles.little}>
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder='Enter Last Name'
                                    className={errors.lastName ? styles.error : ''}
                                />
                                {errors.lastName && <span className={styles.errorText}>{errors.lastName}</span>}
                            </div>
                            <div className={styles.little}>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder='Enter your Email'
                                    className={errors.email ? styles.error : ''}
                                />
                                {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                            </div>
                            <div className={styles.little}>
                                <label htmlFor="phone">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder='Enter Phone Number'
                                    className={errors.phone ? styles.error : ''}
                                />
                                {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
                            </div>
                        </div>

                        <div className={styles.section}>
                            <div className={styles.little}>
                                <label htmlFor="location">Preferred Location</label>
                                <select
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    className={errors.location ? styles.error : ''}
                                >
                                    <option value="" disabled hidden>Select Location</option>
                                    <option value="Russia">Russia</option>
                                    <option value="USA">USA</option>
                                    <option value="UK">UK</option>
                                </select>
                                {errors.location && <span className={styles.errorText}>{errors.location}</span>}
                            </div>
                            <div className={styles.little}>
                                <label htmlFor="propertyType">Property Type</label>
                                <select
                                    name="propertyType"
                                    value={formData.propertyType}
                                    onChange={handleChange}
                                    className={errors.propertyType ? styles.error : ''}
                                >
                                    <option value="" disabled hidden>Select Property Type</option>
                                    <option value="Villa">Villa</option>
                                    <option value="Apartment">Apartment</option>
                                    <option value="House">House</option>
                                </select>
                                {errors.propertyType && <span className={styles.errorText}>{errors.propertyType}</span>}
                            </div>
                            <div className={styles.little}>
                                <label htmlFor="bathrooms">No. of Bathrooms</label>
                                <select
                                    name="bathrooms"
                                    value={formData.bathrooms}
                                    onChange={handleChange}
                                    className={errors.bathrooms ? styles.error : ''}
                                >
                                    <option value="" disabled hidden>Select no. of Bathrooms</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                {errors.bathrooms && <span className={styles.errorText}>{errors.bathrooms}</span>}
                            </div>
                            <div className={styles.little}>
                                <label htmlFor="bedrooms">No. of Bedrooms</label>
                                <select
                                    name="bedrooms"
                                    value={formData.bedrooms}
                                    onChange={handleChange}
                                    className={errors.bedrooms ? styles.error : ''}
                                >
                                    <option value="" disabled hidden>Select no. of Bedrooms</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                {errors.bedrooms && <span className={styles.errorText}>{errors.bedrooms}</span>}
                            </div>
                        </div>

                        <div className={styles.section}>
                            <div className={styles.big}>
                                <label htmlFor="budget">Budget</label>
                                <select
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleChange}
                                    className={errors.budget ? styles.error : ''}
                                >
                                    <option value="" disabled hidden>Select Budget</option>
                                    <option value="100000">$100,000</option>
                                    <option value="200000">$200,000</option>
                                    <option value="300000">$300,000</option>
                                </select>
                                {errors.budget && <span className={styles.errorText}>{errors.budget}</span>}
                            </div>
                            <div className={styles.big}>
                                <label htmlFor="contactMethod">Preferred Contact Method</label>
                                <div className={styles.insert}>
                                    <input type="text" placeholder='Enter Phone Number'/>
                                    <input type="text" placeholder='Enter your Email'/>
                                </div>
                            </div>
                        </div>

                        <div className={styles.section}>
                            <div className={styles.message}>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    cols="30"
                                    rows="10"
                                    placeholder='Enter your Message here..'
                                    className={errors.message ? styles.error : ''}
                                ></textarea>
                                {errors.message && <span className={styles.errorText}>{errors.message}</span>}
                            </div>
                        </div>

                        <div className={styles.section}>
                            <div className={styles.radio}>
                                <input
                                    type="checkbox"
                                    name="agree"
                                    checked={formData.agree}
                                    onChange={handleChange}
                                />
                                <p>I agree with <a>Terms of Use</a> and <a>Privacy Policy</a></p>
                                {errors.agree && <span className={styles.errorText}>{errors.agree}</span>}
                            </div>
                            <input
                                type="submit"
                                value={isSubmitting ? 'Sending...' : 'Send Your Message'}
                                disabled={isSubmitting}
                            />
                        </div>
                    </form>
                </div>
            </section>
            <div className="space"></div>
        </main>
    )
}