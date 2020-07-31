const{BundleAnalyzerPlugin}=require('webpack-bundle-analyzer');

const path=require('path');

module.exports={
  mode:'development',
  entry:'./src/js/app.js',
  output:{
    filename:'bundle.js',
    //出力先のパス(絶対パスを指定しないとエラーが出る)
    path:path.resolve(__dirname,'public/js')
  },
  //プラグインの設定
  plugins:[
    new BundleAnalyzerPlugin()
  ]
};
