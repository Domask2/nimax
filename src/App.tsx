import React, { RefObject } from 'react'
import Routing from './routing/Routing';
import useElement from './hooks/useElement'

const App = () => {
  const [ref, width] = useElement();

  console.log(width);

   return (
     <div className='app'>
        <div ref={ref as RefObject<HTMLDivElement>} className='container'>
            <Routing />
        </div>
    </div>
   );
};

export default App;
