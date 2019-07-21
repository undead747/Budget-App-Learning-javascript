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
    }
  }

  submitExpenseForm() {
    const expenseInput = this.expenseInput.value;
    const amountInput = this.amountInput.value;
    
    const self = this;

    if(expenseInput === ''){
      this.expenseNameFeedback.classList.add('showItem');
      this.expenseNameFeedback.innerHTML = `<p>your expense name can't be empty</p>`;
        

      setTimeout(function(){
          self.expenseNameFeedback.classList.remove("showItem"); 
      },3000);
    }
 
    
    if(amountInput === '' || amountInput < 0){
      this.expenseValueFeedback.classList.add('showItem');
      this.expenseValueFeedback.innerHTML = `<p>your expense value can't be empty or negative</p>`;
      
      setTimeout(function(){
         self.expenseValueFeedback.classList.remove('showItem'); 
      },3000);
    }

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