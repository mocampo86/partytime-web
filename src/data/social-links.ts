export type SocialLinkId = 'instagram' | 'facebook';

export type SocialLink = {
  id: SocialLinkId;
  label: string;
  displayName: string;
  url: string;
};

export const socialLinks: readonly SocialLink[] = [
  {
    id: 'instagram',
    label: 'Instagram',
    displayName: '@ptimeuy',
    url: 'https://www.instagram.com/ptimeuy',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    displayName: 'PTimeUY',
    url: 'https://www.facebook.com/PTimeUY/',
  },
];
