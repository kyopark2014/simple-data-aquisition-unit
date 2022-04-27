# Lambda for Functional URL

디바이스로부터 REST API를 통해 event를 받기 위해서는 http(s)에 대한 Endpoint가 필요합니다. 여기서는 Lambda Functional URL을 이용합니다.


1) Lambda console에 접속합니다. 

https://ap-northeast-2.console.aws.amazon.com/lambda/home?region=ap-northeast-2#/functions

2) Function name으로 "lambda-for-functional-url"이라고 입력후, [Create function]을 선택합니다. 

![noname](https://user-images.githubusercontent.com/52392004/165222401-4e66f6f7-5711-4189-9521-867ec9c71294.png)


3) 아래와 같이 lambda 함수가 생성됩니다.



4) 아래와 같이 [Configuration] - [Functional URL] - [Create functional URL]을 선택합니다.

![noname](https://user-images.githubusercontent.com/52392004/165218030-00c79be7-c863-4c1d-b282-10a0b5f23ba8.png)

5) [Auth type]을 "NONE"으로 입력하고 아래로 스크롤하여 [Save]를 선택합니다.

![noname](https://user-images.githubusercontent.com/52392004/165218237-c78d26b7-1ce3-4bd4-ac63-b7ca8b71a37a.png)

6) 아래와 같은 Functional URL이 생성된것을 확인할 수 있습니다. 

![noname](https://user-images.githubusercontent.com/52392004/165218603-55d9c145-676e-4c40-a9f5-f46bb8a6d34f.png)

7) 해당 URL을 curl로 시도하면 아래와 같이 외부에서 접속할 수 있음을 알 수 있습니다. 

<img width="651" alt="image" src="https://user-images.githubusercontent.com/52392004/165218817-12df2433-5619-4c3c-b954-769674458305.png">

8) 아래 그림처럼 [Code]로 이동하여 [Upload from]을 선택 후에 ".zip file"로 [Lambda for Functional URL](https://github.com/kyopark2014/simple-data-aquisition-unit/tree/main/lambda-for-functional-url) 코드의 "deploy.zip"을 업로드하여 코드를 Lambda Function에 반영합니다. 


![noname](https://user-images.githubusercontent.com/52392004/165639767-eb743ea5-094d-4c51-a572-ef1c3aca4153.png)


9) 아래 그림과 같이 [Configuration] - [Environment variables]에서 [Edit]를 선택한 후에, "Key"로 "sqlUrl"을 넣고, "Value"에는 [SQS](https://github.com/kyopark2014/simple-data-aquisition-unit/blob/main/sqs.md) 생성할때 복사해놓은 SQS URL을 입력합니다.  

![noname](https://user-images.githubusercontent.com/52392004/165233595-94b2a8ac-97d9-47a1-9adb-84a50bf6907e.png) 

10) 아래와 같이 SQS Permission 설정합니다.

```java
        {
            "Effect": "Allow",
            "Action": [
                "sqs:SendMessage",
                "sqs:DeleteMessage",
                "sqs:ChangeMessageVisibility",
                "sqs:ReceiveMessage",
                "sqs:TagQueue",
                "sqs:UntagQueue",
                "sqs:PurgeQueue",
                "sqs:GetQueueAttributes"
            ],
            "Resource": "arn:aws:sqs:ap-northeast-2:[Account Number]:DataAcquisitionQueue"
        }
```  

![noname](https://user-images.githubusercontent.com/52392004/165349468-286894f0-e1b6-45d2-82ba-d6d0ffa1f2d3.png)
