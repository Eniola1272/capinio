import React from 'react'
import styles from './Gallery.module.css'
import img_1 from '../../assets/img_1.png'
import img_2 from '../../assets/img_2.png'
import img_3 from '../../assets/img_3.png'
import img_4 from '../../assets/img_4.png'
import img_5 from '../../assets/img_5.png'
import img_6 from '../../assets/img_6.png'
import down_arrow from '../../assets/down-arrow.svg'


const Gallery = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.headingSecondary}>Show Case</h2>
      <h3 className={styles.headingTertiary}>Portfolio</h3>
      <p className={styles.desc}>Browse our gallery to discover a diverse range of expertly crafted haircuts, blending timeless classics with the latest trends.</p>
      <div className={styles.gridContainer}>
          <img src={img_1} alt="gallery image of a man with a haircut" />
          <img src={img_2} alt="gallery image of a man with a haircut" />
          <img src={img_3} alt="gallery image of a man with a haircut" />
          <img src={img_4} alt="gallery image of a man with a haircut" />
          <img src={img_5} alt="gallery image of a man with a haircut" />
          <img src={img_6} alt="gallery image of a man with a haircut" />
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.btn}>Book Now</button>
        <img src={down_arrow} alt="down arrow" />
      </div>
    </div>
  )
}

export default Gallery