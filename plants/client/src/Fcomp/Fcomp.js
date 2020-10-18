import React from 'react';
import { useRouteMatch, useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';



export default function Fcomp(props) {
  // const { name } = useParams();
  const { name } = props;
  return (
    <div className="App">
      <p>
          Hello {name}
      </p>
    </div>
  );
}
