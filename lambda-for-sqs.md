# Lambda for SQS

1) Lambda console로 이동하여, [Create Function]을 선택합니다.

https://ap-northeast-2.console.aws.amazon.com/lambda/home?region=ap-northeast-2#/functions


2) 아래와 같이 [Function name]으로 "lambda-for-sqs"로 입력 후에, [Create function]을 선택합니다. 

![noname](https://user-images.githubusercontent.com/52392004/165481712-cecfb969-8d43-4277-9869-30d0892f76c8.png)

3) Permission을 설정하기 위하여, 아래와 같이 [Configuration] - [Permissions] - [Role name]을 선택합니다. 여기서는 "lambda-for-sqs-role-sb23bdv3"을 선택합니다. 

![noname](https://user-images.githubusercontent.com/52392004/165482618-e8c0256e-93ef-4735-9158-bdaab46f4f06.png)

4) 아래와 같이 Policy name을 선택합니다. 여기서는 "AWSLambdaBasicExecutionRole-5f905d02-4da5-48fb-84fd-50de3d1b8872"을 선택합니다. 

![noname](https://user-images.githubusercontent.com/52392004/165483052-551ce17d-72bd-488d-99ac-e201adbc047c.png)

5) [Edit Policy] - [JSON]을 선택하여 편집하면으로 이동하여 아래와 같이 추가하고 [Review policy]를 선택합니다. 

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
![noname](https://user-images.githubusercontent.com/52392004/165484279-11868dd0-e7d7-4247-a55f-f204589eb0f8.png)

6) 아래의 퍼미션을 확인후 [Save changes]를 선택합니다. 

![noname](https://user-images.githubusercontent.com/52392004/165484635-03de005b-4717-4851-b9a8-1ffd6b3d2d67.png)



