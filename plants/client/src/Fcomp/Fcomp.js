import React from 'react';
import { useRouteMatch, useParams, useHistory } from 'react-router-dom';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';

const Ptag = Styled.p`
  width:20%;
  height: 100%;
  background-color:tan;
  color:blue;

`;

export default function Fcomp(props) {
  const history = useHistory();

  // const { name } = useParams();
  const { name, email, password } = props;
  const namer = name;
  const emailer = email;
  return (
    <div className="App">
      <Ptag>
          Hello {namer } your Email is { emailer } with a password of { password }
      </Ptag>
      
       
        
          <Link to="/plants">
            <button>
            Take me to my plants
            </button>
            </Link>
          
     
      
    </div>
  );
}
