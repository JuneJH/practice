import {pathToRegexp} from 'path-to-regexp';
export function matchPath(path,url,option){
    const key = [];
    const reg = pathToRegexp(path,key,getOption(option));
    const result = reg.exec(url);
    if(!result){
        return null;
    }
    const params = getParams(key,result.slice(1));
    return {
        params,
        path,
        isExact:url === result[0],
        url:result[0]
    }

    
}

function getParams(key,result){
    const params = {};
    for(let i = 0; i < result.length; i ++){
        params[key[i]["name"]] = result[i]
    }
    return params;
}
function getOption(option={}){
    const defaultOption = {
        strict:false,
        exact:false,
        sensitive:false,
    }
    const opt = {
        ...defaultOption,
        ...option,
    }
    return {...opt,end:opt.exact};
}
