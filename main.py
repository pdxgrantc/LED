import os
import json


# Opening JSON file

class Data:
  def __init__(self):
    workDir = os.getcwd()
    self.path = workDir + "/database/data/color.json"
    self.red
    self.green
    self.blue

    jsonOBJ = json.loads(data)

    def readColors(self):
        with open(self.path, 'r') as myfile:
            data=myfile.read()

        jsonOBJ = json.loads(data)

        self.red = jsonOBJ["redVal"]
        self.green = jsonOBJ["greenVal"]
        self.blue = jsonOBJ["blueVal"]