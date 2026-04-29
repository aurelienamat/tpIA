notes = []
moyenne = 0
while True :
    note = int(input('Entre une note : '))
    if note<0 :
        break;
    notes.append(note)
    
for i in range (len(notes)):
    print(notes[i])
    moyenne += notes[i]
    
moyenne/=(len(notes))
print(f"La moyenne est {moyenne}")