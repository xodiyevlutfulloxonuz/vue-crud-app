const app=Vue.createApp({
  data(){
    return{
      name:'',
      email:'',
      job:'',
      users:[
        { id:1, name:'Lutfullaxon', email:'xodiyevlutfulloxonuz@gmail.com', job:'Nodejs backend developer' }
      ],
      errorHandler:'',
      error:false,
      updatedUserId:null

      

    }
     
  },

  methods:{
    addUser(){
      if(this.updatedUserId!=null){
        const findeUser=this.users.find(user=>user.id==this.updatedUserId)
      findeUser.name= this.name
      findeUser.email= this.email
       findeUser.job=this.job
       this.updatedUserId=null


       this.name=""
       this.email=""
       this.job=""
       
       
      }
      else if(this.name && this.email && this.job){
        let newUser={
          id:this.users.length+1,
          name:this.name,
          email:this.email,
          job:this.job 
  
        }
        
        this.users.push(newUser)
        this.name=""
        this.email=""
        this.job=""
        this.error=false 
      }
      else{
        this.error=true 
        this.errorHandler="Iltimos input maydonlarini to'liq to'ldiring"
      }

    },
    deleteUser(id){
       this.users=this.users.filter(user=>user.id!=id)
        
       
    },
    updateUser(id){
      const findeUser=this.users.find(user=>user.id==id)
       this.name=findeUser.name 
       this.email=findeUser.email 
       this.job=findeUser.job,
       this.updatedUserId=id 
    }



  },
  

  computed:{
    
    
  }

  

})

app.mount('#main')