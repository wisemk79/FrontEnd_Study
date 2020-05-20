class MyWebpackPlugin {
    apply(compiler){//apply 메소드는 compiler라는 객체를 주입해준다.
        //compiler.hooks.done.tap은 플러그인이 종료되었을때 로드되는것
    //     compiler.hooks.done.tap('My Plugin', stats => {//'My Plugin'문자열을 넣고 콜백함수를 넣어주는데,
    //         console.log('MyPlugin: done')//이 함수는 플러그인이 완료됐을때 동작하는 콜백함수이다.
    //     })
    // }
    
    //emit이라는 문자열을 전달하고 
    compiler.plugin('emit', (compilation, callback)=>{//콜백함수는 compilation, callback이라는 인자를 받는다.
                                                        //compilation를 통해서 웹팩에 번들링한 결과에 접근할 수 있다.
        const source = compilation.assets['main.js'].source();// 'main.js' 라는 부분의 소스를 가져오는 코드이다. 
        console.log(source)
        //아래의 코드는 웹팩으로 빌드한 시간을 추가하는 로직이다 
        compilation.assets['main.js'].source = () =>{
            //main.js 최상단에 밑에 있는 배너가 찍힌다.
            const banner = [
                '/**',
                ' * 이것은 BannerPlugin이 처리한 결과입니다.',
                ' * Build Date: 2019-10-10',
                ' */'
            ].join('\n');
            return banner + '\n\n' + source;//main.js에 배너가 먼저찍히고 그뒤에 줄바꿈하여 소스가 찍히도록 해준다
        }

        callback();
    })
}
}

module.exports = MyWebpackPlugin;