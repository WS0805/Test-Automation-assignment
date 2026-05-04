#1. Check duplicate items from list A and list B and append to a new list.
#  Using your preferred programming language.
# List A : [1,2,3,5,6,8,9]
# List B : [3,2,1,5,6,0]

list_a = [1,2,3,5,6,8,9]
list_b = [3,2,1,5,6,0]

# Find duplicates
duplicates = list(set(list_a) & set(list_b))

print(duplicates)

