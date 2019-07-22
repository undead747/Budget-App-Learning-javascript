class UI {
  constructor() {
    this.budgetFeedback = document.querySelector(".budget-feedback");
    this.expenseNameFeedback = document.querySelector(".expenseName-feedback");
    this.expenseValueFeedback = document.querySelector(".expenseValue-feedback");
    this.budgetForm = document.getElementById("budget-form");
    this.budgetInput = document.getElementById("budget-input");
    this.budgetAmount = document.getElementById("budget-amount");
    this.expenseAmount = document.getElementById("expense-amount");
    this.balance = document.getElementById("balance");
    this.balanceAmount = document.getElementById("balance-amount");
    this.expenseForm = document.getElementById("expense-form");
    this.expenseInput = document.getElementById("expense-input");
    this.amountInput = document.getElementById("amount-input");
    this.expenseList = document.getElementById("expense-list");
    this.itemList = [];
    this.itemID = 0;
  }

  submitBudgetForm() {
    const budgetInput = this.budgetInput.value;

    if (budgetInput === '' || budgetInput < 0) {
      this.budgetFeedback.classList.add('showItem');
      this.budgetFeedback.innerHTML = `<p>your budget can't be empty or negative </p>`;

      const self = this;

      setTimeout(function () {
        self.budgetFeedback.classList.remove("showItem");
      }, 3000);
    } else {
      this.budgetAmount.textContent = budgetInput;
      this.budgetInput.value = '';

      this.showBalance(budgetInput);
    }

  }

  showBalance(budgetInput) {
    const expense = budgetInput - this.totalExpense();

    if (expense < 0) {
      this.balance.classList.remove('showBlack', 'showGreen');
      this.balance.classList.add('showRed');
    } else if (expense === 0) {
      this.balance.classList.remove('showRed', 'showGreen');
      this.balance.classList.add('showBlack');
    } else {
      this.balance.classList.remove('showBlack', 'showRed');
      this.balance.classList.add('showGreen');
    }

    this.balanceAmount.textContent = expense;
  }

  totalExpense() {
    let total = 100;

    return total;
  }

  submitExpenseForm() {
    const expenseInput = this.expenseInput.value;
    const amountInput = this.amountInput.value;

    const self = this;

    if (expenseInput === '') {
      this.expenseNameFeedback.classList.add('showItem');
      this.expenseNameFeedback.innerHTML = `<p>your expense name can't be empty</p>`;


      setTimeout(function () {
        self.expenseNameFeedback.classList.remove("showItem");
      }, 3000);
    } else if (amountInput === '' || amountInput < 0) {
      this.expenseValueFeedback.classList.add('showItem');
      this.expenseValueFeedback.innerHTML = `<p>your expense value can't be empty or negative</p>`;

      setTimeout(function () {
        self.expenseValueFeedback.classList.remove('showItem');
      }, 3000);
    } else {
      let amount = parseInt(amountInput);
      this.expenseInput.value = '';
      this.amountInput.value = '';

      let expense = {
        id: this.itemID,
        title: expenseInput,
        amount: amount,
      }

      this.itemID++;
      this.itemList.push(expense);
      this.addExpense(expense);
    }

  }


  addExpense(expense) {
    const div = document.createElement('div');
    div.classList.add('expense');
    
    div.innerHTML = `
  <div class="expense-item d-flex justify-content-between align-items-baseline">

  <h6 class="expense-title mb-0 text-uppercase list-item">${expense.title}</h6>
  <h5 class="expense-amount mb-0 list-item">${expense.amount}</h5>

  <div class="expense-icons list-item">

   <a href="#" class="edit-icon mx-2" data-id="${expense.id}">
    <i class="fas fa-edit"></i>
   </a>
   <a href="#" class="delete-icon" data-id="${expense.id}">
    <i class="fas fa-trash"></i>
   </a>
  </div>
 </div>    
  
  `;

    this.expenseList.appendChild(div);
  }
}

function eventListenters() {
  const budgetForm = document.getElementById('budget-form');
  const expenseForm = document.getElementById('expense-form');
  const expenseList = document.getElementById('expense-list');

  const ui = new UI();

  budgetForm.addEventListener('submit', function (event) {
    event.preventDefault();

    ui.submitBudgetForm();
  })

  expenseForm.addEventListener('submit', function (event) {
    event.preventDefault();

    ui.submitExpenseForm();
  })

  expenseList.addEventListener('submit', function (event) {
    event.preventDefault();
  })
}

document.addEventListener('DOMContentLoaded', function () {
  eventListenters();
})