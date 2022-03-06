import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      /* Gothic CG No3 */
      @font-face {
        font-family: 'Gothic CG No3';
        src: url('./fonts/GothicCGNo3Regular.woff2') format('woff2'),
          url('./fonts/GothicCGNo3Regular.woff') format('woff');
      }
      /* Verlag */
      /* light */
      @font-face {
        font-family: 'Verlag';
        font-style: normal;
        font-weight: 400;
        src: url('./fonts/Verlag-Light.woff2') format('woff2'),
          url('./fonts/Verlag-Light.woff') format('woff');
      }
      /* lightItalic */
      @font-face {
        font-family: 'Verlag';
        font-style: italic;
        font-weight: 400;
        src: url('./fonts/Verlag-LightItalic.woff2') format('woff2'),
          url('./fonts/Verlag-LightItalic.woff') format('woff');
      }
      /* book */
      @font-face {
        font-family: 'Verlag';
        font-style: normal;
        font-weight: 600;
        src: url('./fonts/Verlag-Book.woff2') format('woff2'),
          url('./fonts/Verlag-Book.woff') format('woff');
      }
      /* bold */
      @font-face {
        font-family: 'Verlag';
        font-style: normal;
        font-weight: 700;
        src: url('./fonts/Verlag-Bold.woff2') format('woff2'),
          url('./fonts/Verlag-Bold.woff') format('woff');
      }
      `}
  />
)

export default Fonts