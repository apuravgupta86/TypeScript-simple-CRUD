// import { Request } from "express";
// import multer from "multer";



// const upload = multer({
//   storage: multer.diskStorage({
//     destination: "public/imgfolder",
// }),
// fileFilter(req:Request, file, cb) {
//     if (!file.originalname.match(/\.(jpg|joeg|png|svg)$/)) {
//         return cb(new Error('Please upload Jpg, Jpeg and Png file!'));
//     }
//     cb(null, true)
// },
// });


// export default upload



import multer from "multer";


const storage = multer.diskStorage({
    destination: './public/banks',
    filename: function (req, file, cb) {
        const uniquShuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const getFileName = file.originalname.toLowerCase().replace(/ /g, '-');

        cb(null, file.fieldname + '-' + uniquShuffix + '-' + getFileName);
    }
});

const upload = multer({
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png|pdf|svg)$/)) {
            return cb(new Error('Please upload Jpg, Jpeg, Png, Pdf or SVG file.'));
        }
        cb(null, true);
    },
    storage
});


export default upload;