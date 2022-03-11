const { count } = require('console');
const fs = require('fs');

class Config {
    constructor() {
        this.colorConfig;
        this.modeConfig;
        this.makeColorConfig(2, 2, 2);
    }

    makeColorConfig(red, green, blue) {
        var newPost = {
            redVal: red,
            greenVal: green,
            blueVal: blue
        };

        this.colorConfig = newPost;
        this.writeToFile();
    }
    
    makeModeConfig(value) {
        var newPost = {
            value: value
        }

        this.modeConfig = newPost;
        this.writeToFile();
    }

    deleteContents() {
        fs.unlinkSync(__dirname + '/data/color.json');
        fs.unlinkSync(__dirname + '/data/mode.json');
    }

    writeToFile() {
        this.deleteContents();
        const colorString = JSON.stringify(this.colorConfig, null, 2);
        fs.writeFileSync(__dirname + '/data/color.json', colorString);


        this.deleteContents();
        const modeString = JSON.stringify(this.modeConfig, null, 2);
        fs.writeFileSync(__dirname + '/data/color.json', modeString);
    }
}
module.exports.Config = Config;
