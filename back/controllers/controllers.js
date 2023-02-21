import Service from "../models/ServicesModel.js";
import User from "../models/UserModel.js";
import mongoose from "mongoose";

export async function getAllMemberships(req, res) {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function createNewMembership(req, res) {
  try {
    const { name, price, description } = req.body;
    const service = {
      name,
      price,
      description,
    };
    const serviceSaved = await Service.create(service);

    res.json(serviceSaved);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteMember(req, res) {
  try {
    const { id } = req.params;
    const responseDB = await Service.findByIdAndDelete(id);

    res.json(responseDB);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getUserOrders(req, res) {
  try {
    const serviceId = req.query.service_id;
    const typeArr = req.params.id;

    const users = await User.find({
      services: { $in: [serviceId] },
      type: { $in: typeArr },
    }).sort({
      name: typeArr,
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function createUser(req, res) {
  try {
    const { name, surname, email, service_id } = req.body;
    console.log(req.body);
    const user = {
      name,
      surname,
      email,
      service_id,
    };
    console.log(user);
    const createdUser = await User.create(user);

    res.json(createdUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
