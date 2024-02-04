#Crea una funcion que imprima todas las letras en el orden del abecedario repetidas, cada linea debe imprimir una cadena con las letras repetidas

def countString(string: str):
    letras = 'abcdefghijklmnopqrstuvwxyz0123456789'
    newStr = ""

    for i in letras:
        newStr = ""
        for j in string:
            if i==j:
                newStr+=j
        if newStr!="":
            print(newStr)

print(countString("lluvia de estrellas12123"))