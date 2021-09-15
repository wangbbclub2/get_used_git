const path = require('path');
module.exports = {
    entry: ['./src/index.jsx'],
    output: {
        filename: 'bundle.js',  //這邊路徑設定錯誤導致無法即時更新(2021.09.11)
        path: path.resolve(__dirname, './src')
    },
    module: {
        rules: [
            { test: /.jsx$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-react', '@babel/preset-env'] } } }, 
			{ test: /.js$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env'] } } } 
        ]
    },
    devServer: {
        port: 9000,
		open: true,
		static: {
			directory: path.join(__dirname, './src'),
			watch: true
		}	
    }
};