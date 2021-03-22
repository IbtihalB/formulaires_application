import React from 'react';
import Myhead from './head';
import './Mycss.css';
import styles from './Mycss.module.css'
 
class Form extends React.Component
{
  render()
  {   const condition=this.props.condition;

      return(  
   
      <div> 
          <h1 className={styles.green}> Css with modules </h1>
          <Myhead/>
          <button> Valider </button>
      </div>);

      }}
      export default Form ;
