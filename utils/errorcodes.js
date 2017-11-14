module.exports = Object.freeze({
    bodyParse: {error:"That's a really bad request!(Json Formatting Error)"},
    jwtmissing: {error:"JWT Missing!"},
    jwtbad: {error:"Bad JWT!"},
    jwtnotverified: {error:"Authentication failed"},
    e501: {error:'Something Went Wrong!'},
    e400: {error:'Bad Request!'},
    e401: {error:'Unauthorized!'},
    e404: {error:'Page Not Found!'},
    otploginfail : {error:"Verification Error!"},
  login:{
        emailexist:"Email ID is already registered with us !",
        mobilexist:"Mobile number is already registered with us!",
        notactive:"Account is deactivated",
        wrongcredential:"Incorrect username or password."
    }
});
