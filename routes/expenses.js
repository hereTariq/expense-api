const router = require('express').Router();
const expenseController = require('../controllers/expenses');

router.get('/get', expenseController.getExpenses);
router.post('/create', expenseController.createExpense);

module.exports = router;
