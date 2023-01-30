import React, { RefObject, useEffect, useState } from 'react'
import Routing from './routing/Routing';
import useElement from './hooks/useElement'

const App = () => {
  const [ref, width] = useElement();
  const [classname, setClassName] = useState('container');

  useEffect(() => {
    if(width) {
      if(width >= 768) {
          setClassName('container')
      } else if (width >= 640 && width < 768 ) {
          setClassName('container sm')
      } else if (width < 640 ) {
          setClassName('container es')
      }
    }
  }, [width])

   return (
     <div className='app' ref={ref as RefObject<HTMLDivElement>} >
        <div className={classname}>
            <Routing />
        </div>
    </div>
   );
};

export default App;
