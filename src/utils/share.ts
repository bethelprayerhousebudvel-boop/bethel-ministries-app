import { Linking, Share } from 'react-native';

export const openLink = (url: string) => {
  Linking.openURL(url);
};

export const shareText = async (text: string) => {
  await Share.share({ message: text });
};
