# Medilog

- 명상을 하며 느끼고 생각한 것을 기록하고 공유하는 명상 SNS

## 사용 기술 및 개발환경

Node.js, Nest.js, Mongodb, EC2

## UI

자세한 내용은 [UI](https://github.com/onezerokang/medilog/wiki/UI) 문서를 참고하십시오.

## 브랜치 전략
브랜치 전략은 [Github flow](https://oogway.tistory.com/6)를 사용했습니다. Github flow는 main 브랜치가 곧 product가 되는 전략으로 git flow에 비해 간단하여 자주 배포하는 개발팀에게 적합합니다.

![Github_flow](https://blog.kakaocdn.net/dn/NDqYw/btrCBZEw19s/VTKqKnsaZzkFBEHAhWhCwk/img.png)

사용방법은 다음과 같습니다.

- 기능 구현이나 버그 발생시 issue를 작성합니다.
- 작업 전 이슈 넘버를 사용하여 브랜치를 생성합니다.
  - 예시) feature/#64
- 작업이 끝나면 원격 브랜치로 push 하고 Pull Request를 생성하여 리뷰를 받습니다.
- 리뷰가 끝난 커밋은 main 브랜치로 병합됩니다.
- main 브랜치에 병합한 후 작업한 브랜치는 삭제합니다.

CI에 대한 내용이 들어갈 것

## Architecture

## Mongodb Schema

## 주요 기능
자세한 내용은 [Use case](https://github.com/onezerokang/medilog/wiki/Use-case) 문서를 참고하십시오.
