module.exports ={
	mode:'development',
	entry:'./index.js',
	output:{
		filename:'build.js'
	},
	module:{
	 rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
         loader: 'babel-loader',
         options: {
          presets: ['@babel/preset-env']  // 转码规则 这是一组转码规则
        }
       }
      }
     ]
	}
}