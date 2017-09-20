/// <reference types="aws-lambda" />

declare function λ<T>(fn: (event: any, context: AWSLambda.Context) => T): (event: any, context: AWSLambda.Context, callback: AWSLambda.Callback) => void;
declare namespace λ {}
export = λ;
