const { createserver } = required('node:http');
const part = 3000;
const server = createServer((req,res)=>{
 const url=req.url;
 if(url==="/") 
    res.end("hello backend");
}
else if(url==="/home") {
 res.end("welcome to home")
}
else if(url==="/home/page"){
  res.end("welcome to page")
   }
   else{
   res.end("no path created")
});
server.listen(2000,()=> {
    console.log('server running at');
});