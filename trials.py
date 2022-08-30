"""Python functions for JavaScript Trials 1."""


def output_all_items(items):
    for item in items:
        print(item)

# output_all_items([1, 'hello', True]);

def get_all_evens(nums):
    evenNums = []
    for num in nums:
        if num % 2 == 0:
            evenNums.append(num)
    return evenNums
get_all_evens([7, 8, 10, 1, 2, 2])

def get_odd_indices(items):
    results = []

    for item in items:
        #print ("item.index: ", items.index(item))
        if (items.index(item) % 2) != 0:
            results.append(item)

    return results
# print(get_odd_indices([1, 'hello', True, 500]))
#   ==>         ['hello', 500]

def print_as_numbered_list(items):
    i = 1
    for item in items:
        print(f'{i}.{item}')
        i += 1

# print_as_numbered_list([1, 'hello', True])

def get_range(start, stop):
    nums = []

    for num in range(start,stop):
        nums.append(num)
    return nums

# print(get_range(0, 5))

def censor_vowels(word):
    char = []
    for letter in word:
        if letter in 'aeiou':
            char.append('*')
        else:
            char.append(letter)
            
    return "".join(char)
# print(censor_vowels('hello world'))

def snake_to_camel(string):
    camelCase =[]

    for word in string.split("_"):
        camelCase.append(f"{word[0].upper()}{word[1:len(word)]}")
    return "".join(camelCase)

# print(snake_to_camel('hello_world'))
#   ==>  'HelloWorld'


def longest_word_length(words):
    longest = len(words[0])
    for word in words:
        if longest < len(word):
            longest = len(word)
            
    return longest
# print(longest_word_length(['hello', 'world']))


def truncate(string):
   result = []
   for char in string:
    print(char)
    if len(result) == 0 or char != result[-1]:
        result.append(char)
        print('result:', result)

   return "".join(result)

print(truncate('aaaabbbbcccca'))
#   ==> 'abca'


def has_balanced_parens(string):
    parens = 0
    for char in string:
        if char == '(':
            parens += 1
        elif char == ')':
            parens -= 1
            if parens < 0:
                return False
    return parens == 0
# print(has_balanced_parens('((This) (is) (good))'))



def compress(string):
    compressed = []

    currChar = ''
    charCount = 0

    for char in string:
        if (char != currChar):
            compressed.append(currChar)

            if (charCount > 1):
                compressed.append(str(charCount))

            currChar = char
            charCount = 0
        
        charCount += 1
    
    compressed.append(currChar)
    if charCount > 1:
        compressed.append(str(charCount))
    
    return "".join(compressed)

print(compress('aabbaabb'))