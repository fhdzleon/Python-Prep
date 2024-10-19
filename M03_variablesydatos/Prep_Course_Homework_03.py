#!/usr/bin/env python
# coding: utf-8

# ## Variables

# 1) Crear una variable que contenga un elemento del conjunto de números enteros y luego imprimir por pantalla

# In[7]:

num = 3
print(num)


# 2) Imprimir el tipo de dato de la constante 8.5

# In[3]:
type(8.5)




# 3) Imprimir el tipo de dato de la variable creada en el punto 1

# In[8]:
type(num)




# 4) Crear una variable que contenga tu nombre

# In[2]:
myName = "Felipe"



# 5) Crear una variable que contenga un número complejo

# In[3]:

numComplejo = 5 +2j



# 6) Mostrar el tipo de dato de la variable crada en el punto 5

# In[4]:
type(numComplejo)




# 7) Crear una variable que contenga el valor del número Pi redondeado a 4 decimales

# In[1]:


pi = 3.1416


# 8) Crear una variable que contenga el valor 'True' y otra que contenga el valor True. ¿Se trata de lo mismo?

# In[3]:

trueString = "True"
trueBool = True

#No son lo mismo uno es string el otro booleano

# 9) Imprimir el tipo de dato correspondientes a las variables creadas en el punto 8

# In[5]:

print(type(trueString), type(trueBool))



# 10) Asignar a una variable, la suma de un número entero y otro decimal

# In[1]:

x = 5
y = 1.3

suma = x+y

print(suma)



# 11) Realizar una operación de suma de números complejos

# In[2]:

c1 = 5 + 3j
c2 = 2 +5j

resultadoC = c1 +c2

print(resultadoC)



# 12) Realizar una operación de suma de un número real y otro complejo

# In[4]:
realYComplex = x + c1

print(realYComplex)




# 13) Realizar una operación de multiplicación

# In[5]:

print(x*y)



# 14) Mostrar el resultado de elevar 2 a la octava potencia

# In[6]:

print(2**8)


# 15) Obtener el cociente de la división de 27 entre 4 en una variable y luego mostrarla

# In[8]:

dendo = 27
disor = 4

cociente = (dendo / disor)

print( cociente )



# 16) De la división anterior solamente mostrar la parte entera

# In[9]:

entero = (dendo // disor)

print(entero)



# 17) De la división de 27 entre 4 mostrar solamente el resto

# In[1]:

resto = (dendo % disor)

print (resto)



# 18) Utilizando como operandos el número 4 y los resultados obtenidos en los puntos 16 y 17. Obtener 27 como resultado

# In[2]:

operator = (entero * 4 + resto) 

print (operator)



# 19) Utilizar el operador "+" en una operación donde intervengan solo variables alfanuméricas

# In[3]:

hi = "hello"
w = "world"

print(hi + " " + w)



# 20) Evaluar si "2" es igual a 2. ¿Por qué ocurre eso?

# In[4]:

print("2" == 2 )

#Uno es string el otro number



# 21) Utilizar las funciones de cambio de tipo de dato, para que la validación del punto 20 resulte verdadera

# In[11]:

print( int('2') == 2)



# 22) ¿Por qué arroja error el siguiente cambio de tipo de datos? a = float('3,8')

# In[12]:

#por que , no es un separado vlido en python



# 23) Crear una variable con el valor 3, y utilizar el operador '-=' para modificar su contenido y que de como resultado 2.

# In[15]:

w = 3

w-=1

print(w) 



# 24) Realizar la operacion 1 << 2 ¿Por qué da ese resultado? ¿Qué es el sistema de numeración binario?

# In[29]:

print (1<<2)



# 25) Realizar la operación 2 + '2' ¿Por qué no está permitido? ¿Si los dos operandos serían del mismo tipo, siempre arrojaría el mismo resultado?

# In[23]:

print(int("2") + 2)

print ("2" + str(2))




# 26) Realizar una operación válida entre valores de tipo entero y string

# In[30]:
name = "Felipe"
edad = 43

print( name, "tiene ", edad, " años")


