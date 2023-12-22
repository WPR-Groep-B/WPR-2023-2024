import React, { useState } from 'react';
import ErvaringRegister from '../components/ErvaringsRegistreer';
import BedrijfRegistreer from '../components/BedrijfRegistreer';
import styles from '../styles/Register.module.css';

function Register() {
    const [component, setComponent] = useState('ErvaringRegister');

    const handleClick = (componentName) => {
        setComponent(componentName);
    }

    return (
        <div>
            <button className={styles.typeRegisterBtn} onClick={() => handleClick('ErvaringRegister')}>Regristreer als Ervaringsdeskundige</button>
            <button className={styles.typeRegisterBtn} onClick={() => handleClick('BedrijfRegistreer')}>Regristreer als bedrijf</button>

            {component === 'ErvaringRegister' && <ErvaringRegister />}
            {component === 'BedrijfRegistreer' && <BedrijfRegistreer />}
        </div>
    );
}

export default Register;