import { Auditorium } from '../models/theater.schema.js';

export const createAudi = async (req, res) => {
  try {
    const { name, theater, seats } = req.body;
    if (!name || !seats || seats.length === 0) {
      return res.status(400).json({
        message: "Auditorium name and seat details are required",
        success: false,
      });
    }

    const newAuditorium = new Auditorium({
      name,
      theater,
      seats,
    });
    await newAuditorium.save();

    return res.status(201).json({
      message: "Auditorium created successfully",
      success: true,
      auditorium: newAuditorium,
    });
  } catch (error) {
    console.error("Error creating auditorium:", error);
    return res.status(500).json({
      message: "Server error while creating auditorium",
      success: false,
    });
  }
};
export const getAudis = async (req, res) => {
  try {
    const {theater} = req.body;
    const auditoriums = await Auditorium.find({theater});

    if (!auditoriums || auditoriums.length === 0) {
      return res.status(404).json({
        message: "No auditoriums found",
        success: false,
      });
    }
    return res.status(200).json({
      success: true,
      auditoriums,
    });
  } catch (error) {
    console.error("Error fetching auditoriums:", error);
    return res.status(500).json({
      message: "Server error while fetching auditoriums",
      success: false,
    });
  }
};

export const getAudiById = async (req, res) => {
  try {
    const { id } = req.params;
    const auditorium = await Auditorium.findById(id);

    if (!auditorium) {
      return res.status(404).json({
        message: "Auditorium not found",
        success: false,
      });
    }

    return res.status(200).json({
      success: true,
      auditorium,
    });
  } catch (error) {
    console.error("Error fetching auditorium by ID:", error);
    return res.status(500).json({
      message: "Server error while fetching auditorium",
      success: false,
    });
  }
};

export const deleteAudi = async (req, res) => {
  try {
    const { id } = req.params;
    const created_by = req.id;

    const deletedAuditorium = await Auditorium.findByIdAndDelete(id);

    if (!deletedAuditorium) {
      return res.status(404).json({
        message: "Auditorium not found",
        success: false,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Auditorium deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting auditorium:", error);
    return res.status(500).json({
      message: "Server error while deleting auditorium",
      success: false,
    });
  }
};