import express from 'express';
import voiceController from '../controllers/voiceController.js';
import { validateInteract } from '../validators/voiceValidator.js';

const router = express.Router();

router.post('/interact', validateInteract, voiceController.processInteraction);
router.post('/transcribe', voiceController.transcribeSpeech);
router.post('/synthesize', voiceController.synthesizeText);
router.post('/intent', voiceController.classifyIntent);
router.post('/translate', voiceController.translateVoice);

export default router;
