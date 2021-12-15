'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async getUser(){
    const {ctx} = this;
    ctx.body = {
      name:"june",
      age:18
    }
  }
}

module.exports = HomeController;
