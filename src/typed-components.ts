import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

interface IThemeInterface {
  blueColor: string;
  faceBookColor: string;
  googleColor: string;
  blackColor: string;
  yellowColor: string;
  greyColor: string;
}

const {
  default: styled,
  css,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<IThemeInterface>;

export { css, ThemeProvider };
export default styled;
