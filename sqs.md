# Amazon SQS 

1) SQS의 Console에 접속합니다.

https://ap-northeast-2.console.aws.amazon.com/sqs/v2/home?region=ap-northeast-2#/queues

2) [Create queue]를 선택합니다. 

![noname](https://user-images.githubusercontent.com/52392004/165216303-943fc32f-10cb-40b1-8c52-fdf5b2773a54.png)

3) [Create Queue]에서 "Standard" Type을 선택하고, [Name]으로 "DataAcquisitionQueue"라고 입력합니다. 이후 아래로 스크롤하여 [Create Queue]를 선택합니다. 

![noname](https://user-images.githubusercontent.com/52392004/165216677-7c4481c9-66e9-43b7-bc5e-435abbe32a06.png)

4) 아래와 같이 Queue가 생성되었음을 알수 있습니다. [Lambda for Funtional URL]에서 SQS에 message를 보내기 위해서는 아래와 같은 SQS URL이 필요하니 복사해 놓습니다.

![noname](https://user-images.githubusercontent.com/52392004/165232662-e45245ed-d92d-4116-a273-c28a5bbdce82.png)


