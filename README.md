# TypeScript 학습 프로젝트

![Typescript](https://img.shields.io/badge/Typescript-3178C6?style=flat&logo=TypeScript&logoColor=white)
![npm](https://img.shields.io/badge/npm-red?style=flat&logo=npm&logoColor=white)

## 프로젝트 개요
TypeScript의 기본 사용법을 학습하기 위한 Repository 입니다.  
- hello.ts : Typescript 컴파일러 사용하기
- basic.ts : 변수 선언 방법 및 메서드 사용하기
- todoItem.ts : 클래스, 메서드 선언 및 사용하기

## 선행 작업
1. `Node.js`와 `npm` 설치
```bash
brew install node
``` 
2. TypeScript 컴파일러 설치
```bash
npm install -g typescript
```

## 실행 방법
1. 터미널에서 해당 프로젝트 경로로 이동
2. `tsc` 명령어를 통해 `.ts` 파일 컴파일
```bash
tsc hello.ts

tsc basic.ts

tsc todoItem.ts
```
3. 컴파일된 `.js` 파일을 `Node.js`로 실행
```bash
npm hello.js

npm basic.js

npm todoItem.js
```
