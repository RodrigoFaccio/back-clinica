import { doc, getDoc, getFirestore, setDoc,collection, getDocs,query }  from "firebase/firestore"; 
import { appFire } from "../../../firebase";
import { prisma } from "../../prismaClient";
const db = getFirestore(appFire);
// Add a new document in collection "cities"

export const createAnswers = async (userId:number,patientId:number,data:any)=>{
    const createAnswers =  await prisma.totalFiles.create({
        data:{
            userId,
            patientId
        }
    })

     await setDoc(doc(db, "respostas", String(createAnswers.id)), data);

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
export const listAnswersById = async (filesId:string)=>{
    console.log(filesId)
    try {
        const ref = doc(db, "respostas", filesId)
        const docSnap = await getDoc(ref);
        if (docSnap.exists()) {
          // Convert to City object
          const city = docSnap.data();

          // Use a City instance method
          return city;
        } else {
          console.log("No such document!");
        }
        
    } catch (error) {
    return(error) 
        
    }
   
}
export const listFilesAll = async ()=>{
    const filesResponse =  await prisma.totalFiles.findMany()


    return{
        code:200,
       data:filesResponse
    };
}
export const listPatientById = async (patientId:number)=>{
    const filesResponse =  await prisma.totalFiles.findMany({
        where:{
            patientId,
            
        },
        include:{
            patient:true,
            user:true
        }
    })


    return{
        code:200,
       data:filesResponse
    };
}

