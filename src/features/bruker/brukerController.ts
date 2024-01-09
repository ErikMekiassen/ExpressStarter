import brukerService from './brukerService'
import { Request, Response } from 'express';
import { IBruker, IBrukerDTO } from './bruker';
const service = new brukerService()
const express = require('express');
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.send(service.getAllByDateAdded())
})
router.post('/', (req: Request, res: Response) => {
    service.post(req.body)
    res.send('')
})
router.put('/:id', (req: Request, res: Response) => {
    service.put(req.params.id, req.body)
    res.send('')
})

export default router;