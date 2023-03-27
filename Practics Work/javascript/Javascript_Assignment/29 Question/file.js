function getFileExtension(filename){

    const extension = filename.split('.').pop();
    return extension;
}

// passing the filename
const result = getFileExtension('module.txt');
const result1 = getFileExtension('module.hmtl');
console.log(result);
console.log(result1);