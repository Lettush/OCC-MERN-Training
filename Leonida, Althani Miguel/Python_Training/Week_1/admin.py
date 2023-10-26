
#initializes an empty list to store dictionary
user_list = [ 
    {
        "username": "admin",
        "age": 32,
        "isAdmin" : True
    },
    {
        "username": "migs",
        "age": 20,
        "isAdmin" : False
    }
]



def view_username():
      print("\nList of all users:")
      for user in user_list:
            print(f"Username: {user["username"]}, Age: {user["age"]:.0f}, Admin: {user["isAdmin"]}")



def search_username(user_input):
    for user in user_list:
        if user_input == user["username"]:
            return user["isAdmin"]             
        


def add_user():
     username = input("\nEnter new username: ")
     age = float(input("Enter age: "))
     admin = input("Make this an administrator? (yes/no): ").lower()

     if admin == "yes":
          new_user = {
               "username": username,
               "age": age,
               "isAdmin" : True
          }
     elif admin == "no":
          new_user = {
               "username": username,
               "age": age,
               "isAdmin" : False               
          }
     
     user_list.append(new_user)
     print(f"\nUser {new_user["username"]} has been added!")



def admin(user_input):

        string = f"\nWelcome, {user_input}!"
        string += "\nYou have admin privileges"
        string += "\nYou are eligible to access this content."

        print(string)

        answer = input("\nDo you want to register a new user? (yes/no)? ").lower()

        if answer == "yes":
            add_user()
            view_username()
        elif answer == "no":
             view_username()
       
            

def not_admin(user_input):
        string = f"\nWelcome, {user_input}!"
        string += "\nYou do not have admin privileges"
        string += "\nYou are eligible to access this content.\n"

        print(string)
        view_username()



while True:
    user_input = input("\nType cancel if you want to exit the program.\nEnter your username: ").lower()
    
    search_username(user_input)

    if search_username(user_input) == True:
        admin(user_input)
    elif search_username(user_input) == False:
        not_admin(user_input)
    elif user_input == "cancel":
        break
    else:
         print(f"\nUser {user_input} cannot be found.")
    