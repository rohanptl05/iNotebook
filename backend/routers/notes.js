import express from 'express';
import fetchuser from '../middleware/fetchuser.js';  // Correct the middleware name
import Notes from '../models/Notes.js';
import { body, validationResult } from 'express-validator';

const router = express.Router();

// ROUTE 1: Get All the Notes using: GET "/api/notes/fetchallnotes". Login required
router.get('/fetchnotes', fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });  // Correct from 'users' to 'user'
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});

// ROUTE 2: Add a new Note using: POST "/api/notes/addnote". Login required
router.post(
  '/addnote',
  fetchuser,
  [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('desc', 'Description must be at least 5 characters').isLength({ min: 5 })
  ],
  async (req, res) => {
    try {
      const { title, desc, tag } = req.body;

      // If there are errors, return Bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // Ensure that 'description' maps to the correct field in your schema ('desc')
      const note = new Notes({
        user: req.user.id,
        title,
        desc: desc,  // Mapping 'description' from req.body to 'desc' in schema
        tag
      });

      const savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Internal Server Error');
    }
  }
);


// ROUTE 3: updating and existing  Note using: PuT "/api/notes/updatenote". Login required

router.put('/updatenote/:id',fetchuser,async (req,res)=>{
  const {title,desc,tag}= req.body;

  try {
     //create a newNote object 
  const newNote={};
  if(title){newNote.title = title};
  if(desc){newNote.desc = desc};
  if(tag){newNote.tag = tag};

  let note= await Notes.findById(req.params.id);
  if(!note){return res.status(404).send("Not Found")};

  if(note.user.toString() != req.user.id){
    return res.status(401).send("Not Allowed");
  }

  note = await Notes.findByIdAndUpdate(req.params.id,{$set: newNote},{new:true})
  res.json({note})
    
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }

})
// ROUTE 4: delete and existing  Note using: PuT "/api/notes/deletenote". Login required
router.delete('/deletenote/:id',fetchuser,async (req,res) =>{
 const {title,desc,tag} =req.body;

 try {
  
 
 //find a note to be delete and delete it 
 let note = await Notes.findById(req.params.id);
 if(!note){
  return res.status(404).send("Not Found");
 }
 if(note.user.toString() != req.user.id){
  return req.status(401).send("Not Allowed");
 }

 note = await Notes.findByIdAndDelete(req.params.id)
 res.json({"Success": "NOte has been Deleted",note :note})

} catch (error) {
  console.error(error.message);
  res.status(500).send('Internal Server Error');
}

})



export default router;
