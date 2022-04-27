# Kinesis Data Firehose 생성

1) Kinesis Data Firehose를 생성하기 위하여 Kinesis Console로 이동합니다. 

https://ap-northeast-2.console.aws.amazon.com/firehose/home?region=ap-northeast-2#/streams

2) 아래와 같이 [Source]로 "Amazon Kinesis Data Streams"을 선택합니다. [Destination]은 "Amazon S3"을 선택합니다. [Kinesis data stream]에서 [Browse]를 선택하여, 기생성한 Kinesis Data Stream을 선택합니다. [Delivery stream name] 자동으로 생성된 값을 그대로 유지하여도 됩니다. 

![noname](https://user-images.githubusercontent.com/52392004/165546019-224734f2-b17b-491e-a719-9cb796321156.png)

3) 아래로 스크롤하여 [S3 bucket]으로 기생성한 bucket을 선택합니다. 여기서는 "s3://data-acquisition-unit"을 선택하였습니다. [S3 bucket prefix]는 "info"를 입력하고, [S3 bucket error output prefix]는 "error"를 입력한 후에 아래로 스크롤하여 [Create delivery stream]을 선택합니다. 

4) 아래와 같이 Delivery stream이 잘 생성되면 선택하여 진입합니다. 여기서는 "KDS-S3-THfMt"을 선택합니다.

![noname](https://user-images.githubusercontent.com/52392004/165548251-017ed9d4-3fcf-4be3-9e17-a1e641e3d589.png)


5) 아래와 같이 생성된 Delivery stream의 상세한 정보를 확인 할 수 있습니다. 여기서는 Data transformation과 같은 변환을 설정하지 않고 기본값으로만 설정하였습니다. 



