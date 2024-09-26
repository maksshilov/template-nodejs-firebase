import firebase from "../firebase.js";
import { getFirestore, collection, doc, addDoc, getDoc, getDocs, updateDoc, deleteDoc } from "firebase/firestore";

const db = getFirestore(firebase);

export const getProducts = async (req, res, next) => {
  console.log("getProducts");
  try {
    const products = await getDocs(collection(db, "checklist"));
    console.log("products >>", products);
    const productArray = [];

    if (products.empty) {
      res.status(400).send("No Products found");
    } else {
      products.forEach((doc) => {
        const product = new Product(doc.id, doc.data().name, doc.data().price, doc.data().retailer, doc.data().amountInStock);
        productArray.push(product);
      });

      res.status(200).send(productArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const createCheckList = async (req, res, next) => {
  console.log("createCheckList");
  try {
    const data = req.body;
    console.log("data >>", data);
    await addDoc(collection(db, "checkList"), data);
    res.status(200).send("checkList created successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
