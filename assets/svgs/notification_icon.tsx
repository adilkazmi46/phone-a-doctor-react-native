import React from 'react';
import Svg, {Path} from 'react-native-svg';

const NotificationIcon = () => {
  return (
    <Svg width="18" height="20" viewBox="0 0 18 20" fill="none">
      <Path
        d="M8.99996 2.92855C7.54127 2.92855 6.14233 3.50802 5.11088 4.53947C4.07943 5.57092 3.49997 6.96986 3.49997 8.42855V12.3571C3.49997 12.9823 3.25162 13.5818 2.80957 14.0239C2.36752 14.4659 1.76798 14.7143 1.14282 14.7143H16.8571C16.232 14.7143 15.6324 14.4659 15.1904 14.0239C14.7483 13.5818 14.5 12.9823 14.5 12.3571V8.42855C14.5 6.96986 13.9205 5.57092 12.8891 4.53947C11.8576 3.50802 10.4587 2.92855 8.99996 2.92855ZM8.99996 2.92855V0.571411M10.3593 17.8571C10.2211 18.0953 10.0228 18.2929 9.78429 18.4303C9.54573 18.5677 9.27526 18.6401 8.99996 18.6401C8.72467 18.6401 8.4542 18.5677 8.21564 18.4303C7.97709 18.2929 7.77882 18.0953 7.64068 17.8571"
        stroke="#27AD80"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default NotificationIcon;
