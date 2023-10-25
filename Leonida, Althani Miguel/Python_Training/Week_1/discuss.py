
# # #declaring variable
# # #directly type variable name. No need of the data type
# # variable_string = 'chair'
# # var_int = 1
# # var_float = 1.2



# # #boolean value are capitalized
# # boolean_true = True
# # boolean_false = False



# # #printing
# # print('Hello World')

# # #using f-string
# # print(f'My favorite thing is {variable_string}')


# # print("\n")


# # #if statements
# # x = 10

# # if x > 5:
# #     print("x is greater than 5")
# # else:
# #     print("x is less than 5")


# # #else if statement
# # if x < 5:
# #     print("x is less than 5")
# # elif x == 10:
# #     print("x is equal to 10")
# # else:
# #     print("x is greater than 5")


# # #AND operator
# # x = 41

# # if x >= 1 and x <= 10:
# #     print("x is part of the range")
# # elif x >= 11 and x <= 20:
# #     print("x is part of the second range")
# # else:
# #     print("x is a special number")


# # #OR operator
# # x = 10.2

# # if x >= 1 or x <= 10:
# #     print("x is part of the range")
# # elif x >= 11 or x <= 20:
# #     print("x is part of the second range")
# # else:
# #     print("x is a special number")


# # print("\n")


# # #input function: asks for user input
# # age = int(input("Enter your age: "))
# # print(age)


# # print("\n")


# # #for loop
# # fruits = ["apple", "banana", "cherry"] #list variable

# # for fruit in fruits:
# #     print(f"I like {fruit}s")


# # print("\n")


# # #while loop
# # count = 1

# # while count <=5:
# #     print(f'Count: {count}')
# #     count +=1


# # print("\n")


# # #functions
# # #def : define
# # # indention is important for the code block
# # def greet_day_one(name): 
# #     return "hello " + name
# # print(greet_day_one("Migs"))


# # print("\n")


# # #storing a function in a variable
# # greet = greet_day_one("Migs")
# # print(greet)


# # print("\n")


# # #basic libraries
# # import math
# # print(math.sqrt(16)) #square root of a number



# # print("\n")



# # #creating a function
# # class Person:
# #     def __init__(self, name):
# #         self.name = name
    
# #     def greet(self):
# #         return f"Hello, my name is {self.name}."

# # person = Person("Alice")
# # print(person.greet())


# print("\n")


# #data type
# #int
# total_copies = 100
# copies_borrowed = 30

# available_copies = total_copies - copies_borrowed

# print(f"There are {available_copies} copies available")


# print("\n")


# #float
# principal = 1000.0
# rate = 0.05
# time = 5 #years

# final_amount = principal * (1 + rate) ** time

# print(f"The final amount after {time} year is ${final_amount: .2f}")


# print("\n")


# #string
# user_message = "Hello, how are you today?"
# response = "I'm doing well. Thank you"

# #Concat and display the conversation
# full_conversation = user_message + " " + response
# print(full_conversation)


# print("\n")


# #boolean
# is_authenticated = True
# has_access_key = True

# if is_authenticated and has_access_key:
#     print("Access granted to the secured area.")
# else:
#     print("Access denied")


# print("\n")


# #variable declaration and assignment
# product_name = "laptop"
# product_quantity = 50
# product_price = 1200.00

# #calculate the total value of the product in stock
# total_value = product_quantity * product_price

# #Display the product information
# print(f"Product Name: {product_name}")
# print(f"Available Quantity: {product_quantity}")
# print(f"Unit Price: {product_price: .2f}")
# print(f"Total Value in Stock: {total_value: .2f}")



# print("\n")



# #Dynamic Typing (automatic detection of data type)
# #int
# variable = 42
# print(f"{variable} data is of type: {type(variable).__name__}")

# #string
# variable = "Hello Python"
# print(f"{variable} data is of type: {type(variable).__name__}")

# #list
# variable = [1,2,3,4,5]
# print(f"{variable} data is of type: {type(variable).__name__}")

# #dictionary
# variable = {"name": "John", "age": 30}
# print(f"{variable} data is of type: {type(variable).__name__}")

# #boolean 
# variable = True
# print(f"{variable} data is of type: {type(variable).__name__}")



# print("\n")



# #Item 1
# item1_name = "Laptop"
# item1_quantity = 2
# item1_price = 1200.00

# #Item 2
# item2_name = "Smartphone"
# item2_quantity = 3
# item2_price = 600.00

# #Calculate
# total_cost = (item1_quantity * item1_price) + (item2_quantity * item2_price)

# print(f"Item 1: {item1_name} (Quantity: {item1_quantity}, Price: ${item1_price: .2f} each)")
# print(f"Item 2: {item2_name} (Quantity: {item2_quantity}, Price: ${item2_price: .2f} each)")
# print(f"Total Cost: ${total_cost: .2f}")



# print("\n")



# #String Manipulation
# receipt = f"Receipt for your purchase:\n\n"
# receipt += f"Item 1: {item1_name} x {item1_quantity} \t ${item1_quantity * item1_price: .2f}\n"
# receipt += f"Item 2: {item2_name} x {item2_quantity} \t ${item2_quantity * item2_price: .2f}\n"
# receipt += f"-----------------------------\n"
# receipt += f"Total Cost: \t \t ${total_cost: .2f}"

# print(receipt)



# print("\n")



# # Built In Functions
# article_data = [
#     {
#         "title": "Python for Beginners",
#         "author": "Alice",
#         "content": "Python is a versatile and beginner-friendly programming language",
#     },
#     {
#         "title": "Data Science with Python",
#         "author": "Bob",
#         "content": "Python is widely used for data analytics and machine learning"
#     }
# ]



# for article in article_data:
    
#     #extracts the value of the content property of each article
#     content = article["content"]

#     #.split : split a string into substring and returns as a list(array)
#     word_count = len(content.split())

#     import datetime
#     publication_date = datetime.date.today()

#     print(f"Title: {article['title']}")
#     print(f"Author: {article['author']}")
#     print(f"Word Count: {word_count}")
#     print(f"Publication Date: {publication_date}")
#     print(f"Title: {article['title']}")



# print("\n")



























































