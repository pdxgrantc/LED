import os
import json


# Opening JSON file

class Data:
  def __init__(self):
    workDir = os.getcwd()
    self.path = workDir + "/database/data/color.json"
    self.red = 0
    self.green = 0
    self.blue = 0

    def readColors(self):
        with open(self.path, 'r') as myfile:
            data=myfile.read()

        jsonOBJ = json.loads(data)

        self.red = jsonOBJ["redVal"]
        self.green = jsonOBJ["greenVal"]
        self.blue = jsonOBJ["blueVal"]

    def display(self):
        print(self.red)
        print(self.green)
        print(self.blue)

def main():
    color = Data

    #data.readColors()
    color.display()

    while True:
        pass

if __name__=='__main__':
    main()