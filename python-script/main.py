from itertools import groupby
import pandas as pd;
import json

df = pd.read_csv('./PEP_HACKDFW_FINAL.csv')
del df['COUNTY']
del df['STATE']
del df['TRADE_CHANNEL']
del df['FSCL_WK_END_DTE']
indexNames = df[ df['SALE_QUANTITY'] <= 0 ].index
df.drop(indexNames , inplace=True)
#gk = groupby("BRAND")
df = df.sort_values(by=["BRAND" , "SIZE_CODE"], ascending=[True, True])
#print(df.head(10))
df2 = df.groupby(['BRAND','SIZE_CODE'])
df3 = df.groupby('BRAND')["SALE_QUANTITY"].sum()
df4 = df.groupby(['BRAND','SIZE_CODE'])["SALE_QUANTITY"].sum()

i = 0
arr = []

for name , group in df2:
    #print(i)
    i = i+1
    #print(name)
    y = df3[(name[0])]
    z = df4[(name[0])][(name[1])]
    #print(y)
    #print(z)
    p = (z/y)*100
    n = 0
    if (p > 75):
        #print(1)
        n = 1
    elif (p>50):
        #print(2)
        n=2
    elif (p>25):
        #print(3)
        n=3
    elif (p>5):
        #print(4)
        n= 4
    else:
        #print(5)
        n=5
    #print(p)
    #print(n)
    dict = {
        "name" : name[0],
        "size_code" : int(name[1]),
        "random_val" : n
    }
    arr.append(dict)
    #print('\n')
print(arr)


with open('new_file.json', 'w') as f:
    json.dump(arr, f, indent=2)