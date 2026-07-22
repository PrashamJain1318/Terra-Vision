import express from 'express';

const router = express.Router();

router.get('/device-sync', (req, res) => {
  res.json({
    success: true,
    data: {
      deviceId: 'mob_dev_0912',
      offlineStorageStatus: 'synced',
      pendingSyncItemsCount: 0,
      pushNotificationsEnabled: true,
      lastSyncTimestamp: new Date(),
    },
  });
});

router.post('/push-subscribe', (req, res) => {
  const { pushToken, deviceType } = req.body;
  res.json({
    success: true,
    message: 'Mobile push notification subscription registered',
    data: {
      token: pushToken || 'fcm_token_sample_123',
      deviceType: deviceType || 'iOS',
      subscribedAt: new Date(),
    },
  });
});

export default router;
