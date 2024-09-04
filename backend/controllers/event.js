import { EventModel } from "../models/event.model.js";

export const createEvent = async(req, res)=>{
    try {
        const {
          name,
          description,
          type,
          venue,
          date,
          time,
          ticketPrice,
          ticketsAvailable,
          seatMap,
          category,
          additionalDetails
        } = req.body;
    
        if (!name || !category || !description || !type || !venue || !date || !time || !ticketPrice || !ticketsAvailable) {
          return res.status(400).json({ message: 'All required fields must be provided.',
            success : false,
           });
        }

        
    
        const newEvent = await EventModel.create({
          name,
          description,
          type,
          venue,
          date,
          time,
          ticketPrice,
          ticketsAvailable,
          seatMap,
          category,
          additionalDetails,
          createdBy : req.id,
        });
    
        const savedEvent = await newEvent.save();
    
        res.status(201).json({
          message: 'Event created successfully',
          event: savedEvent,
          success : true,
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({
          message: 'Server error, could not create event',
          success : false,
        });
      }
}

export const getEvents = async(req, res)=>{
    try {
        const {type} = req.query;

        if(!type){
            return res.status(400).json({
                message : "Specify the type",
                success : false,
            })
        }

        const events = await EventModel.find({type});

        return res.status(200).json({
            events,
            success : true,
        })
        
    } catch (error) {
        console.log(error);
        
    }
}

export const getEventById = async(req, res)=>{
    try {
        const {id} = req.params;

        const event = await EventModel.findById(id);

        res.status(200).json({
            event,
            success : true,
        })
    } catch (error) {
        
    }
}

export const update = async(req, res)=>{
    try {
        const {id} = req.params;
    
        const event = await EventModel.findById(id);
    
        const {name, time, ticketPrice, description, ticketsAvailable, date} = req.body;
    
        if(name) event.name = name;
        if(time) event.time = time;
        if(ticketPrice) event.ticketPrice = ticketPrice;
        if(description) event.description = description;
        if(ticketsAvailable) event.ticketsAvailable = ticketsAvailable;
        if(date) event.date = date;
    
        await event.save();

        return res.status(201).json({
            event,
            message : "Event updated Successfully",
            success : true,
        })
        
    } catch (error) {
        console.log(error);
        
    }

}

export const deleteEvent = async(req, res)=>{
    try {
        
        const {id} = req.params;

        const event = await EventModel.findById(id);

        if (!event) {
            return res.status(404).json({
              message: 'Event not found',
              success: false,
            });
          }

        if(event.createdBy != req.id){
            return res.status(403).json({
                message : "You are not authorized to delete this event",
                success : false,
            })
        }
    
        await EventModel.findByIdAndDelete(id);

        return res.status(200).json({
            message : "Event deleted successfully",
            success : true,
        })
    } catch (error) {
        console.log(error);
        
    }


}