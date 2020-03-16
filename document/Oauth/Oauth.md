# Oauth

## 개념
1. 우리가 만든 서비스를 mine이라고 가정하고
2. 우리의 사용자를 user라고하고
3. user는 their(Google, Facebook, Twitter)라는 서비스에 회원가입이 되어있다고 가정한다.

여기서 3(their)을 우리가 제어하고자하는 자원을 갖고있는 서버라고해서 Resource Server라고한다.
여기서 자원의 소유자는 user인데 이것을 Resource Owner라고한다.
우리의 서비스(mine)를 리소스 서버에 접속해서 정보를 가져가는 클라이언트라고 해서 Client라고한다.

* Authorization Server라는 서버가 따로 있는데, 인증과 관련된 처리를 전담하는 서버이다.<--이것을 리소스서버에 포함시켜서 생각한다.(원래는 따로 있는 것이지만 생활코딩에선 그렇게 해서 이해시키려는듯)

## Oauth등록 절차
