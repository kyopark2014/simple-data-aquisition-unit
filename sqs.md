# Amazon SQS 생성

1) Amazon SQS Console로 진입하여, "Create queue"를 선택합니다. 

https://ap-northeast-2.console.aws.amazon.com/sqs/v2/home?region=ap-northeast-2#/queues

2) 아래와 같이 [Name]에 "DataAcquisitionQueue"라고 입력하고, 아래로 스크롤 하여 [Create queue]를 선택합니다. 

3) 생성된 "DataAcquisitionQueue"을 선택하여 아래와 같은 정보를 확인 할 수 있습니다. 특히 SQS URL 정보는 Lambda에서 사용하여야 하므로 복사해 놓습니다. 

![noname](https://user-images.githubusercontent.com/52392004/165552259-3881b3ce-6320-4c5e-89d5-2721440e8791.png)
