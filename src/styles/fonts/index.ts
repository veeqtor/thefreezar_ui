import futuraLighteot from 'styles/fonts/FuturaBT-Light.eot';
import futuraBookeot from 'styles/fonts/FuturaBT-Book.eot';
import futuraBoldeot from 'styles/fonts/Futura-Bold.eot';

import futuraLightwoff2 from 'styles/fonts/FuturaBT-Light.woff2';
import futuraBookwoff2 from 'styles/fonts/FuturaBT-Book.woff2';
import futuraBoldwoff2 from 'styles/fonts/Futura-Bold.woff2';

import futuraLightwoff from 'styles/fonts/FuturaBT-Light.woff';
import futuraBookwoff from 'styles/fonts/FuturaBT-Book.woff';
import futuraBoldwoff from 'styles/fonts/Futura-Bold.woff';

import futuraLightttf from 'styles/fonts/FuturaBT-Light.ttf';
import futuraBookwttf from 'styles/fonts/FuturaBT-Book.ttf';
import futuraBoldttf from 'styles/fonts/Futura-Bold.ttf';

import futuraLightsvg from 'styles/fonts/FuturaBT-Light.svg';
import futuraBooksvg from 'styles/fonts/FuturaBT-Book.svg';
import futuraBoldsvg from 'styles/fonts/Futura-Bold.svg';

const fonts = `
@font-face {
    font-family: 'Futura Lt BT';
    src: url('${futuraBoldeot}');
    src: local('Futura Light BT'), local('FuturaBT-Light'),
        url('${futuraLighteot}?#iefix') format('embedded-opentype'),
        url('${futuraLightwoff2}') format('woff2'),
        url('${futuraLightwoff}') format('woff'),
        url('${futuraLightttf}') format('truetype'),
        url('${futuraLightsvg}#FuturaBT-Light') format('svg');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Futura';
    src: url('${futuraBoldeot}');
    src: local('Futura-Bold'),
        url('${futuraBoldeot}?#iefix') format('embedded-opentype'),
        url('${futuraBoldwoff2}') format('woff2'),
        url('${futuraBoldwoff}') format('woff'),
        url('${futuraBoldttf}') format('truetype'),
        url('${futuraBoldsvg}#Futura-Bold') format('svg');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Futura Bk BT';
    src: url('${futuraBookeot}');
    src: local('Futura Book BT'), local('FuturaBT-Book'),
        url('${futuraBookeot}?#iefix') format('embedded-opentype'),
        url('${futuraBookwoff2}') format('woff2'),
        url('${futuraBookwoff}') format('woff'),
        url('${futuraBookwttf}') format('truetype'),
        url('${futuraBooksvg}#FuturaBT-Book') format('svg');
    font-weight: normal;
    font-style: normal;
}
`;

export default fonts;
