const aws = require('aws-sdk');
const kinesis = new aws.Kinesis();

const md5 = require('md5');

const streamName = process.env.streamName;

exports.handler = async (event) => {
    console.log('## ENVIRONMENT VARIABLES: ' + JSON.stringify(process.env))
    console.log('## EVENT: ' + JSON.stringify(event))
    
    var headers = event['headers'];
    var contentType;
    if(headers['Content-Type']) {
        contentType = headers["Content-Type"];
    } 
    else if(headers['content-type']) {
        contentType = headers["content-type"];
    }
    console.log('contentType = '+contentType); 
    
    const body = JSON.parse(event["body"]);
    
    const date = new Date();  
    const data = {
      date: date,
      data: body
    }
    console.log('body: %j', data);

    let pk = md5(data);
    console.log('pk: '+pk);

    const kinesisParams = {
        Data: JSON.stringify(data),
        PartitionKey: pk,
        StreamName: streamName
    } 
    try {
        let kinesisResponse = await kinesis.putRecord(kinesisParams).promise();
        console.log("kinesisResponse: "+JSON.stringify(kinesisResponse));
    } catch(err) {
        console.log(err);
    }

    // response    
    const response = {
        statusCode: 200,
        body: {PartitionKey: pk},
    };
    return response;
};
