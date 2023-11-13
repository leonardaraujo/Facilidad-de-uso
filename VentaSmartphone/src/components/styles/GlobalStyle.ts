import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
font-family:sans-serif;
margin:0px;
padding:0px;
}
  /* !important is needed sometimes */
  ::-webkit-scrollbar {
    width: 6px !important;
 }

 /* Track */
::-webkit-scrollbar-track {
   -webkit-box-shadow: inset 0 0 6px white !important;
   -webkit-border-radius: 10px !important;
   border-radius: 10px !important;
 }

 /* Handle */
 ::-webkit-scrollbar-thumb {
   -webkit-border-radius: 10px !important;
   border-radius: 10px !important;
   background: #41617D !important; 
   -webkit-box-shadow: inset 0 0 6px yellow !important; 

 }
 ::-webkit-scrollbar-thumb:window-inactive {
   background: #41617D !important; 
 }
`;
