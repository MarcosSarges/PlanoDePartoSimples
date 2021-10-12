// import original module declarations
import 'styled-components';
import Theme from './theme';

type MyTheme = typeof Theme;

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends MyTheme {
    // borderRadius: string;
    // colors: {
    //   main: string;
    //   secondary: string;
    // };
  }
}
