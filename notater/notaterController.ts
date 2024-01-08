import notaterService from './notaterService'
import { INote, INoteDTO } from './notes';
import { Request, Response } from 'express';

const service = new notaterService()
const router = require('express').Router();

router.get('/:id', (req: Request, res: Response) => {
    console.log(service.getAllById(parseInt(req.params.id)));
    res.send(service.getAllById(parseInt(req.params.id)))
})
router.get('/all', (req: Request, res: Response) => {
    return service.getAll()
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