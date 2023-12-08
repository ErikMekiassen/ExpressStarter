import brukerService from './brukerService'
import { IBruker, IBrukerDTO } from './bruker';
const service = new brukerService()
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(service.getAllByDateAdded())
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