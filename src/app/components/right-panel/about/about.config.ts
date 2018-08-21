interface IContact {
  value: string;
  label: string;
  iconName: string;
}

export const CONTACTS: IContact[] = [
  {
    value: 'rightPanel.about.contacts.dateOfBirth.value',
    label: 'rightPanel.about.contacts.dateOfBirth.label',
    iconName: 'calendar'
  },
  {
    value: 'rightPanel.about.contacts.address.value',
    label: 'rightPanel.about.contacts.address.label',
    iconName: 'map-marker'
  },
  {
    value: 'rightPanel.about.contacts.email.value',
    label: 'rightPanel.about.contacts.email.label',
    iconName: 'envelope'
  },
  {
    value: 'rightPanel.about.contacts.phone.value',
    label: 'rightPanel.about.contacts.phone.label',
    iconName: 'phone'
  },
  {
    value: 'rightPanel.about.contacts.skype.value',
    label: 'rightPanel.about.contacts.skype.label',
    iconName: 'skype'
  }
];

export const TESTIMONIALS: string[] = [
  'oleksandrShchuruk', 'olesiaShybkaya', 'oleksandrMakiian'
];

export const ADDITIONAL_INFORMATION: {key: string; flag: boolean}[] = [
  {
    key: 'rightPanel.about.additionalInformation.relocate',
    flag: true
  },
  {
    key: 'rightPanel.about.additionalInformation.employmentForm',
    flag: true
  },
  {
    key: 'rightPanel.about.additionalInformation.studying',
    flag: true
  },
  {
    key: 'rightPanel.about.additionalInformation.overtimes',
    flag: false
  }
];

export const INTERESTS: {key: string; iconName: string}[] = [
  {
    key: 'rightPanel.about.interests.traveling',
    iconName: 'suitcase'
  },
  {
    key: 'rightPanel.about.interests.technologies',
    iconName: 'gamepad'
  },
  {
    key: 'rightPanel.about.interests.boardgames',
    iconName: 'puzzle-piece'
  },
  {
    key: 'rightPanel.about.interests.sport',
    iconName: 'futbol-o'
  }
];

