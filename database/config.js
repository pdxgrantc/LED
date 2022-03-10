const { count } = require('console');
const fs = require('fs');

class Config {
    constructor() {
        this.currentConfig;
        this.makeColorConfig(2, 2, 2);
    }

    makeColorConfig(red, green, blue) {
        var newPost = {
            redVal: red,
            greenVal: green,
            blueVal: blue
        };

        this.currentConfig = newPost;
        this.writeToFile();
    }

    deleteContents() {
        fs.unlinkSync(__dirname + '/data/color.json');
    }

    writeToFile() {
        this.deleteContents();
        const jsonString = JSON.stringify(this.currentConfig, null, 2);
        fs.writeFileSync(__dirname + '/data/color.json', jsonString);
    }
}
module.exports.Config = Config;
