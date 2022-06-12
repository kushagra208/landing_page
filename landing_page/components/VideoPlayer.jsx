import React from 'react';
import promo from '../public/1.mp4';
import styles from '../styles/VideoPlayer.module.css'
const VideoPlayer = () => {
  return (
    // <div className={styles.container}>
        <video className={styles.video} src = {promo} type ='video/mp4' loop muted autoPlay/>
    // </div>
  )
}

export default VideoPlayer