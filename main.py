import os
import json

workDir = os.getcwd()
 
path = workDir + "/database/data/color.json"
# Opening JSON file
with open(path, 'r') as myfile:
    data=myfile.read()


jsonOBJ = json.loads(data)

print(jsonOBJ["redVal"])
print(jsonOBJ["greenVal"])
print(jsonOBJ["blueVal"])