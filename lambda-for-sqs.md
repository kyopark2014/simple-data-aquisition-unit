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
        },
        {
            "Action": [
                "s3:AbortMultipartUpload",
                "s3:GetBucketLocation",
                "s3:GetObject",
                "s3:ListBucket",
                "s3:ListBucketMultipartUploads",
                "s3:PutObject"
            ],
            "Resource": [
                "arn:aws:s3:::data-acquisition-unit",
                "arn:aws:s3:::data-acquisition-unit/*"
            ],
            "Effect": "Allow"
        }
```

![noname](https://user-images.githubusercontent.com/52392004/165485683-cf0d0408-31bb-4ad5-811d-063c401fb7d1.png)



6) 아래의 퍼미션을 확인후 [Save changes]를 선택합니다. 

![noname](https://user-images.githubusercontent.com/52392004/165485946-2576c1e3-dadd-40d8-90ad-e07dc5bcce4b.png)

7) [Function overview]에서 [Add trigger]를 선택합니다.

![noname](https://user-images.githubusercontent.com/52392004/165486545-2d1660da-71df-45b5-9f5c-90e2fc0ecf99.png)

8) [Trigger configuration]에서 S3를 선택하고, 기생성한 bucket을 [bucket]으로 선택(여기서는 "data-acquisition-unit")하고, 하단의 "Ackonology"을 동의한 후에 [Add]를 선택합니다. 

![noname](https://user-images.githubusercontent.com/52392004/165487723-33298309-c406-45ce-8cb4-05ae65138a8d.png)

9) 아래와 같이 Trigger로 S3가 선택됩니다. 

![image](https://user-images.githubusercontent.com/52392004/165487983-c1159e80-a518-4f65-b585-1361ddc9ac7c.png)


