const express = require("express");
const router = express();
const Reservations = require("../models/test");
const passport = require("passport");
const { request } = require("express");
const e = require("connect-flash");
const sequelize = require("../config/database")

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
})

// router.post("/dashboard", passport.authenticate('local',{
//   successRedirect: "/dashboard",
//   failureRedirect: "/dashboard",
//   failureFlash: true
// }))

router.post("/dashboard",async (req, res,next) => {
    const {CUSTOMER_NAME,ID_NUMBER,MOBILE_NUMBER,BOOKING_DATE,OCATIN_TYPE} = req.body;
   // console.log(req.body.customer_name)
    console.log(req.body);
    const Test = new Reservations({
      CUSTOMER_NAME:CUSTOMER_NAME,
      ID_NUMBER:ID_NUMBER,
      MOBILE_NUMBER:MOBILE_NUMBER,
      BOOKING_DATE:BOOKING_DATE,
      OCATIN_TYPE:OCATIN_TYPE
    })
    await Test.save()
    res.redirect('/dashboard');
    // if(!CUSTOMER_NAME || !ID_NUMBER || !MOBILE_NUMBER || !BOOKING_DATE || !OCATIN_TYPE){
    //   errors.push({
    //     msg: "please enter all feilds"
    //   });
    // }

    // for(var i = 0;i < CUSTOMER_NAME.length; i++){
    //   if((CUSTOMER_NAME[i] < 'A' && CUSTOMER_NAME[i] >'Z') || (CUSTOMER_NAME[i] < 'a' && CUSTOMER_NAME[i] > 'z')){
    //     errors.push({
    //       msg: "Please enter your name in letters only"
    //     });
    //   }
    // }

    // var i;
    // for( i = 0;i < ID_NUMBER.length; i++);
    // if(i != 8){
    //   errors.push({
    //     msg: "Please the number of ID digits must be 9"
    //   });
    // }
    
    // for( i = 0;i < MOBILE_NUMBER.length; i++);
    // if(i != 9){
    //   errors.push({
    //     msg: "Please the number of ID digits must be 10"
    //   });
    // }

    // if (errors.length > 0) {
    //   res.render("dashboard", { errors });
    // }

    // else{
    //     test.findOne({
    //         where: {
    //             ID_NUMBER: ID_NUMBER
    //         }
    //     })
    //     .then(test => {
    //         if (test) {
    //           errors.push({
    //             msg: "ID NUMBER was already used"
    //           });
    //         res.render("dashboard", { errors });
    //     } else {
    //         //create user
    //         const Test = new test({
    //           First_name:req.body.CUSTOMER_NAME,
    //           ID_NUMBER,
    //           MOBILE_NUMBER,
    //           BOOKING_DATE,
    //           OCATIN_TYPE
    //         })
    //         Test.save()
    //         res.redirect('/dashboard');
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });   
    // }
  });

module.exports = router;