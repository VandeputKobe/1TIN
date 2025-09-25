import random

def raad_getal():
    randomgetal = random.randint(1, 10)
    getalingegeven = str(input("raad het getal: "))
    if len(getalingegeven) == 0:
        print("je moet een getal ingeven")
        raad_getal()
    elif getalingegeven == "stop":
        return
    elif int(getalingegeven) == randomgetal:
        print("gewonnen")
        raad_getal()
    else:
        print("verloren")
        print("het getal was", randomgetal)
        raad_getal()

raad_getal()
