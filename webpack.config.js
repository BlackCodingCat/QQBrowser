const path = require('path')

module.exports = {
    entry:'./src/js/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    devServer:{
        contentBase:'./dist'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    {loader:"style-loader"},
                    {loader:"css-loader"}
                ]
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:[
                    {
                        loader:'file-loader',
                        query:{
                            name:'img/[name]-[hash:5].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins:{},
    mode:'development',
    resolve:{}
}