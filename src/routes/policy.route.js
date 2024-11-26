import express from 'express';
import * as PolicyController from '../controllers/policy.controller';
import { userAuth } from '../middlewares/auth.middleware';
import { verifyRole } from '../middlewares/verifyRole.middleware';

const router = express.Router();

router.post('/createPolicy',userAuth,verifyRole("Customer"), PolicyController.newPolicy);

router.get('/getPolicyById/:id', PolicyController.getPolicyById);

router.get('/getPolicy',userAuth, PolicyController.getPolicy);



export default router;
