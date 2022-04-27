# Simple Data Acquisition Unit

여기서는 모바일이나 TC와 같은 디바이스에서 발생하는 event들을 저장하고 이용하는 방법에 대해서 [Kinesis Data Stream](https://github.com/kyopark2014/technical-summary/blob/main/kinesis-data-stream.md)와 [Kinesis Data Firehose](https://github.com/kyopark2014/technical-summary/blob/main/kinesis-data-firehose.md)를 사용하여 데이터를 S3에 저장합니다. Amazon S3에 Object가 Create될때의 event를 Lambda로 받은 후에, [Amazon SQS](https://github.com/kyopark2014/technical-summary/blob/main/sqs.md)에 Push 하고 다시 이를 Lambda for output에서 활용합니다.

전체적인 Architecture는 아래와 같습니다.

![Uploading image.png…]()

본 Repository는 기본적인 데이터 저장 및 활용 시나리오를 설명하므로, IaC (infrastructure as Code)를 사용하지 않고, Console로만 구현합니다. 실제 구현전에 현재 repository를 다운로드 합니다. 

```c
$ git clone https://github.com/kyopark2014/simple-data-aquisition-unit
```

## Lambda Functional URL

[AWS Lambda Functional URLs](https://aws.amazon.com/ko/about-aws/whats-new/2022/04/aws-lambda-function-urls-built-in-https-endpoints/)이 2022년 4월에 적용됨으로 인해, Lambda 함수를 외부에서 간단하게 접속이 가능합니다. 여기서는 Simple한 Data Acquisition Unit를 설계하므로, Lambda Functional URL 기능을 활용합니다. 

[Lambda for Functional URL](https://github.com/kyopark2014/simple-data-aquisition-unit/blob/main/lambda-for-furnctional-url.md)에 따라 Lambda를 생성하고, 


1) [SQS](https://github.com/kyopark2014/simple-data-aquisition-unit/blob/main/sqs.md)를 생성합니다. 
  
2) [Lambda for Functional URL](https://github.com/kyopark2014/simple-data-aquisition-unit/blob/main/lambda-functional-url-sqs.md)을 생성합니다.

