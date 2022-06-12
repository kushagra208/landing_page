import React from 'react';
import styles from '../styles/Parallax.module.css';

const Parallax = ({url}) => {
  return (
    <div style={{backgroundImage:`url('${url}')` ,backgroundAttachment:'fixed' , backgroundRepeat:'no-repeat' , backgroundSize:'cover' , backgroundPosition:'center' ,minHeight:'600px'}} >
    </div>
  )
}

export default Parallax;