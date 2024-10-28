import { JSX } from 'solid-js/jsx-runtime';
const defaultButtonColor = '#3B81F6';
export const DeleteIcon = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
  // <svg
  //   xmlns="http://www.w3.org/2000/svg"
  //   class="icon icon-tabler icon-tabler-refresh"
  //   width="24"
  //   height="24"
  //   viewBox="0 0 24 24"
  //   stroke-width="2"
  //   stroke={props.color ?? defaultButtonColor}
  //   fill="none"
  //   stroke-linecap="round"
  //   stroke-linejoin="round"
  // >
  //   <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  //   <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
  //   <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
  // </svg>

  <svg width="35" height="35" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
    <g id="SVGRepo_bgCarrier" stroke-width="0">
      <rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="14.4" fill="#1760f6"></rect>
    </g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <path
        d="M11 15L9 13M9 13L11 11M9 13H12C12.9319 13 13.3978 13 13.7654 13.1522C14.2554 13.3552 14.6448 13.7446 14.8478 14.2346C15 14.6022 15 15.0681 15 16M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6"
        stroke="#ffffff"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </g>
  </svg>
);
