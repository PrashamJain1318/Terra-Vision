import EmergencyContact from '../models/EmergencyContact.js';

export const EmergencyService = {
  getEmergencyContacts: async (destination = 'Amritsar, Punjab') => {
    let contacts = await EmergencyContact.find({ destination });
    if (!contacts.length) {
      contacts = [
        await EmergencyContact.create({ destination, name: 'Tourist Police Control Room', role: 'Police', phone: '112', category: 'police' }),
        await EmergencyContact.create({ destination, name: 'Amritsar Central Hospital', role: 'Medical', phone: '102', category: 'ambulance' }),
      ];
    }
    return contacts;
  },
};

export default EmergencyService;
