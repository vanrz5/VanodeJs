const express = require('express')
const router = express.Router()
const { getGoals, setGoal } = require ("../controller/goalcontroller")

router.get('/', getGoals)

router.post('/', setGoal)



module.exports = router