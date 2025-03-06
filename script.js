let age = document.getElementById("age").value
let btn = document.getElementById("btn")
let name = document.getElementById("name").value

btn.addEventListener("click",()=>{

    new Promise((resolve,reject)=>{

           if(age>18){
			   setTimeout(()=>{
				      resolve(`Welcome, ${name}. You can vote.`)
			   },4000)
		   }
		   else{
			   setTimeout(()=>{
				       reject(`Oh sorry ${name}. You aren't old enough`)
			   },4000)
		   }
		
	}).then((res)=>{
		alert(res)
	}).catch((res)=>{
      alert(res)
	})	

	
	
})