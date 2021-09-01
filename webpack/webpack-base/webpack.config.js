const path = require("path");
module.exports = {
    // entry:{
    //     "entry1":"./main1.js",
    //     "entry2":"./main.js"
    // }
    // entry:["./main1.js","./main.js"],
    entry:"./main.js",
    output:{
        path:path.resolve(__dirname,"./bundle"),
        filename:"[name].js"
    },
    module:{
        rules: [
            { test: /\.txt$/, use: 'raw-loader' }
        ]
    }
}