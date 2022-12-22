const Expense = require('../models/expenses');

exports.createExpense = async (req, res, next) => {
    const { title, amount } = req.body;

    if (!title || !amount) {
        return res
            .status(422)
            .json({ status: false, message: "title or amount can't be empty" });
    }
    const newExpense = new Expense({ title, amount });
    const savedExpense = await newExpense.save();
    res.status(201).json({
        status: true,
        message: 'expense created successfully',
        expense: savedExpense,
    });
};

exports.getExpenses = async (req, res, next) => {
    const expenses = await Expense.find();
    if (!expenses || expenses.length == 0) {
        return res
            .status(404)
            .json({ status: false, message: 'Expenses empty' });
    }

    res.status(200).json({ status: true, expenses });
};
