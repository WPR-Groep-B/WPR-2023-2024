// import React, { useState, useEffect } from 'react';
// import styles from '../styles/Register.module.css';
// // import { Navlink } from 'react-router-dom'

// function RegisterInfo() {
//     useEffect(() => {
//         document.title = "Stichting Accessibility - Register";
//       }, []);
//     const [selectedOption, setSelectedOption] = useState('');
//     const [age, setAge] = useState('');
//     const [gender, setGender] = useState('');
//     const [beperking, setBeperking] = useState('');
//     const [bedrijf, setBedrijf] = useState('');

//     const showFields = (option) => {
//         setSelectedOption(option);
//     };

//     // const goToRegisterAccount = () => {
//     //     <Navlink to="/register-account"></Navlink>
//     // };

//     const handleAgeChange = (e) => {
//         setAge(e.target.value);
//     };

//     const handleGenderChange = (e) => {
//         setGender(e.target.value);
//     };

//     const handleBeperkingChange = (e) => {
//         setBeperking(e.target.value);
//     };

//     const handleBedrijfChange = (e) => {
//         setBedrijf(e.target.value);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (age.trim() !== '' && gender.trim() !== '' && (selectedOption === 'Ervaring' ? beperking.trim() !== '' : true) && (selectedOption === 'Bedrijf' ? bedrijf.trim() !== '' : true)) {
//             window.location.href = "/register-account";
//         } else {
//             console.error("Please fill in all required fields");
//         }
//     };

//     return (
//         <html lang='nl'>
//             <body className={styles.removeScrollbar}>
//                 <div className={styles.body}>
//                     <div className={styles.container}>
//                         <h1>Stichting Accessibility</h1>
//                         <p>Algemene Informatie</p>

//                         <hr></hr>

//                         <form className={styles.form} onSubmit={handleSubmit}>

//                             <div className={styles.displayCntr}>

//                                 <div>
//                                     <label htmlFor="age">Leeftijd:</label>
//                                     <input
//                                         type="date"
//                                         id="age"
//                                         name="age"
//                                         required
//                                         value={age}
//                                         onChange={handleAgeChange}
//                                     />
//                                 </div>

//                                 <div>
//                                     <label className={styles.labelFlex} htmlFor="gender">Geslacht:</label>
//                                     <select
//                                         id="gender"
//                                         name="gender"
//                                         required
//                                         value={gender}
//                                         onChange={handleGenderChange}
//                                     >
//                                         <option value="">Kies een optie</option>
//                                         <option value="male">Man</option>
//                                         <option value="female">Vrouw</option>
//                                         <option value="else">Anders</option>
//                                         <option value="undisclosed">Zeg ik liever niet</option>
//                                     </select>
//                                 </div>

//                             </div>

//                             <div className={styles.displayCntr}>
//                                 <div>
//                                     <label htmlFor="options">Type Account</label>
//                                     <select
//                                         className={styles.select}
//                                         id="options"
//                                         onChange={(e) => showFields(e.target.value)}
//                                         required
//                                     >
//                                         <option value="">Kies een optie</option>
//                                         <option value="Ervaring">Ervaringsdeskundige</option>
//                                         <option value="Bedrijf">Bedrijf</option>
//                                     </select>
//                                 </div>

//                                 <div id="ErvaringFields" className={selectedOption === 'Ervaring' ? '' : styles.hidden}>
//                                     <label htmlFor="beperking">Beperking:</label>
//                                     <input
//                                         style={{ width: '225px' }}
//                                         type="text"
//                                         id="beperking"
//                                         name="beperking"
//                                         placeholder="bijv. Doof"
//                                         value={beperking}
//                                         onChange={handleBeperkingChange}
//                                         required
//                                     />
//                                 </div>

//                                 <div id="BedrijfFields" className={selectedOption === 'Bedrijf' ? '' : styles.hidden}>
//                                     <label htmlFor="bedrijf">Bedrijfsnaam</label>
//                                     <input
//                                         style={{ width: '225px' }}
//                                         type="text"
//                                         id="bedrijf"
//                                         name="bedrijf"
//                                         placeholder="bijv. ANWB"
//                                         value={bedrijf}
//                                         onChange={handleBedrijfChange}
//                                     />
//                                 </div>

//                             </div>

//                             <hr></hr>

//                             <button className={styles.registerbtn} type="submit">Volgende</button>

//                         </form>

//                     </div>

//                 </div>
//             </body>
//         </html>
//     );
// }

// export default RegisterInfo;