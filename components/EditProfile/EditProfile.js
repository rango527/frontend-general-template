import React, { useState, useEffect } from 'react';
import styles from './edit-profile.module.scss';
const EditProfile = () => {
  const [current_opt, set_current_opt] = useState('');

  return (
    <div className={styles.edit_profile_container}>
      <div className={styles.title_container}>
        <h4>Edit Your Profile </h4>
      </div>
      
      <div className={styles.profile_opt_container}>
        <p
          onClick={() => set_current_opt('username')}
          className={current_opt === 'username' ? styles.selected : ''}
        >
          Basic Info
        </p>
        <p
          onClick={() => set_current_opt('p_setting')}
          className={current_opt === 'p_setting' ? styles.selected : ''}
        >
          Profile Image
        </p>
        <p
          onClick={() => set_current_opt('h-nft')}
          className={current_opt === 'h-nft' ? styles.selected : ''}
        >
          Highlighted NFT
        </p>
      </div>
      <div className={styles.selected_opt_container}>
       {/* 1 */}
        <div className={styles.option_item}>
          <div className='row'>
            <div className='col-sm-5'>
              <p>First Name</p>
            </div>
            <div className='col-sm-7'>
              <p>Hamza</p>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className={styles.option_item}>
          <div className='row'>
            <div className='col-sm-5'>
              <p><b> Email </b> </p>
            </div>
            <div className='col-sm-7'>
              <p>hamza@ruvivo.com</p>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className={styles.option_item}>
          <div className='row'>
            <div className='col-sm-5'>
              <p><b> Last Name</b></p>
            </div>
            <div className='col-sm-7'>
              <p>Khan</p>
            </div>
          </div>
        </div>
        {/* 4*/}
        <div className={styles.option_item}>
          <div className='row'>
            <div className='col-sm-5'>
              <p> <b>Password</b> </p>
            </div>
            <div className='col-sm-7'>
              <p>********</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
