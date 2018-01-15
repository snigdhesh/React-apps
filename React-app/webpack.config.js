var path=require('path');

module.exports={
    entry:'./src/app.js',
    output:{
        path: path.join(__dirname, '/dist'), // <- change last argument
        filename: 'bundle.js',
        publicPath: '/public/'
    },
    resolve:{
        modules:[
            path.resolve('./src') ]
    }
}