import React from 'react';
import Car from './Car';
 
const titreRouge ={fontSize: '50px', color:'teal'};
class Form extends React.Component
{
  render()
  {
      return( 
      <div> 
          <h1 style={titreRouge}> Commentaire </h1>
          <button> Valider </button>
      </div>);

      }}
      export default Form ;