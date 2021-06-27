<template>
  <div class="container">
    <h1 class="title">TODOLIST</h1>
    <div class="content">
      <div class="input-container">
        <label>
          <input class="input" type="text" placeholder="input your todo!">
        </label>
      </div>
      <ul class="ul-container">
          <li class="li">
            <div class="checked">
              <input type="checkbox">
            </div>
            <div class="todo-msg todo-msg-delete">开会</div>
            <div class="delete-todo-btn">

            </div>
          </li>
          <li class="li">
            <div class="checked">
              <input type="checkbox">
            </div>
            <div class="todo-msg">开会</div>
          </li>
        </ul>
        <div class="condition-container">
          <div class="item-count">123 items</div>
          <div class="condition">
            <div class="condition-btn condition-btn-active">All</div>
            <div class="condition-btn">Completed</div>
            <div class="condition-btn">Uncompleted</div>
          </div>
          <div class="delete-btn">
            clear
          </div>
        </div>   

      
    </div>
  </div>
</template>

<script setup>
</script>

<style>
  .container{
    width: 400px;
    max-height: 200px;
    margin:100px auto;
    color:#666;
  }
  .title{
    text-align: center;
    padding: 15px;
  }
  .content{
    margin: 30px 0;
    border: 1px solid #ddd;
    padding: 15px;
  }
  .input-container{
    height: 35px;
  }
  .input{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: 1px solid #ddd;
    padding: 0 10px;
    font-size: 18px;
    outline: none;
    transition: border .3s;
  }
  .input:focus{
    border-color: rgb(196, 196, 196);
    box-sizing: 0 0 5px 3px #fff;
    outline: none;
  }
  .input:active{
    border-color: rgb(218, 218, 218);
    outline: none;
  }
  .ul-container{
    padding: 0;
  }
  .ul-container li{
    list-style: none;
    border: 1px solid rgba(221, 221, 221, 0.603);
    width: 100%;
    padding: 15px 5px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin: 5px 0;
    cursor: pointer;
    transition: background .3s;
  }
  .ul-container li:hover{
    border: 1px solid #ddd;
  }
  .todo-msg{
    margin: 0 15px;
    flex: 2;
  }
  .todo-msg-delete{
    color: #999;
    text-decoration: red line-through;
  }
  .delete-todo-btn{
    width: 2px;
    height: 15px;
    background: rgba(255, 0, 0, 0.26);
    transform: rotateZ(-45deg);
    margin: 0 15px;
    transition: background .3s;
    cursor: pointer;
  }
  .delete-todo-btn::after{
    content: "";
    display: inline-block;
    width: 100%;
    height: 100%;
    background: inherit;
    transform:translateY(-2px) rotateZ(90deg);
  }
  .delete-todo-btn:hover{
    background: rgba(255, 0, 0, 0.712);
  }
  .condition-container{
    display: flex;
    align-items: center;
    font-size: 12px;
  }
  .condition{
    display: flex;
    flex: 2;
    padding: 0 15px;
  }
  .condition-btn{
    color:#999;
    margin: 0 5px;
    padding: 5px 10px;
    cursor: pointer;
    box-sizing: border-box;
  }
  .condition-btn-active{
    border: 1px solid #ddd;
    color:#333;
  }


</style>
