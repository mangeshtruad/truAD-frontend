import React, { useState } from 'react';
import styles from './DeleteDialog.module.css'; // Import CSS module

import { Button } from '@mui/material';

export default function DeleteDialog({setopen}) {
  const handerclick=()=>{
    setopen(false)
  }
  return (
    <div className={styles.div} onClick={()=>setopen(false)}>
    <div className={styles.mainbox}> {/* Use CSS module */}
      <p className={styles.text}>Are you sure you want to remove this material?</p>
      <div className={styles.div_button}>
        <Button className={styles.c_button} variant="outlined" onClick={()=>setopen()}>Cancel</Button>
        <Button className={styles.R_button} variant="contained" onClick={handerclick}>Remove</Button>
      </div>
    </div>
    </div>
  );
}
