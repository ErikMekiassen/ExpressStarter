import notaterService from './notaterService'
import { INote, INoteDTO } from './notes';
const service = new notaterService()
const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
    console.log(service.getAllById(req.params.id));
    res.send(service.getAllById(req.params.id))
})
router.get('/all', (req, res) => {
    return service.getAll()
})
router.post('/', (req, res) => {
    service.post(req.body)
    res.send('')
})
router.put('/:id', (req, res) => {
    service.put(req.params.id, req.body)
    res.send('')
})

export default router;