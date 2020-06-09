module.exports = {
  extends: ["eslint:recommended", "eslint-config-prettier"],
  env: {
    commonjs: true,
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
  // rules:{
  //     'no-unexpected-multiline':'error',//줄바꿈 오류 잡는것
  //     'no-extra-semi':'error'// 세미콜론 오류 잡는것
  // }
};
