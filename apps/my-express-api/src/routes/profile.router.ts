import { Router } from 'express';
import {
  createProfile,
  deleteProfile,
  getProfiles,
  updateProfile
} from '../controllers/profile.controller';

const profileRouter = Router();

profileRouter.get('/', getProfiles);
profileRouter.post('/', createProfile);
profileRouter.put('/:id', updateProfile);
profileRouter.delete('/:id', deleteProfile);

export default profileRouter; 