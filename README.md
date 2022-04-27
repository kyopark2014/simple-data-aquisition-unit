# Simple Data Acquisition Unit

여기서는 모바일이나 TC와 같은 디바이스에서 발생하는 event들을 저장하고 이용하는 방법에 대해서 [Kinesis Data Stream](https://github.com/kyopark2014/technical-summary/blob/main/kinesis-data-stream.md)와 [Kinesis Data Firehose](https://github.com/kyopark2014/technical-summary/blob/main/kinesis-data-firehose.md)를 사용하여 보여줍니다. 수집된 데이터는 Amazon S3에 저장되는데, Bucket에 Object가 Create 될 때의 event를 Lambda로 받은 후에, [Amazon SQS](https://github.com/kyopark2014/technical-summary/blob/main/sqs.md)에 Push 하고 다시 이를 Lambda for output에서 활용합니다.

전체적인 Architecture는 아래와 같습니다.

<img width="837" alt="image" src="https://user-images.githubusercontent.com/52392004/165537356-3e29a707-f24e-4859-8f3b-acd6b7e7e603.png">


본 Repository는 기본적인 데이터 저장 및 활용 시나리오를 설명하므로, IaC (infrastructure as Code)를 사용하지 않고, Console로만 구현합니다. 

인프라를 구현하기 전에 아래와 같이 repository들을 미리 다운로드 합니다. 

```c
$ git clone https://github.com/kyopark2014/simple-data-aquisition-unit
```

## Lambda for Functional URL

[AWS Lambda Functional URLs](https://aws.amazon.com/ko/about-aws/whats-new/2022/04/aws-lambda-function-urls-built-in-https-endpoints/)이 2022년 4월에 상용 적용됨으로 인해, Lambda 함수를 외부에서 간단하게 접속이 가능합니다. 여기서는 Simple한 Data Acquisition Unit를 설계하므로, Lambda Functional URL 기능을 활용합니다. 

[Lambda for Functional URL](https://github.com/kyopark2014/simple-data-aquisition-unit/blob/main/lambda-for-functional-url.md)에 따라 Lambda를 생성하고, Functional URL 기능을 Enable 합니다. 

디바이스들로 부터 전달되는 이벤트는 application/json 방식의 Content-type을 가진다고 가정합니다. RESTful API를 통해 HTTPS POST를 이용해 데이터가 Lambda for Functional URL로 전달됩니다. 

## Amazon Kinesis Data Streams

[Kinesis Data Streams 생성](https://github.com/kyopark2014/simple-data-aquisition-unit/blob/main/kinesis-data-streams.md)에 따라 Kinesis Data Stream을 생성합니다. 

## Amazon Kinesis Data Firehose

[Amazon Kinesis Data Firehose](https://github.com/kyopark2014/technical-summary/blob/main/kinesis-data-firehose.md)을 이용해 안정적으로 Amazon S3에 데이터를 저장할 수 있습니다. 이때 기본값은 json 포맷을 사용합니다. [Amazon Kinesis Data Firehose 생성](https://github.com/kyopark2014/simple-data-aquisition-unit/blob/main/kinesis-data-firehose.md)에 따라 Kinesis Data Firehose를 생성합니다. 


## Amazon S3

[Amazon S3 생성](https://github.com/kyopark2014/simple-data-aquisition-unit/blob/main/S3.md)에 따라 S3 Bucket을 생성합니다. 


## Lambda for SQS

[Lambda for SQS의 생성](https://github.com/kyopark2014/simple-data-aquisition-unit/blob/main/lambda-for-sqs.md)에 따라 S3에서 발생한 "write" Event를 Lambda를 통해 처리합니다. 

## Amazon SQS 

[Amazon SQS 생성](https://github.com/kyopark2014/simple-data-aquisition-unit/blob/main/sqs.md)에 따라 Amazon SQS를 생성합니다.

## Lambda for output

[Lambda for output](https://github.com/kyopark2014/simple-data-aquisition-unit/blob/main/lambda-for-output.md)에 따라서 최종 결과를 로그를 확인할 수 있도록 합니다. 


## 시험 및 결과

1) Postman에서 Lambda Functional URL을 이용하여 테스트 합니다. 아래와 같이 [raw]에 json 형태로 입력하고, [Send]를 통해 발신하면 아래와 같이 생성된 "PartitionKey"가 전달됩니다. 

![noname](https://user-images.githubusercontent.com/52392004/165553822-8a0ac44a-1b12-4525-9285-624f9b8a2179.png)

2) Amazon S3에 Object로 저장된 데이터의 예 

![image](https://user-images.githubusercontent.com/52392004/165638851-84baa361-daf1-4031-8ab5-1f88cb931ff3.png)

3) CloudWatch에서 확인한 Output의 예 

![image](https://user-images.githubusercontent.com/52392004/165638743-27dfb01a-d6f9-4dc4-a57d-92f0aa3db7e7.png)

