import { createGlobalStyle } from 'styled-components'

const IconfontStyle = createGlobalStyle`
  @font-face {
    font-family: "iconfont"; /* Project id 3398727 */
    src: url('./iconfont.woff2?t=1652424559047') format('woff2'),
         url('./iconfont.woff?t=1652424559047') format('woff'),
         url('./iconfont.ttf?t=1652424559047') format('truetype');
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export default IconfontStyle
