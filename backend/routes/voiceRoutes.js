import express from 'express';
import voiceController from '../controllers/voiceController.js';

const router = express.Router();

router.get('/health', voiceController.getHealth);
router.post('/chat', voiceController.processInteraction);
router.post('/interact', voiceController.processInteraction);
router.post('/transcribe', voiceController.transcribeSpeech);
router.post('/speak', voiceController.synthesizeText);
router.post('/synthesize', voiceController.synthesizeText);
router.post('/intent', voiceController.classifyIntent);
router.post('/translate', voiceController.translateVoice);
router.post('/detect-language', voiceController.detectLanguage);
router.post('/stop', voiceController.stopSession);
router.post('/reset', voiceController.resetSession);
router.get('/history', voiceController.getHistory);
router.delete('/history', voiceController.deleteHistory);

export default router;
