import { doc, getDoc, getFirestore, setDoc,collection, getDocs,query }  from "firebase/firestore"; 
import { appFire } from "../../../firebase";
const db = getFirestore(appFire);
// Add a new document in collection "cities"

export const createAnswers = async (idFiles:string,data:any)=>{
    await setDoc(doc(db, "respostas", idFiles), data);

    return{
        code:200,
        message:'resposta cadastrada com sucesso'
    };
}
export const listAnswers = async ()=>{
    const resultArr = [] as any;
    try {
        const q = query(collection(db, "respostas"));

        const querySnapshot = await getDocs(q);
        const result = querySnapshot.forEach((doc) => {
           
         const data =  (doc.id, " => ", doc.data()); 
         resultArr.push(data)
        }); 
        return (resultArr) 


        
        
    } catch (error) {
    return(error) 
        
    }
   
}
