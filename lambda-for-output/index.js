const aws = require('aws-sdk');
var sqs = new aws.SQS({apiVersion: '2012-11-05'});

const sqsUrl = process.env.sqsUrl;

exports.handler = async (event) => {
    // console.log('## ENVIRONMENT VARIABLES: ' + JSON.stringify(process.env));
    console.log('## EVENT: ' + JSON.stringify(event))
    
    const receiptHandle = event['Records'][0]['receiptHandle'];
    // console.log('receiptHandle: '+receiptHandle);
    
    const body = event['Records'][0]['body'];
    // console.log('body = '+body);

    // remove message queue 
    try {
        var deleteParams = {
            QueueUrl: sqsUrl,
            ReceiptHandle: receiptHandle
        };

        console.log('remove messageQueue: ' + id);
        sqs.deleteMessage(deleteParams, function(err, data) {
            if (err) {
                console.log("Error", err);
            } else {
            //    console.log("Success to remove messageQueue: "+id+", deleting messagQueue: ", data.ResponseMetadata.RequestId);
            }
        });
    } catch (err) {
        console.log(err);
    }

    const response = {
        statusCode: 200,
    //    body: JSON.stringify(data)
    };
    return response;
};