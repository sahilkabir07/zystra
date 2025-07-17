import React from 'react'
import ContactUsBanner from '../components/contactComponents/ContactUsBanner'
import DiagonalContactCards from '../components/contactComponents/DiagonalCards'
import ContactForm from '../components/contactComponents/ContactForm'

const Contacts = () => {
    return (
        <>
            <ContactUsBanner />
            <DiagonalContactCards />
            <ContactForm />
        </>
    )
}

export default Contacts