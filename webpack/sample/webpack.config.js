const path = require("path");
const MyWebpackPlugin = require("./my-webpack-plugin");
const webpack = require("webpack");
const childProcess = require("child_process"); // 터미널 명령어 실행가능
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const apiMocker = require('connect-api-mocker');
const OptimizeCSSAssertsPlugins = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const mode = process.env.NODE_ENV || "development";

//module.exports는 노드의 모듈 시스템이다.
module.exports = {
  mode,
  entry: {
    main: "./src/app.js",
    // result: "./src/result.js",
    // form: "./src/form.js"
  },
  output: {
    path: path.resolve("./dist"), //output 디렉토리명을 입력. 절대경로를 입력하는데, 노드의 path 모듈을 import하여 사용한다.
    filename: "[name].js", //여기서 name은 entry에서 설정한 키값으로 치환되어 main.js로 생기게된다.
  },
  devServer:{
    overlay:true,
    stats:"errors-only",
    port:8090,
    before: app => {
      app.use(apiMocker('/api', 'mocks/api'))
      // app.get("/api/users", (req,res)=>{
      //   res.json([
      //      {
      //       id:1,
      //       name:"Alice"
      //     },
      //     {
      //       id:2,
      //       name:"Jack"
      //     },
      //     {
      //       id:3,
      //       name:"Sara"
      //     },
      //   ])
      // })
    },
    hot:true
  },
  optimization:{
    minimizer: mode === "production" ? [
      new OptimizeCSSAssertsPlugins(),
      new TerserPlugin({
        terserOptions:{
          compress:{
            drop_console: true // 콘솔로그를 제거
          }
        }
      })
    ] : [],
    // splitChunks:{
    //   chunks:"all"
    // }
    // externals: {
    //   axios : 'axios'
    // }
  },
  // 로더는 모듈객체에 rules라는 배열에다 추가할 수 있다.
  // 이 배열에는 test와 use라는 키를 갖는 객체를 사용한다.
  module: {
    rules: [
      {
        //정규표현식으로 모든 js파일에 대해 동작을 시켰기 때문에 2번 실행된다.
        test: /\.js$/, //로더가 처리해될 패턴을 입력한다(정규식)
        use: [
          //사용할 로더를 정의한다.
          path.resolve("./my-webpack-loader.js"),
        ],
      },
      {
        test: /\.css$/, //로더가 처리해될 패턴을 입력한다(정규식)
        use: [
          //사용할 로더를 정의한다.
          process.env.NODE_ENV === "production" //프로덕션 환경이면 MiniCssExtractPlugin를 적용하고 아니면 'style-loader'를 적용한다
            ? MiniCssExtractPlugin.loader
            : "style-loader",
          "css-loader",
        ],
      },
      // {
      //     test: /\.(png|jpg|gif|svg)$/,
      //     loader:'file-loader',
      //     options: {
      //         publicPath:'../dist/',
      //         name: '[name].[ext]?[hash]'
      //     }
      // },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "url-loader",
        options: {
          // publicPath: "../dist/",
          name: "[name].[ext]?[hash]",
          limit: 30000, //30kb 미만의 파일은 자바스크립트로 변환하고, 아닌것은 파일을 생성한다.
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        //node_modules에 대해서는 바벨 처리를 하지 않도록한다.
      },
    ],
  },
  //Build Date: ${new Date().toLocaleString} <--빌드날짜
  //Commit Version: ${childProcess.execSync('git rev-parse --short HEAD')}
  //childProcess.execSync는 문자열을 받아서 터미널을 실행해주는 역할을 한다.
  //                Author: ${childProcess.execSync('git config user.name')}
  plugins: [
    new MyWebpackPlugin(),
    new webpack.BannerPlugin({
      banner: `
                Build Date: ${new Date().toLocaleString}
                Commit Version: ${childProcess.execSync(
                  "git rev-parse --short HEAD"
                )}

            `,
    }),
    //웹팩의 환경설정 코드를 관리
    new webpack.DefinePlugin({
      TWO: "1+1", //defineplugin에서 이런식으로 선언해주면 TWO라는 전역변수로 접근할 수 있고, 1+1이 연산된 값이나온다.
      TWOSTRING: JSON.stringify("1+1"), // 스트링형으로 변화시켜주면 문자열 형태로 나온다.
      "api.domain": JSON.stringify("http://dev.api.domain.com"), // 객체형태의 선언도 해줄 수 있다.
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      templateParameters: {
        // 여기서 선언한 값은 ejs문법 <%= %>으로 불러올수 있고 아래와 같이 사용한다.
        env: process.env.NODE_ENV === "development" ? "(개발용)" : "", //NODE_ENV=development npm run build 명령어를 사용하면된다.
      },
      minify:
        process.env.NODE_ENV === "production"
          ? {
              // 개발환경이 프로덕션일때만 일반적으로 적용한다.
              collapseWhitespace: true, // 공백을 삭제하는 명령어
              removeComments: true, // 모든 주석을 삭제하는 명령어
            }
          : false,
    }),
    new CleanWebpackPlugin(),
    ...(process.env.NODE_ENV === "production"
      ? [new MiniCssExtractPlugin({ filename: "[name].css" })]
      : []),
    new CopyPlugin({
    patterns: [
      {
        from: './node_modules/axios/dist/axios.min.js',
        to: './axios.min.js'
      }
    ],
    })
  ],
};
