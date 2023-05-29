import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const FavoriteIcon = () => {
  return (
    <Svg width={20} height={18} viewBox="0 0 20 18" fill="none">
      <Path
        d="M2.31802 2.31802C0.56066 4.07538 0.56066 6.92462 2.31802 8.68198L10.0001 16.364L17.682 8.68198C19.4393 6.92462 19.4393 4.07538 17.682 2.31802C15.9246 0.56066 13.0754 0.56066 11.318 2.31802L10.0001 3.63609L8.68198 2.31802C6.92462 0.56066 4.07538 0.56066 2.31802 2.31802Z"
        fill="#53C629"
        stroke="#53C629"
        stroke-width={2}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
