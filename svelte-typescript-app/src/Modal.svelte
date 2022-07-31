<!--
<div clas ="backdrop">
  <dir class="modal">
      <div id="myDIV" class="header">
          <h2>Update your task By ID</h2>
          <input type="text" id="myInput" placeholder="Write your ID here">
          <input type="text" id="myInput" placeholder="Write your New task here">
          <button id="Button" type="button" on:click={UpadateTodo}> Add</button>
        </div>
        
        <ul id="myUL">
    
          {#each lists as list }
          <input type="checkbox" id="checkBox"> <li > {list.task}</li> <span id="span">❌</span>
        
          {/each}
        </ul>
  </dir>
  <section>
      <script>
      </script>
  </section>
</div>
<div clas ="backdrop">
  <dir class="modal">
      <div id="myDIV" class="header">
          <h2>Get your task By ID </h2>
          <input type="text" id="myInput" placeholder="Write your ID here">
          <button id="Button" type="button" on:click={Gettodobyid}> Add</button>
        </div>
        
        <ul id="myUL">
    
          {#each lists as list }
          <input type="checkbox" id="checkBox"> <li > {list.task}</li> <span id="span">❌</span>
        
          {/each}
        </ul>
  </dir>
  <section>
      <script>
      </script>
  </section>
</div>
<div clas ="backdrop">
  <dir class="modal">
      <div id="myDIV" class="header">
          <h2>Delete your task By ID</h2>
          <input type="text" id="myInput" placeholder="Write your ID here">
          <button id="Button" type="button" on:click={DeleteTodo}> Add</button>
        </div>
        
        <ul id="myUL">
    
          {#each lists as list }
          <input type="checkbox" id="checkBox"> <li > {list.task}</li> <span id="span">❌</span>
        
          {/each}
        </ul>
  </dir>
  <section>
      <script>
      </script>
  </section>
</div>
<div clas ="backdrop">
  <dir class="modal">
      <div id="myDIV" class="header">
          <h2>Get your all tasks </h2>
          <button id="Button" type="button" on:click={Gettodo}> Add</button>
        </div>
        
        <ul id="myUL">
    
          {#each lists as list }
          <input type="checkbox" id="checkBox"> <li > {list.task}</li> <span id="span">❌</span>
        
          {/each}
        </ul>
  </dir>
  <section>
      <script>
      </script>
  </section>
</div>-->


<script>
  import { onMount } from "svelte/internal";
  
  let todos = []
  const baseURL = "http://localhost:9000/todo"
  
  const Gettodo = async () => {
    const response = await fetch(baseURL)
    const data = await response.json()
    todos = await data
  }
  
  onMount(() => {
    Gettodo()
  })
  
  
  let Task
  let ID
  const CreateTodo = async event => {
    event.preventDefault() 
    await fetch(baseURL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: ID,
        task: Task,
      }),
    })
  
    Gettodo()
    ID = 
    Task = ""
  }
  
  const DeleteTodo = async (todo) => {
    event.preventDefault()
    await fetch(baseURL+"/"+todo.id,{
      method: "delete",
    })
    Gettodo()
  }
  
  </script>
  
  <main>
    <h2>TODO APP</h2>
    
    <form on:submit="{CreateTodo}">
      <input type="text" bind:value="{ID}" id=inputID>
      <input type="text" bind:value="{Task}" id="inputTask">
      <input type="submit" value="Submit" />
    </form>
  
    <hr  style="color: #BC3CBC" >
    <hr  style="color: #BC3CBC" >
  
    {#each todos as todo}
    <div>
      <h3>{todo.id} {todo.task}</h3>
      <button class="btn" on:click={(e) => DeleteTodo(todo)}><i calss="fa fa-trash">❌</i></button>
    </div>
    {/each}
  
  </main>
  
  
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <style>
  
    input[type=text]{
      margin: 20px 0;
      border-radius: 20px;
  
    }
  
    #inputID{
      width: 10%;
      box-sizing: border-box;
      padding: 40px 30px;
      border: 10px solid rgb(9, 6, 177);
    }
  
    #inputTask{
      width: 50%;
      box-sizing: border-box;
      padding: 50px 70px;
      border: 4px solid rgb(93, 106, 218)
    }
  
    input[type=submit]{
      background-color: rgb(42, 54, 224);
      border: none;
      color: rgb(239, 243, 245);
      font-size: 200%;
      padding: 20px 20px;
      text-decoration: none;
      margin: 5px 5px;
      cursor: pointer;
      border-radius: 1px;
    }
  
    h2{
      color: rgb(29, 39, 173);
      font-size: 40px;
      font-weight: 400;
      background-image: linear-gradient(to left, #fdfdff, #d1bce5);
    }
  
    .btn {
    background-color: rgb(209, 141, 141); 
    border: none; 
    color: white; 
    padding: 12px 16px; 
    font-size: 16px; 
    position: absolute;
  }
  
  button, h3{
    display: inline-block;
  }
  
  .btn:hover {
    background-color: rgb(255, 255, 255);
  }
  
  h3{
    font-weight: bold; 
    color: rgb(23, 64, 80);
    padding-right: 33px;
    font-style: italic;
    
  }
  </style>