class UI {
  constructor() {
    this.budgetFeedback = document.querySelector(".budget-feedback");
    this.expenseFeedback = document.querySelector(".expense-feedback");
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
    
    submitBudgetForm(){
       window.alert("Minh Dep Trai");
    }
} 

function eventListenters(){
    const budgetForm = document.getElementById('budget-form');
    const expenseForm = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');
    
    const ui = new UI();

    budgetForm.addEventListener('submit',function(event){
              event.preventDefault();
              
              ui.submitBudgetForm();
    })

    expenseForm.addEventListener('submit',function(event){
              event.preventDefault();

    })

    expenseList.addEventListener('submit',function(event){
              event.preventDefault();
    })
}

document.addEventListener('DOMContentLoaded',function(){
    eventListenters();
})
