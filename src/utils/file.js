import { v2 as cloudinary } from "cloudinary";

const cloudinaryFolder = "express";

async function uploadFile(files) {
  for (const file of files) {

    const uploadResult =[]

    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: cloudinaryFolder,
          },
          (error, data) => {
            if (error) {
              return reject(error);
            }
            resolve(data);
          }
        )
        .end(file.buffer);
    });
    uploadResult.push(result)
  }
  return uploadResult;
}
export default uploadFile;
