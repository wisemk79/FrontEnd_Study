# sass-loader 설정  
- 로더 설치  
````
npm install sass-loader node-sass
````

- webpack.config.js  
````
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          /**
           * TODO: SASS 코드를 사용할수 있겠끔 sass-loader를 구성하세요.
           */
          process.env.NODE_ENV === "production"
            ? MiniCssExtractPlugin.loader // 프로덕션 환경
            : "style-loader", // 개발 환경
          "css-loader",
          "sass-loader"
        ]
      },
````