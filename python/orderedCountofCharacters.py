# Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.
# Example:
# ordered_count("abracadabra") == [('a', 5), ('b', 2), ('r', 2), ('c', 1), ('d', 1)]

def ordered_count(inp):
    result, seen = [], set()
    unique = [x for x in inp if not (x in seen or seen.add(x))]
    for i in unique:
        tuple = (i, inp.count(i))
        result.append(tuple)
    return result
