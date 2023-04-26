
const userBtn= document.querySelector(".userBtn");
const adminBtn= document.querySelector(".adminBtn");
const moveBtn= document.querySelector(".moveBtn");
const user= document.querySelector(".user");
const admin= document.querySelector(".admin");
const iPhone= document.querySelector("#phone");
const ipassword= document.querySelector("#password");

adminBtn.addEventListener('click',()=>{
    moveBtn.classList.add("rigthBtn");
    admin.classList.add("adminForm");
    user.classList.remove("userForm");
    moveBtn.innerHTML="Admin";

});
userBtn.addEventListener('click',()=>{
    moveBtn.classList.remove("rigthBtn");
    admin.classList.remove("adminForm");
    user.classList.add("userForm");
    moveBtn.innerHTML="Student";
});
    
const func1=(e)=>{
    e.preventDefault();
    console.log(iPhone);
    console.log("HELLO");
}
app.post("/loginAdmin", async(req, res) =>{
    try{
        const phone = req.body.phone;
        const password = req.body.password;

        const userphone = await Register.findOne({phone:phone});

        if(userphone.password== password){
            res.status(201).render("index");
        }else{
            res.send("invalid login Details");
        }
    }  catch(error){
        res.status(400).send("invalid login Details")
    }
})