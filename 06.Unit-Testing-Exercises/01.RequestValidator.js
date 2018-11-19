function validateRequest(request) {
    let methods = ["GET", "POST", "DELETE", "CONNECT"];
    if (request.method === undefined || !methods.includes(request.method)) {
        throw new Error ("Invalid request header: Invalid Method");
    }
    let uriPattern = /[\w.]+\.[\w]+/;
    if (request.uri === undefined
            || request.uri === ""
            || (!uriPattern.test(request.uri) && request.uri !== "*")){
        throw new Error ("Invalid request header: Invalid URI");
    }
    let versions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    if (request.version === undefined || !versions.includes(request.version)) {
        throw new Error ("Invalid request header: Invalid Version");
    }
    let msgPattern = /^[^<>&'"\\]*$/;
    if (request.message === undefined || !msgPattern.test(request.message)) {
        throw new Error ("Invalid request header: Invalid Message");
    }
    return request;
}

console.log(validateRequest({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));
console.log(validateRequest({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
}));
console.log(validateRequest({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
}));