notes = []
max = int(input('Entre une note : '))
for i in range (2) :
    notes.append(int(input('Entre une note : ')))
    if notes[i] > max : 
        max = notes[i]
    i+=1
print(f"la note max est {max}")
    
