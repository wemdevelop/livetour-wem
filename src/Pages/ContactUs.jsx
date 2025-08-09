import React from 'react'
import LtContact from '../components/Contacts/Contact'
import ContactDetails from '../components/Contacts/ContactDetails'
import ContactMainForm from '../components/Contacts/ContactMainForm'

const ContactUs = () => {
  return (
    <div>
      <ContactMainForm/>
        {/* <LtContact/> */}
        <ContactDetails/>
      
    </div>
  )
}

export default ContactUs
