import random



def start_game():
    print("\n\nFor this game, you have to guess my number. \nYou have 5 lives.")

    while True:
        answer = int(input("\n\nGive me your guess: "))

        if answer != secret_number and lives != 1:
            wrong(answer)
        elif answer != secret_number and lives == 1:
            print(f"\n\nSorry, you are dead.\nThe secret number is {secret_number}\n\n")
            break
        elif answer == secret_number:
            print("\n\nCongratulations! \nYou got it right!\n\n")
            break



def wrong(answer):
    global lives 
    lives -= 1
    
    string = "\n\n\nOh nooooes. Your guess is wrong."
    string += f"\nYou have {lives} lives left"
    string += "\n\nLet me give you a clue."

    if answer < secret_number:
        string += "\nMy secret number is greater than your guess!" 
    elif answer > secret_number:
        string += "\nMy secret number is less than your guess!" 

    print(string)
        



while True:
    
    #generates a secret random number
    secret_number = random.randint(1,100)
    # print(f"{secret_number}")

    #initializes the number of tries
    lives = 5

    print("\n\nHi! I have a game for you.")
    user_confirm = input("Do you want to guess a number? (yes/no) ").lower()

    if user_confirm == "yes":
        start_game()
    elif user_confirm == "no":
        print("\nThat's sad. Goodbye!")
        break