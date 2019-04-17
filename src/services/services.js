import {db,firebaseApp} from './config';



export const regitserUser = (userInfo)=>{
    // db.ref('/users').push(userInfo,(err)=>{
    //     console.log(err);
    // });
    firebaseApp.createUserWithEmailAndPassword(userInfo.email,userInfo.password)
    .catch((err)=>{
             var errorCode=err.code;
             var errorMessage=err.message;
    })
};
export const loginUser=(userInfo)=>{
    return firebaseApp.signInWithEmailAndPassword(userInfo.email,userInfo.password);

  
}