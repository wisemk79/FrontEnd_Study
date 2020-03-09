# Rest API 스펙 정하기   

## 각 기능의 별로 아래 항목을 정한다.
- 기능의 이름과 설명
- http 메소드와 path
- 입력 출력 포멧과 항목   

## 기능 이름, 설명
- 게시글목록 가져오기 getArticles() return List<Article>
- 게시글 가져오기 getArticle(id) return Article
- 글 쓰기 writeArticle(title, contents) return id
- 글 삭제 deleteArticle(id)
- 글 수정 updateArticle(id, title,contents)   

## 기능의 http 메소드, path와 입출력 포멧 항목   

### 게시글목록 가져오기
GET /articles
출력 
- json
- 
````
 [
	{“id”: 1, “title” : “aaaa”, “contents” : “bbbbbb”} ,
 	{“id”: 2, “title”: “bbbb”, “contents”: “ccccccc”}
]   
````


### 게시글 가져오기
GET /articles/:id
출력
- json
```
{“id”: 1, “title” : “aaaa”, “contents” : “bbbbbbb”}   
```

### 글 쓰기
POST /articles
url form encoded
- title
- contents
출력
- json
```
{“id”: 3}   
```   


### 글 삭제
DELETE /articles/:id    
   

### 글 수정
PUT /articles/:id
url form encoded
- title
- contents

