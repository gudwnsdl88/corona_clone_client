import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const Globalstyle = createGlobalStyle`
@font-face {
    font-family: 'myFont' ;
    src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot');
}

${reset};
* {
    box-sizing: border-box;
}
body{
    font-family: 'myFont';
    font-weight:600;
}
a{
    color:inherit;
    text-decoration:none;
}
input,
button{
    &:focus,
    &:active{outline:none}
}

`;

export default Globalstyle;
