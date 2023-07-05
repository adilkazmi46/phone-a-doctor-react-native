import React from 'react';
import Svg, {Path} from 'react-native-svg';

const LockIcon = () => {
  return (
    <Svg width="16" height="17" viewBox="0 0 16 17" fill="none">
      <Path
        d="M4.14286 7.6122V4.46934C4.14286 3.42742 4.55676 2.42817 5.29351 1.69142C6.03026 0.954673 7.02951 0.540771 8.07143 0.540771C9.11335 0.540771 10.1126 0.954673 10.8493 1.69142C11.5861 2.42817 12 3.42742 12 4.46934V7.6122M2.57143 7.6122H13.5714C14.4393 7.6122 15.1429 8.31575 15.1429 9.18363V14.6836C15.1429 15.5515 14.4393 16.2551 13.5714 16.2551H2.57143C1.70355 16.2551 1 15.5515 1 14.6836V9.18363C1 8.31575 1.70355 7.6122 2.57143 7.6122Z"
        stroke="#27AD80"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default LockIcon;