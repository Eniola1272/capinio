import React from 'react'
import styles from './Booking.module.css'
import Form from '../Form/Form'

const Booking = () => {
  return (
    <div className={styles.container}>
          <h2 className={styles.headingSecondary}>Let’s Make Magic</h2>
          <h3 className={styles.headingTertiary}>Book an appointment</h3>
          <p className={styles.desc}>Due to high demand, Appointments are required, ensuring you get the time and attention you deserve. Book your spot today!</p>
          <Form />
    </div>
  )
}

export default Booking