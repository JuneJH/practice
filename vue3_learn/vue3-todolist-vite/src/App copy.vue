<template>
  <div class="container">
    <h1 class="title">TODOLIST</h1>
    <div class="content">
      <div class="input-container">
        <label>
          <input class="input" type="text" placeholder="input your todo!" v-model="taskContentRef" @keyup.enter="addTask" />
        </label>
      </div>
      <ul class="ul-container">
        <li class="li" v-for="item in tasksRef" :key="item.id">
          <div class="checked">
            <input type="checkbox" :checked="item.completed" @change="updateTask(item.id)" />
          </div>
          <div :class="['todo-msg', item.completed ? 'todo-msg-delete':'']">{{item.content}}</div>
          <div class="delete-todo-btn" @click="delteTasks(item.id)"></div>
        </li>
      </ul>
      <div class="condition-container">
        <div class="item-count">{{tasksRef.length}} item{{tasksRef.length===1?"":"s"}}</div>
        <div class="condition">
          <div :class="['condition-btn',{'condition-btn-active':conditionRef === 'all'}]" @click="conditionRef = 'all'">All</div>
          <div :class="['condition-btn',{'condition-btn-active':conditionRef === 'completed'}]"  @click="conditionRef = 'completed'">Completed</div>
          <div :class="['condition-btn',{'condition-btn-active':conditionRef === 'uncompleted'}]" @click="conditionRef = 'uncompleted'">Uncompleted</div>
        </div>
        <div class="delete-btn" @click="delteTasks(null)">clear</div>
      </div>
    </div>
  </div>
</template>

<script>
import useTaskList from "./composition/useTaskList";
import useAddTaskList from './composition/useAddTaskList'
import useFilterTaskList from './composition/useFilterTaskList'
import useCURD from './composition/useCURD'
export default {
  setup() {
    const {taskListRef} = useTaskList();
    return {
      ...useAddTaskList(taskListRef),
      ...useFilterTaskList(taskListRef),
      ...useCURD(taskListRef)
    };
  },
};
</script>

<style>
.container {
  width: 400px;
  max-height: 200px;
  margin: 100px auto;
  color: #666;
}
.title {
  text-align: center;
  padding: 15px;
}
.content {
  margin: 30px 0;
  border: 1px solid #ddd;
  padding: 15px;
}
.input-container {
  height: 35px;
}
.input {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid #ddd;
  padding: 0 10px;
  font-size: 18px;
  outline: none;
  transition: border 0.3s;
}
.input:focus {
  border-color: rgb(196, 196, 196);
  box-sizing: 0 0 5px 3px #fff;
  outline: none;
}
.input:active {
  border-color: rgb(218, 218, 218);
  outline: none;
}
.ul-container {
  padding: 0;
}
.ul-container li {
  list-style: none;
  border: 1px solid rgba(221, 221, 221, 0.603);
  width: 100%;
  padding: 15px 5px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 5px 0;
  cursor: pointer;
  transition: background 0.3s;
}
.ul-container li:hover {
  border: 1px solid #ddd;
}
.todo-msg {
  margin: 0 15px;
  flex: 2;
}
.todo-msg-delete {
  color: #999;
  text-decoration: red line-through;
}
.delete-todo-btn {
  width: 2px;
  height: 15px;
  background: rgba(255, 0, 0, 0.26);
  transform: rotateZ(-45deg);
  margin: 0 15px;
  transition: background 0.3s;
  cursor: pointer;
}
.delete-todo-btn::after {
  content: "";
  display: inline-block;
  width: 100%;
  height: 100%;
  background: inherit;
  transform: translateY(-2px) rotateZ(90deg);
}
.delete-todo-btn:hover {
  background: rgba(255, 0, 0, 0.712);
}
.condition-container {
  display: flex;
  align-items: center;
  font-size: 12px;
}
.condition {
  display: flex;
  flex: 2;
  padding: 0 15px;
}
.condition-btn {
  color: #999;
  margin: 0 5px;
  padding: 5px 10px;
  cursor: pointer;
  box-sizing: border-box;
  border: 1px solid transparent;
  transition: color .3s;
}
.condition-btn-active {
  border: 1px solid #ddd;
  color: #333;
  box-sizing: border-box;
}
.delete-btn{
  padding: 10px 5px;
  cursor: pointer;
  color:#999;
  box-sizing: border-box;
}
.delete-btn:hover{
  color:#333;
  box-shadow: 0 0 1px 2px #fff;
}
</style>
