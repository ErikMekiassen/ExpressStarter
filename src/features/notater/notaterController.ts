import notaterService from './notaterService'
import { INote, INoteDTO } from './notes';
import { Request, Response } from 'express';

const service = new notaterService()
const router = require('express').Router();

router.get('/bruker/:id', (req: Request, res: Response) => {
    console.log(service.getAllById(parseInt(req.params.id)));
    return res.send(service.getAllById(parseInt(req.params.id)))
})
router.get('/', (req: Request, res: Response) => {
    console.log("service.getAll()");
    console.log(service.getAll());
    return res.send(service.getAll())
})
router.post('/', (req: Request, res: Response) => {
    service.post(req.body)
    return res.send('')
})
router.put('/:id', (req: Request, res: Response) => {
    service.put(req.params.id, req.body)
    return res.send('')
})

export default router;