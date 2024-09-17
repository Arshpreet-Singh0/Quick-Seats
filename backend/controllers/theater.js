import Theater from "../models/theater.schema.js"; 

export const createTheater = async (req, res) => {
  const { theaterName, location, audis } = req.body;
  const created_by = req.id;

  if (!theaterName || !location || !audis || audis.length === 0) {
    return res.status(400).json({
      success: false,
      message: "Missing required fields.",
    });
  }

  try {
    const newTheater = new Theater({
      theaterName,
      created_by,
      location,
      audis,
    });

    const savedTheater = await newTheater.save();

    res.status(201).json({
      success: true,
      message: "Theater created successfully!",
      data: savedTheater,
    });
  } catch (error) {
    console.error("Error creating the theater:", error);
    res.status(500).json({
      success: false,
      message:
        "Failed to create the theater",
    });
  }
};

export const updateTheater = async (req, res) => {
    const {theaterName, location, audis } = req.body;
    const {id} = req.params;
    const user = req.id;
    
    try {
      
        const theater = await Theater.findOne({_id : id,user});

        if(!theater){
            return res.status(400).json({
                message : 'Theater not exist or not belong to you',
                success : false,
            })
        }

        if(theaterName) theater.theaterName = theaterName;
        if(location) theater.location = location;
        if(audis && audis.length>0) theater.audis=audis;

        const th = await theater.save();
  
      res.status(201).json({
        success: true,
        message: "Theater created successfully!",
        theater,
      });
    } catch (error) {
      console.error("Error creating the theater:", error);
      res.status(500).json({
        success: false,
        message:
          "Failed to create the theater. Please check the server logs for more information.",
      });
    }
  };

export const getTheaters = async(req, res)=>{
  try {
    const id = req.id;
    

    const theaters = await Theater.find({created_by:id});

    if (!theaters || theaters.length === 0) {
      return res.status(404).json({
        message: 'No theaters found for this user',
        success: false,
      });
    }

    return res.status(200).json({
      theaters,
      success : true,
    })
    
  } catch (error) {
    console.log(error);
    
  }
}