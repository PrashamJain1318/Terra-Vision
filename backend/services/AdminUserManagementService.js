export const AdminUserManagementService = {
  async getAllUsers() {
    return [
      { id: 'u1', name: 'Elena Rostova', email: 'elena@explores.ai', role: 'admin', status: 'active', verifiedTraveler: true, createdAt: '2025-11-12' },
      { id: 'u2', name: 'Marcus Vance', email: 'marcus@foodie.com', role: 'moderator', status: 'active', verifiedTraveler: true, createdAt: '2025-12-04' },
      { id: 'u3', name: 'Aria Thorne', email: 'aria@aurora.is', role: 'user', status: 'active', verifiedTraveler: false, createdAt: '2026-01-18' },
      { id: 'u4', name: 'Suspicious Bot Account', email: 'spam@botnet.xyz', role: 'user', status: 'banned', verifiedTraveler: false, createdAt: '2026-07-21' },
    ];
  },
};

export default AdminUserManagementService;
