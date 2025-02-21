import CryptoJS from 'crypto-js';
import { ALTERNATIVE } from '../components/constants';
import { useEffect, useState } from 'react';

function useShouldOverride() {
  const [shouldOverride, setShouldOverride] = useState(false);

  useEffect(() => {
    const key = window.sessionStorage.getItem('key');

    /* If Key exists, check value and set override */
    if (key) {
      const encryptedKey = CryptoJS.MD5(key).toString(CryptoJS.enc.Hex);
      setShouldOverride(encryptedKey === ALTERNATIVE);
    }
  }, []);

  return shouldOverride;
}

export default useShouldOverride;
