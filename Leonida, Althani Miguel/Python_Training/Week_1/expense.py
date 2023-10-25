
#initializes an empty list to store dictionary
expense_list = []

while True:

    menu = f"\n\n----------------------------"

    menu += f"\n\nExpense Tracker Menu\n"
    menu += f"(1) Add an Expense\n"
    menu += f"(2) View Expenses\n"
    menu += f"(3) Calculate the total expense\n"
    menu += f"(4) Quit\n"

    print(menu)

    user_input = int(input("Enter your choice: "))

    print("\n----------------------------")



    if user_input == 1:
        expense_description = input("\nEnter expense description: ")
        expense_amount = float(input("Enter expense amount: $"))

        expense_data = {
            "description" : expense_description,
            "amount" : expense_amount
        }

        expense_list.append(expense_data)
        print("\n\n\nExpense added successfully")



    if user_input == 2:

        print("\nExpense List: \n ")

        for each_expense in expense_list:
            description = each_expense["description"]
            amount = each_expense["amount"]
            
            print(f"{description}: ${amount:.2f}")

    
    
    if user_input == 3:
        sum = 0

        for each_expense in expense_list:
            amount = each_expense["amount"]
            sum += amount

        print(f"\nTotal Expenses: ${sum: .2f}")
    
    
    
    if user_input == 4:
        print("\nOperation Canceled. Thank you!\n")
        break



    if user_input <= 0 or user_input >= 5:
        print("\nOperation Canceled. Thank you!\n")
        break


