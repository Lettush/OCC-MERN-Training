
#finds and prints the sum of all even numbers between 1 to 20

sum = 0

for i in range(1, 21):
    if i % 2 == 0:
         sum = sum + i

print(f"The sum of all even numbers between 1 to 20 is {sum}")
