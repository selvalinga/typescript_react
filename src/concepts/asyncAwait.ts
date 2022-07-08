import React, { ReactElement, useEffect } from "react";

const delayFun = (ms: number) => new Promise(res => setTimeout(res, ms));

export const  AsyncAwait = async() => {
   await delayFun(500);
            console.log('Async and await')
}