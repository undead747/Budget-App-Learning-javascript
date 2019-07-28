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
    this.languageChange = document.getElementById("language-change");

    this.language = "English";
    this.itemList = [];
    this.itemID = 0;
  }

  setLanguage(value) {
    this.language = value;
  }

  submitBudgetForm() {
    const budgetInput = this.budgetInput.value;

    if (budgetInput === '' || budgetInput < 0) {
      this.budgetFeedback.classList.add('showItem');
      if(this.language === "English") this.budgetFeedback.innerHTML = `<p>your budget can't be empty or negative </p>`;
        else  this.budgetFeedback.innerHTML = `予算のインプットをブランクしないでください。`;
      const self = this;

      setTimeout(function () {
        self.budgetFeedback.classList.remove("showItem");
      }, 3000);
    } else {
      this.budgetAmount.textContent = budgetInput;
      this.budgetInput.value = '';

      this.showBalance();
    }

  }

  showBalance() {

    const expense = this.totalExpense();
    const total = parseInt(this.budgetAmount.textContent) - expense;

    if (total < 0) {
      this.balance.classList.remove('showBlack', 'showGreen');
      this.balance.classList.add('showRed');
    } else if (total === 0) {
      this.balance.classList.remove('showRed', 'showGreen');
      this.balance.classList.add('showBlack');
    } else {
      this.balance.classList.remove('showBlack', 'showRed');
      this.balance.classList.add('showGreen');
    }

    this.balanceAmount.textContent = total;
  }

  totalExpense() {
    let total = 0;
    let itemList = this.itemList;

    if (itemList.length > 0) {
      total = itemList.reduce((sum, obj, index, itemList) => {
        return sum += obj.amount;
      }, 0) 
    }

    this.expenseAmount.textContent = total;

    return total;
  }

  submitExpenseForm() {
    const expenseInput = this.expenseInput.value;
    const amountInput = this.amountInput.value;
    
    console.log(amountInput);
    
    const self = this;

    if (expenseInput === '') {
      this.expenseNameFeedback.classList.add('showItem');
      if(this.language === "English") this.expenseNameFeedback.innerHTML = `<p>your expense name can't be empty</p>`;
        else this.expenseNameFeedback.innerHTML = `<p>使用費タイトルのインプットをブランクしないでください。</p>`;  

      setTimeout(function () {
        self.expenseNameFeedback.classList.remove("showItem");
      }, 3000);

    } else if (amountInput === '' || amountInput < 0) {

      this.expenseValueFeedback.classList.add('showItem');
      if(this.language === "English") this.expenseValueFeedback.innerHTML = `<p>your expense value can't be empty or negative</p>`;
       else  this.expenseValueFeedback.innerHTML = `<p>使用費価値のインプットをブランクしなくて、０より大きく記入してください。</p>`;
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
      this.showBalance();
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

  editExpense(element) {
    let id = parseInt(element.dataset.id);

    let parent = element.parentElement.parentElement.parentElement;

    this.expenseList.removeChild(parent);

    let expense = this.itemList.filter((item) => {
      return item.id === id;
    })

    this.expenseInput.value = expense[0].title;
    this.amountInput.value = expense[0].amount;

    let tempList = this.itemList.filter((item) => {
      return item.id !== id;
    })

    this.itemList = tempList;
    this.showBalance();

  }

  deleteExpense(element) {
    let id = parseInt(element.dataset.id);

    let parent = element.parentElement.parentElement.parentElement;

    this.expenseList.removeChild(parent);

    let expenseList = this.itemList.filter((item) => {
      return item.id !== id;
    })

    this.itemList = expenseList;
    this.showBalance();

  }
}

function eventListenters() {
  const budgetForm = document.getElementById('budget-form');
  const expenseForm = document.getElementById('expense-form');
  const expenseList = document.getElementById('expense-list');
  const languageChange = document.getElementById("language-change");

  const ui = new UI();

  budgetForm.addEventListener('submit', function (event) {
    event.preventDefault();

    ui.submitBudgetForm();
  })

  expenseForm.addEventListener('submit', function (event) {
    event.preventDefault();

    ui.submitExpenseForm();
  })

  expenseList.addEventListener('click', function (event) {

    let element = event.target.parentElement;

    if (element.classList.contains('edit-icon')) {
      ui.editExpense(element);
    } else if (element.classList.contains('delete-icon')) {
      ui.deleteExpense(element);
    }
  })

  languageChange.addEventListener('click', (event) => {
    let element = event.target;

    if (element.parentElement.classList.contains('language')) {
      ui.setLanguage(element.dataset.language);
    }
  })
}

document.addEventListener('DOMContentLoaded', function () {
  eventListenters();
})