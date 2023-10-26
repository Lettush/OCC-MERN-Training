
age = int(input("Input age: "))

if age <= 0:
    print("Invalid number. Input a number that is more than 0")
elif age >= 1 and age <= 12:
    print("Toddler")
elif age >= 13 and age <= 18:
    print("Teenager")
elif age >= 19 and age <= 40:
    print("Adult")
else:
    print("Grandpa")


