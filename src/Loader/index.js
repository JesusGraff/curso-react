import React from 'react';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';

const Loader = () =>{
    return (
        
        <li className="TodoItem">
            <h4>Cargando...</h4>
            
      <span>
        <Skeleton/>
      </span>
      <p>
        <Skeleton/>
      </p>
      <span>
        <Skeleton/>
      </span>
      
    </li>
    
    )
}

export { Loader };