//사용자에 대한 데이터와 게시판 글에대한 데이터를 다루는것은 따로 다루는 것이 좋기 때문에 리듀서를 따로 만들어주는 것이좋다.
export default function(state = [], action){
    switch (action.type) {
        case 'POST_ARTICLE':
            //postArticleAction에서 article이 온거임 
            return state.concat(action.article)
        default:
            return state
    }
}