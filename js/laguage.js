
        class languageUI {
            constructor() {
                this.language = {
                    eng: {
                        appTitle: "budget app",
                        budgetRequest: "please enter your budget",
                        budgetSubmit: "calculate",
                        expenseNameTitle: "please enter your expense title",
                        expenseValueTitle: "please enter expense amount",
                        expenseSubmit: "add expense",
                        budgetTitle : "budget",   
                        expenseTitle : "expenses",
                        balanceTitle : "balance",
                        expenseElementTitle : "Expense Title",
                        expenseElementValue : "Expense Value",
                    },
                    jap: {
                        appTitle: "予算のアプリケーション",
                        budgetRequest: "客さんの予算を記入してください",
                        budgetSubmit: "計算",
                        expenseNameTitle: "使用の目的を記入してください",
                        expenseValueTitle: "値段を記入してください",
                        expenseSubmit: "計算",
                        budgetTitle : "予算",   
                        expenseTitle : "使用費",
                        balanceTitle : "結果",
                        expenseElementTitle : "使用費タイトル",
                        expenseElementValue : "使用費の価値",
                    }
                };
                this.appTitle = document.getElementById("app-title");
                this.budgetRequest = document.getElementById("budget-request");
                this.budgetSubmit = document.getElementById("budget-submit");
                this.expenseNameTitle = document.getElementById("expense-name-title");
                this.expenseValueTitle = document.getElementById("expense-value-title");
                this.expenseSubmit = document.getElementById("expense-submit");
                this.languageChange = document.getElementById("language-change");
                
                this.budgetTitle = document.getElementById("budget-title");
                this.expenseTitle = document.getElementById("expense-title");
                this.balanceTitle = document.getElementById("balance-title"); 
                
                this.expenseElementTitle = document.getElementById("expense-element-title");
                this.expenseElementValue = document.getElementById("expense-element-value");
            }

            changingLanguage(element){
                const listLanguage = this.language; 

                if(element.dataset.language === "Japan"){
                    
                    this.appTitle.textContent =  listLanguage.jap.appTitle;
                    this.budgetRequest.textContent = listLanguage.jap.budgetRequest;
                    this.budgetSubmit.textContent = listLanguage.jap.budgetSubmit;
                    this.expenseNameTitle.textContent = listLanguage.jap.expenseNameTitle;
                    this.expenseValueTitle.textContent = listLanguage.jap.expenseValueTitle;
                    this.expenseSubmit.textContent = listLanguage.jap.expenseSubmit;
                    this.budgetTitle.textContent = listLanguage.jap.budgetTitle;
                    this.expenseTitle.textContent = listLanguage.jap.expenseTitle;
                    this.balanceTitle.textContent = listLanguage.jap.balanceTitle;
                    this.expenseElementTitle.textContent = listLanguage.jap.expenseElementTitle;
                    this.expenseElementValue.textContent = listLanguage.jap.expenseElementValue;
                
                } else {
                    
                    this.appTitle.textContent =  listLanguage.eng.appTitle;
                    this.budgetRequest.textContent = listLanguage.eng.budgetRequest;
                    this.budgetSubmit.textContent = listLanguage.eng.budgetSubmit;
                    this.expenseNameTitle.textContent = listLanguage.eng.expenseNameTitle;
                    this.expenseValueTitle.textContent = listLanguage.eng.expenseValueTitle;
                    this.expenseSubmit.textContent = listLanguage.eng.expenseSubmit;
                    this.budgetTitle.textContent = listLanguage.eng.budgetTitle;
                    this.expenseTitle.textContent = listLanguage.eng.expenseTitle;
                    this.balanceTitle.textContent = listLanguage.eng.balanceTitle;
                    this.expenseElementTitle.textContent = listLanguage.eng.expenseElementTitle;
                    this.expenseElementValue.textContent = listLanguage.eng.expenseElementValue;

                }
            }

        }

        function eventListeners() {
            const languageChange = document.getElementById("language-change");

            const ui = new languageUI();

            languageChange.addEventListener('click', (event) => {
                let element = event.target;

                if (element.parentElement.classList.contains('language')) {
                    ui.changingLanguage(element);
                }
            })
        }

        document.addEventListener('DOMContentLoaded', function () {
            eventListeners();
        })