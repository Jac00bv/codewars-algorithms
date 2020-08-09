# We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day)
# and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.
# The program reports the nth day (as an integer) on which the evaporator will be out of use.


def evaporator(content, evap_per_day, threshold):
    days = 0
    minimum = threshold*content/100
    while content > minimum:
        content -= evap_per_day*content/100
        days += 1
    return days
