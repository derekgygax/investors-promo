import React from 'react';
import { Fab } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';

// styles
import styles from './PhoneFloatingButton.module.scss';

export const PhoneFloatingButton: React.FC = () => {
  return (
    <div className={ styles.main }>
      <a href={`tel:${TELEPHONE_NUMBER}`}>
        <Fab
          sx={{
            position: "fixed",
            bottom: 16,
            right: 16,
          }}
          color="success" 
          className={ styles.main }
          onClick={() => {
            console.log('asdfasdfasdf');
          }}
        >
          <PhoneIcon></PhoneIcon>
        </Fab>
      </a>
    </div>
  );
}