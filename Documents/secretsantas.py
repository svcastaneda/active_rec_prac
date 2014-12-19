from random import *

people = input('Please enter the names of the participants (separate names with a comma): ').split(', ')
for i in people:
    i = i.capitalize()

SecretSantas = {}
assigned = []
couples = []

done = False
print('Please enter any existing couples (separate names with a comma).')
while done == False:
    newCouple = input('~ ').split(', ')
    for i in newCouple:
        i = i.capitalize()
    if len(newCouple) == 2:
        couples.append({newCouple[0], newCouple[1]})
    else:
        done = True

shuffle(people)

for i in people:
    worked = False
    while worked == False:
        receiver = sample(people, 1)
        receiver = receiver[0]
        checker = {i, receiver}
        
        if i != receiver and receiver not in assigned and checker not in couples:
            SecretSantas[i] = receiver
            assigned += [receiver]
            worked = True
        
print(SecretSantas)
