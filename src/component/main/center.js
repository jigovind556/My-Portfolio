import React from 'react';
import MobileScreen from '../center/mobileScreen';

const Center = (props) => {
  return (
    <div>
      <MobileScreen theme={props.theme}/>
    </div>
  );
}

export default Center;
