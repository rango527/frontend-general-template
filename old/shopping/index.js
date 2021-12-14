import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import LandingHeader from '../../components/LandingHeader/LandingHeader';
import ShopItemCar from '../../components/ShopItemCar/ShopItemCar';
import styles from './shop.module.scss';
import axios from 'axios';
import { URL, OWNER_ID } from '../../utils/config/server-config';
import { dolly_data } from '../../utils/pro-header.data';


const btn_light = {
  backgroundColor: '#ffffff',
  color: '#ef5da8',
  border: '1px solid #ffffff',
};

const btn_primary = {
  backgroundColor: '#ef5da8',
  color: '#ffffff',
  border: '1px solid #ef5da8',
};


const ShopLanding = () => {
  const [isLoading, setLoading] = useState(false);
  const [serverErr, setServerErr] = useState(null);
  const [all_data, set_all_data] = useState(null);

  const fetchData = async id => {
    setLoading(true);
    try {
      let response = await axios.get(
        `${URL}/subscriber/products/by-category?owner=${id}`,
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwYWQ3OWNiMDk3MmU1NWVmMjEwNTMzNCJ9LCJpYXQiOjE2MjE5ODE2NDR9.9ylS1LjKr5wMTxYB_VwIDjg8lHqrBCamcSn7dE9ztQI',
          },
        }
      );
      setLoading(false);
      console.log(response.data, 'nft===============s');
      set_all_data(response.data.data);
    } catch (e) {
      setLoading(false);
      console.log(e);
      setServerErr('Some Server Error');
    }
  };
  useEffect(() => {
    fetchData(OWNER_ID);
  }, []);

  return (
    <div className={styles.landing_container}>
      <Navbar btn_primary={btn_primary} btn_light={btn_light} />
      <LandingHeader data={dolly_data} />
      {all_data
        ? all_data.map(item => {
            return (
              <div className={`has-left-padding ms-2`}>
                <ShopItemCar
                  cat_id={item._id}
                  data={item.gist}
                  heading={item._id}
                />
              </div>
            );
          })
        : ''}
    </div>
  );
};

export default ShopLanding;
