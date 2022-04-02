
module.exports = (req, res, next) => {
    const { payload } = req;
    if (payload.type !== 'admin')
        return next({
            status: 403,
            error: 1,
            message: 'Forbidden',
            data: null
        });
    next();
}
