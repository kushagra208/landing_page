import React from 'react';
// import promo from '../public/1.mp4';
import styles from '../styles/VideoPlayer.module.css'
const VideoPlayer = () => {
  return (
    <div className={styles.container}>
        <video controls className={styles.video} src = {'../public/2.mp4'} type ='video/mp4' loop muted />
            {/* <source src = {'../public/1.mp4'} type ='video/mp4'  />
        </video> */}
    </div>
  )
}

export default VideoPlayer