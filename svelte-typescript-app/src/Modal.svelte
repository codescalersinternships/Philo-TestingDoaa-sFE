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
    $:lists = []
    axios.get(`http://localhost:9000/todo`).then(res => {
      lists = res.data;
      this.setState({lists});
    
    })
    
    let task =""
    
    async function createTask(){
      const res = await fetch('http://localhost:9000/todo`',{
        method: 'POST',
        body: JSON.stringify({
          id,
          task,
          done: false
    
        })
      })
    
      const json = await res.json()
      result = JSON.stringify(json)
      lists.push(task)
      var node = document.createElement('li');
      node.appendChild(document.createTextNode('myUL'));
      document.querySelector('ul').appendChild(node);
    }
    
    
    </script>
    
    <div clas ="backdrop">
        <dir class="modal">
            <div id="myDIV" class="header">
                <h2>TODO List</h2>
                <input type="text" id="myInput" placeholder="Create your task here...">
                <button id="Button" type="button" onclick="createTask()"> Creat</button>
              </div>
              
              <ol id="myUL">
               
                {#each lists as list }
                <input type="checkbox" id="checkBox"> <li >{list.id} {list.task}</li> <span id="span">❌</span>
              
                {/each}
              </ol>
        </dir>
    
        <section>
            <script>
    
            </script>
        </section>
    
    </div>
    
    
    <style>
        
    * {
      box-sizing: border-box;
    }
    
    ul {
      margin: 0;
      padding: 0;
    }
    
    ul li:nth-child(odd) {
      background: #f9f9f9;
    }
    
    /* Darker background-color on hover */
    ul li:hover {
      background: #ddd;
    }
    
    .close {
      position: absolute;
      right: 0;
      top: 0;
      padding: 12px 16px 12px 16px;
    }
    
    .close:hover {
      background-color: #f44336;
      color: white;
    }
    
    .header {
      background-color: #3b46af;
      padding: 100px 40px;
      color: rgb(226, 236, 247);
      font-size: 150%;
      text-align: center;
    }
    
    .header:after {
      content: "";
      display: table;
      clear: both;
    }
    
    input {
      margin: 0;
      border: none;
      border-radius: 0;
      width: 75%;
      padding: 130px;
      float: left;
      font-size: 20px;
    }
    
    .addBtn {
      padding: 10px;
      width: 40%;
      background: #d9d9d9;
      color: rgb(240, 239, 247);
      float: left;
      text-align: center;
      font-size: 30px;
      cursor: pointer;
      transition: 0.3s;
      border-radius: 0;
    }
    
    li {
        list-style: none;
        padding: 10px 10px;
        border-bottom: 2px solid rgb(105, 67, 67);
      }
    
      #checkBox{
        position: absolute;
        margin-top: 12px;
      }
    
      #span{
        position: absolute;
        left: 100px;
        margin-top: -25px;
      }
    
      #Button{
        display: inline-block;
        font-size: 40px;
        border-radius: 0px;
        background-color: rgb(138, 151, 224);
        width: 20%;
        
    
      }
    
    </style>