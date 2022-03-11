import os
import json
import math

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

    def rainbow():
        for x in range(255):
            red = (math.sin(x) + 1) * 128 - 1
            green = (math.sin(x + ((2 * math.pi) / 3)) + 1) * 128 - 1
            blue = (math.sin(x + ((4 * math.pi) / 3)) + 1) * 128 - 1


def main():
    data = Data()
    while True:
        data.readColors()
        data.display()

if __name__=='__main__':
    main()