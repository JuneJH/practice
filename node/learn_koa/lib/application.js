/*
 * @Author: June
 * @Date: 2021-12-14 09:34:30
 * @LastEditTime: 2021-12-14 10:37:52
 * @LastEditors: June
 * @Description: 
 */
const http = require("http");
const context = require("./context")
const request = require("./request")
const response = require("./response")

module.exports = class Koa {
    constructor() {
        this.middleware = [];
        this.context = Object.create(context);
        this.request = Object.create(request);
        this.response = Object.create(response);
    }
    use(fn) {
        if (typeof fn === "function") {
            this.middleware.push(fn);
        }
    }
    listen(...args) {
        const app = http.createServer(this.callback());
        return app.listen(...args);
    }
    callback() {
        const fns = compose(this.middleware);
        return async (req, res) => {
            const context = this.getContext(req, res);
            await fns(context)
            res.end(context.body)
        }
    }
    getContext(req, res) {
        const context = Object.create(this.context)
        const request = context.request = Object.create(this.request)
        const response = context.response = Object.create(this.response)
        context.app = request.app = response.app = this
        context.req = request.req = response.req = req
        context.res = request.res = response.res = res
        request.ctx = response.ctx = context
        request.response = response
        response.request = request
        context.originalUrl = request.originalUrl = req.url
        context.state = {}
        return context;
    }
}
function compose(middlewares) {
    return function (ctx) {
        return dispatch(0)  // 
        function dispatch(i) {
            let fn = middlewares[i]
            if (!fn) {
                return Promise.resolve()
            }
            return Promise.resolve(
                fn(ctx, function next() {
                    return dispatch(i + 1)
                })
            )
        }
    }
}

