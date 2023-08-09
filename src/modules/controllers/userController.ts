import { Request, Response } from "express";
import usermodel from "../models/userModel";

const addUser = async (req: Request, res: Response) => {
  try {
    const formerror: any = {};
    if (req.body.first_name === undefined) {
      formerror.first_name = "First_name is required";
    }
    if (req.body.last_name === undefined) {
      formerror.last_name = "Last_name is required";
    }
    if (req.body.email === undefined) {
      formerror.email = "Email is required";
    }
    if (req.body.contactNo === undefined) {
      formerror.contactNo = "Contact is required";
    }
    if (Object.keys(formerror).length !== 0) {
      return res.send(formerror);
    }

    const getData = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      contactNo: req.body.contactNo,
      profile_img: req.file?.filename,
    };

    const user = new usermodel(getData);
    await user.save();
    res.send(user);
  } catch (error) {
    res.send(error);
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const users = await usermodel.findById(req.params.id);
    if (req.body.first_name) {
      users!.first_name = req.body.first_name;
    }
    if (req.body.last_name) {
      users!.last_name = req.body.last_name;
    }
    if (req.body.email) {
      users!.email = req.body.email;
    }
    if (req.body.contactNo) {
      users!.contactNo = req.body.contactNo;
    }
    if(req.file?.filename) {
        users!.profile_img = req.file?.filename
    }

    await users!.save();
    res.send(users);
  } catch (error) {
    return res.status(500).json("Something went wrong");
  }
};

const readAllUser = async (req: Request, res: Response) => {
  try {
    const users = await usermodel.find();
    if (!users) {
      return res.send("Something went wrong");
    }
    res.send(users);
  } catch (error) {
    res.status(500).json("Something went wrong");
  }
};

const readUserById = async (req: Request, res: Response) => {
  try {
    const users = await usermodel.findById(req.params.id);
    if (!users) {
      return res.send("Something went wrong");
    }
    res.send(users);
  } catch (error) {
    res.send(error);
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const users = await usermodel.findById(req.params.id);
    if (!users) {
      return res.send("Id not found");
    }

    const deleteuser = await users.deleteOne();
    res.send(`${users} is deleted successfully`);
  } catch (error) {
    res.send(error);
  }
};

export { addUser, updateUser, readAllUser, readUserById, deleteUser };
