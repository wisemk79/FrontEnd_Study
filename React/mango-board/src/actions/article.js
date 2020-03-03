const postArticle = ({article}) => (
    {
        type: "POST_ARTICLE",
        article
    }
)
//postArticle({article:{title:"",contents:""}})
export {postArticle}

//액션을 만듬

