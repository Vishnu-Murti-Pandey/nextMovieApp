import React from 'react'
import ContactCard from '../components/ContactCard'
import styles from '@/app/contact/contact.module.css'
import ContactForm from '../components/ContactForm'

const Contact = () => {
    return (
        <>
            <div className={styles.container}>
                <h1>Contact Us</h1>
                <ContactCard />

                <section className={styles.contact_section}>
                    <h2>We&apos;d love to hear <span> from you </span></h2>

                    <ContactForm />
                </section>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14010.523237605295!2d77.41607168595844!3d28.61085044849475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee4d100dab27%3A0xf26c6a2090a8199a!2sGaur%20City%201%2C%20Sector%204%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201009!5e0!3m2!1sen!2sin!4v1702897351918!5m2!1sen!2sin"
                    width={600} height={450} className={styles.mapping} allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>

            </div>
        </>
    )
}

export default Contact