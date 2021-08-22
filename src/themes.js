import { Platform } from 'react-native';
const theme = {
  colors: {
    primary: "#0366d6",
    appBar: "#2F90BF",
    error: "#d73a4a"
  },
  text: {
    fontFamily: Platform.select({
      ios: 'Arial',
      android: 'Roboto',
      default: 'System'
    })
  }
};

export default theme;