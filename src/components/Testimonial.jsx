import React from 'react'

const Testimonial = () => {
    return (
        <div id='testimonial'>
            <h2>Testimonial</h2>
            <section>
                <TestimonialCard name="Rahul Singh" feedback="It has really helped me impress the investors. Thank you." />
                <TestimonialCard name="Deepak Sharma" feedback="Just wanted to say how pleased I am with the website and thanks for all your hard work." />
                <TestimonialCard name="Anirudh Pandey" feedback="I really like what you have done with the website. I will definitely recommend you in the future." />
            </section>
        </div>
    )
}

const TestimonialCard = ({ name, feedback }) => (
    <article>
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="User" />
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>
)

export default Testimonial
