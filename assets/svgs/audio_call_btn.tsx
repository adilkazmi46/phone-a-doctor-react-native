import React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

const AudioCallBtn = () => {
  return (
    <Svg width="35" height="35" viewBox="0 0 35 35" fill="none">
      <Rect width="35" height="35" rx="8" fill="#EDF1FA" />
      <Path
        d="M21.05 25.5C17.988 25.496 15.0525 24.2778 12.8873 22.1127C10.7221 19.9475 9.50397 17.012 9.5 13.95C9.5 13.035 9.86348 12.1574 10.5105 11.5104C11.1575 10.8634 12.035 10.5 12.95 10.5C13.1438 10.4985 13.3372 10.5161 13.5275 10.5525C13.7115 10.5797 13.8923 10.6249 14.0675 10.6875C14.1907 10.7307 14.3005 10.8053 14.386 10.904C14.4715 11.0026 14.5297 11.1219 14.555 11.25L15.5825 15.75C15.6102 15.8721 15.6069 15.9992 15.5728 16.1198C15.5387 16.2403 15.475 16.3504 15.3875 16.44C15.29 16.545 15.2825 16.5525 14.36 17.0325C15.0987 18.6531 16.3949 19.9546 18.0125 20.7C18.5 19.77 18.5075 19.7625 18.6125 19.665C18.7021 19.5774 18.8122 19.5137 18.9327 19.4797C19.0532 19.4456 19.1804 19.4423 19.3025 19.47L23.8025 20.4975C23.9265 20.5262 24.0411 20.5861 24.1356 20.6714C24.23 20.7566 24.3012 20.8646 24.3425 20.985C24.4058 21.163 24.4535 21.3462 24.485 21.5325C24.5152 21.721 24.5302 21.9116 24.53 22.1025C24.5162 23.0135 24.1425 23.8822 23.4905 24.5187C22.8385 25.1552 21.9612 25.508 21.05 25.5Z"
        fill="#4B7FFB"
      />
    </Svg>
  );
};

export default AudioCallBtn;