import React, { useState } from "react";
import styles from "./SignInForm.module.css";

const SignInForm = () => {
  const [submittedForm, setSubmittedForm] = useState();
  
  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    setSubmittedForm(data);
  };

  return (
    <div>
        
      {
        submittedForm ? (
          <div>Your form entry was {submittedForm.get("myText")} and {submittedForm.get("myDropdown")}</div>
        ) : (
          <form onSubmit={onSubmit}>
            <div className={styles.container}>
            <h2>Sign Up</h2>
            <hr></hr>
            
            <div className={styles.box}>
            <label className={styles.formText} htmlFor="myTextId">Name</label>
            <input className={styles.formInput} type="text" name="myText" id="myTextId" required />
            </div>

            <div className={styles.box}>
            <label className={styles.formText} htmlFor="myEmailId">Email</label>
            <input className={styles.formInput} type="text" name="myEmail" id="myEmailId" required />
            </div>
           
            <div className={styles.box}>
            <label className={styles.formText} htmlFor="myPhoneId">Phone</label>
            <input className={styles.formInput} type="text" name="myPhone" id="myPhoneId" required />
            </div>
            
            <div className={styles.box}>
            <label className={styles.formText} htmlFor="mySkillId">Skills</label>
            <input className={styles.formInput} type="text" name="mySkill" id="mySkillId" />
            </div>
            
            <div className={styles.box}>
            <label className={styles.formText} htmlFor="mySchoolId">School</label>
            <input className={styles.formInput} type="text" name="mySchool" id="mySchoolId" />
            </div>

            <label htmlFor="myBirthYearId">Year of Birth</label>
            <select name="myBirthYear" id="myBirthYearId">
                <option>1951-1960</option>
                <option>1961-1970</option>
                <option>1971-1980</option>
                <option>1981-1990</option>
                <option>1991-2000</option>
                <option>2001-2010</option>
            </select>
            
            <label htmlFor="myDropdownId">Years of Experience</label>
            <select name="myDropdown" id="myDropdownId">
              <option>Less than 1 year</option>
              <option>5 years</option>
              <option>More than 10 years</option>
            </select>
          
                
                <input className={styles.boxInput} type="checkbox" name="gender1" id="gender1" />
                <label className={styles.boxText} htmlFor="gender1">Female</label>
              
                
                <input className={styles.boxInput} type="checkbox" name="gender2" id="gender2" />
                <label className={styles.boxText} htmlFor="gender2">Male</label>
               

              
           
            <input className={styles.btn} type="submit" value="Send it" />
          
            </div>
          </form>
        )
      }
    </div>
  )
}

export default SignInForm;