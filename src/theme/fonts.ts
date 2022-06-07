import {extendTheme} from 'native-base';

export default extendTheme({
  fontConfig: {
    DMSans: {
      100: {
        normal: 'DMSans-Medium',
        italic: 'DMSans-MediumItalic',
      },
      200: {
        normal: 'DMSans-Medium',
        italic: 'DMSans-MediumItalic',
      },
      300: {
        normal: 'DMSans-Medium',
        italic: 'DMSans-MediumItalic',
      },
      400: {
        normal: 'DMSans-Medium',
      },
      500: {
        normal: 'DMSans-Medium',
        italic: 'DMSans-MediumItalic',
      },
      600: {
        normal: 'DMSans-Medium',
        italic: 'DMSans-MediumItalic',
      },
      700: {
        normal: 'DMSans-Bold',
        italic: 'DMSans-BoldItalic',
      },
      800: {
        normal: 'DMSans-Bold',
        italic: 'DMSans-BoldItalic',
      },
      900: {
        normal: 'DMSans-Bold',
        italic: 'DMSans-BoldItalic',
      },
    },
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: 'DMSans',
    body: 'DMSans',
    mono: 'DMSans',
  },
});
