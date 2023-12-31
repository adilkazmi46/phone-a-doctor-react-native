import React from 'react';
import Svg, {Path} from 'react-native-svg';

const DropdownArrow = ({color}: {color: string}) => {
  return (
    <Svg width="10" height="6" viewBox="0 0 10 6" fill="none">
      <Path
        d="M1 1L5 5L9 1"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default DropdownArrow;
