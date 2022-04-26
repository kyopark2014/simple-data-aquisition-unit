const aws = require('aws-sdk');
const sqs = new aws.SQS({apiVersion: '2012-11-05'});

const sqsUrl = process.env.sqsUrl;

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
    console.log('body: %j', body);
    
    // push a message
    const sqsParams = {
        DelaySeconds: 10,
        MessageAttributes: {},
        MessageBody: JSON.stringify(body), 
        QueueUrl: sqsUrl
      };  
      try {
        let sqsResponse = await sqs.sendMessage(sqsParams).promise();  
        console.log("sqsResponse: "+JSON.stringify(sqsResponse));
      } catch (err) {
        console.log(err);
      } 

    // response    
    const response = {
        statusCode: 200,
        body: JSON.stringify(body),
    };
    return response;
};
