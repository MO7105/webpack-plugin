const webpack=require('webpack');

const path=require('path');

module.exports={
  //モードの設定
  mode:'development',
  //エントリーポイントの設定
  entry:'./src/js/app.js',
  //出力の設定
  output:{
    //出力するファイル名
    filename:'bundle.js',
    //出力先のパス(絶対パスを指定しないとエラーが出るので注意)
    path:path.resolve(__dirname,'public/js')
  },
  //プラグインの設定
  plugins:[
    //ProvidePluginを利用する
    new webpack.ProvidePlugin({
      //外部モジュールであるjqueryを全てのファイル上で変数$として利用できるようになる
      $:'jquery'
    })
  ]
};
