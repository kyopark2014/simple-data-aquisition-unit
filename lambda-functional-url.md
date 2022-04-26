# Lambda for Functional URL

디바이스로부터 REST API를 통해 event를 받기 위해서는 http(s)에 대한 Endpoint가 필요합니다. 여기서는 Lambda Functional URL을 이용합니다.


1) Lambda console에 접속합니다. 

https://ap-northeast-2.console.aws.amazon.com/lambda/home?region=ap-northeast-2#/functions

2) Function name으로 "lambda-for-functional-url"이라고 입력후, [Create function]을 선택합니다. 

![noname](https://user-images.githubusercontent.com/52392004/165217604-999c675c-a4e6-47e8-970b-06c22e48b93d.png)

3) 아래와 같이 lambda 함수가 생성됩니다.

![image](https://user-images.githubusercontent.com/52392004/165217726-f80c5625-bd6c-4814-a311-d47d48605114.png)

4) 아래와 같이 [Configuration] - [Functional URL] - [Create functional URL]을 선택합니다.

![noname](https://user-images.githubusercontent.com/52392004/165218030-00c79be7-c863-4c1d-b282-10a0b5f23ba8.png)

5) [Auth type]을 "NONE"으로 입력하고 아래로 스크롤하여 [Save]를 선택합니다.

![noname](https://user-images.githubusercontent.com/52392004/165218237-c78d26b7-1ce3-4bd4-ac63-b7ca8b71a37a.png)

6) 아래와 같은 Functional URL이 생성된것을 확인할 수 있습니다. 

![noname](https://user-images.githubusercontent.com/52392004/165218603-55d9c145-676e-4c40-a9f5-f46bb8a6d34f.png)

7) 해당 URL을 curl로 시도하면 아래와 같이 외부에서 접속할 수 있음을 알 수 있습니다. 

<img width="651" alt="image" src="https://user-images.githubusercontent.com/52392004/165218817-12df2433-5619-4c3c-b954-769674458305.png">

8) 아래의 코드를 복사하여 index.js에 붙여 넣기를 합니다. 

[Lambda for Functional URL](https://github.com/kyopark2014/simple-data-aquisition-unit/blob/main/queue/lambda-for-functional-url/index.js)
