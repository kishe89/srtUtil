### 구글번역기 사용시 SRT 포맷 문자열 수정 프로그램

### 목적
- 유튜브 자동자막 생성시 나오는 srt 포맷 내용 다국어 자막 작업을 위해서 구글번역기에 돌릴시 srt 포맷 깨지는 부분이 발생함.
- 구글 번역기 돌린 깨진 srt 텍스트를 다시 유효한 srt 포맷으로 변환.

### usage 
아래 순서대로 진행한다.
1. ```npm install``` 터미널에서 스크립트를 실행한다.
2. 프로젝트의 `input` 디렉토리에 변환할 구글번역기로 번역한 srt 텍스트 파일을 저장한다. ```확장자는 .txt로 그리고 인코딩은 유니코드로 저장된 txt파일이어야 한다.```
3. ```npm start``` 터미널에서 스크립트를 실행한다.
4. `output` 폴더에 변환된 `파일이름_convert_타임스탬프.srt` 파일을 유튜브 스튜디오로 자막업로드 한다.


### LICENSE

MIT

Copyright 2020 Ji Woon Kim

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.