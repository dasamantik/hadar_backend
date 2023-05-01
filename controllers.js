import Project from "./models/project.js";
import Question from "./models/question.js";
import newsSub from "./models/newsSub.js";



const re = new RegExp (/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/)
const createProject = async (body,res) => {
  try {
    const phoneNumber = body.phoneNumber;
    if (re.test(phoneNumber) == true){
    const doc = new Project({
      telegram: body.telegram,
      name: body.name,
      projectStatus: body.projectStatus,
      phoneNumber: body.phoneNumber
    });
    const project = await doc.save();
    // res.json(project);
    res.writeHead(200,{'Content-Type': 'text/html'})
  }
  else{
    res.json({
      message: "Не вірний номер",
    });
  }
  } catch (err) {
    console.log(err);   
  }

};

const createQuestion = async (body,res) => {
  try {
    const phoneNumber = body.phoneNumber;
    if(re.test(phoneNumber) == true){
     const doc = new Question({
      telegram: body.telegram,
      name: body.name,
      question: body.question,
      phoneNumber: body.phoneNumber
     });
     const question = await doc.save();
    //  res.json(question);
    res.writeHead(200,{'Content-Type': 'text/html'})
    }else{
      res.json({
        message: "Не вірний номер",
      });
    }
  } catch (err) {
    console.log(err);
    
  }
};

const createNewsSub = async (body,res) =>{
  try {
    const doc = new newsSub({
      telegram: body.telegram,
    });
    const sub = await doc.save();
    // res.json(sub);
    res.writeHead(200,{'Content-Type': 'text/html'})
  } catch (err) {
    console.log(err);
    
  }
};

export const createSwitcher = async (req,res,next) => {
  const {body} = req;
  const {type} = body;
  
  switch (type) {
    case "project": {
      await createProject(body,res);
      break;
    }
    case "question": {
      await createQuestion(body,res);
      break;
    }
    case  "subscribe":{
      await createNewsSub(body,res);
      break;
    }
    default: {
      throw new Error("bad type");
    }
  }
};
