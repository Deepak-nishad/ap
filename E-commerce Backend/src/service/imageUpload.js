import s3 from "../config/s3.config"

export const s3FileUpload = async ({bucketName, key, body,contentType}) => {

return await s3.upload({
    Bucket: bucketName,
    key: key,
    Body: body,
    ContentType: contentType
}).promise()

}

export const s3delteFile = async ({bucketName, key}) => {

    return await s3.upload({
        Bucket: bucketName,
        key: key,
    }).promise()
    
    }
    