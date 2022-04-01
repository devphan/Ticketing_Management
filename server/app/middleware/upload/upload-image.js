const multer = require('multer');
const mkdirp = require('mkdirp');

module.exports = (type) => {
    const directory = mkdirp.sync(`./public/images/${type}`);
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, `./public/images/${type}`);
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + '-' + file.originalname);
        },
    });

    const upload = multer({
        storage: storage,
        fileFilter: function (req, file, cb) {
            cb(null, true);
            const extensionImgList = ['.png', '.jpg'];
            const extensionFile = file.originalname.slice(-4);
            const check = extensionImgList.includes(extensionFile);
            if (check) cb(null, true)
            else cb(new Error('Extension image invalid'));
        }
    });

    return upload.single(type);

}





