# Simple Event Data Acquisition Unit

여기서는 모바일이나 TC와 같은 디바이스에서 발생하는 어떤 event를 저장하는 방법에 대해서 Amazon SQS과 Amazon Kinesis Data Stream을 이용하는 방법에 대하여 구분하여 설명하고자 합니다.

## Lambda Functional URL

[AWS Lambda Functional URLs](https://aws.amazon.com/ko/about-aws/whats-new/2022/04/aws-lambda-function-urls-built-in-https-endpoints/)이 2022년 4월에 적용됨으로 인해, Lambda 함수를 외부에서 간단하게 접속이 가능합니다. 


<img width="841" alt="image" src="https://user-images.githubusercontent.com/52392004/165455510-88a432d1-379d-4098-8dbd-bd3e77c1d230.png">


## Amazon SQS 

[Amazon SQS](https://github.com/kyopark2014/technical-summary/blob/main/sqs.md)를 이용해 데이터를 저장하는 예제를 설명하고자 합니다.

![image](https://user-images.githubusercontent.com/52392004/165213674-26a20230-8bf7-46d5-9adc-310146301558.png)

1) [SQS](https://github.com/kyopark2014/simple-data-aquisition-unit/blob/main/sqs.md)를 생성합니다. 
  
2) [Lambda for Functional URL](https://github.com/kyopark2014/simple-data-aquisition-unit/blob/main/lambda-functional-url-sqs.md)을 생성합니다.





## Kinesis Data Stream

[Kinesis Data Stream](https://github.com/kyopark2014/technical-summary/blob/main/kinesis-data-stream.md)과 [Kinesis Data Firehose](https://github.com/kyopark2014/technical-summary/blob/main/kinesis-data-firehose.md)를 사용하여 데이터를 저장하는 예제를 설명하고자 합니다.

![image](https://user-images.githubusercontent.com/52392004/165213631-2c581bd6-f1c4-4bd9-9c23-def6c5b1a83c.png)
