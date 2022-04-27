# Lambda for Output

Lambda for Output은 Amazon SQS로 부터 trigger된 이벤트를 로그로 찍는 더미 함수입니다. 보통은 현재의 Lambda에서 OpenSearch에 보내서 인덱싱을 통한 로그 분석을 하거나, Slack 등에 알림을 생성하는 용도 등으로 사용할 수 있습니다. 

1) Lambda Console로 이동하여 [Create function]을 선택합니다.

https://ap-northeast-2.console.aws.amazon.com/lambda/home?region=ap-northeast-2#/functions

2) 아래 그림처럼 [Function name]으로 "lambda-for-output"을 선택하고, 하단의 [Create function]을 선택합니다. 

![noname](https://user-images.githubusercontent.com/52392004/165526595-2ec6bb09-d9a0-48f4-b988-1d34058e832a.png)

3) 다운로드한 github repository의 "lambda-for-output"에서 index.js를 복사하거나, github repostitory에서 index.js의 내용을 복사하여 아래와 같이 코드를 붙여넣고 [Deploy]를 선택합니다. 

![noname](https://user-images.githubusercontent.com/52392004/165527893-3edd8368-6dd4-4ad4-b00e-f28f8f42411e.png)


4) 퍼미션을 설정하기 위하여 [Configuration] - [Permissions]의 [Role name]을 선택합니다. 여기서는 "lambda-for-output-role-he8zt8ag"을 선택합니다.

5) 아래처럼 Policy name에서 "AWSLambdaBasicExecutionRole-b0543802-92b2-4877-9026-785c3cba7d56"을 선택합니다.

6) [Edit policy] - [JSON]을 선택한 다음 아래처럼 추가 합니다. 

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

![noname](https://user-images.githubusercontent.com/52392004/165530704-9ac707ec-dd69-4b97-a553-078856bb6475.png)

7) 아래와 같이 [Functional overview]에서 [Add trigger]를 선택합니다.

![noname](https://user-images.githubusercontent.com/52392004/165532154-3d9750bf-390b-47b3-87f9-254c315e746a.png)


8) 아래와 같이 Lambda for Output은 SQS로 부터 trigger 됩니다. 

![image](https://user-images.githubusercontent.com/52392004/165533294-388e8fe6-7267-4396-a0d9-d992d1ed481e.png)


9) [Configuration] - [Environment variables]에서 [Edit]를 선택합니다.

![image](https://user-images.githubusercontent.com/52392004/165563138-d4401f44-0957-41f8-ae25-6d8d9c911aae.png)

10) 아래와 같이 [key]로 "sqsUrl"을 넣고 [value]로 [SQS 생성](https://github.com/kyopark2014/simple-data-aquisition-unit/blob/main/SQS.md)시에 복사해 놓은 SQS URL 정보를 입력합니다. 이후 [Save]를 선택합니다.
