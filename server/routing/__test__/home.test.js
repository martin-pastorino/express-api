const { getHomeRoot, postHomeRoot, putHomeRoot, allHomeRoot } = require('../home/handlers');

describe('home callbacks', () => { 

    test('should return a status 200 and a msg with the value: "Get Method Invoked"', () => { 
        const req = {};
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis()
        };
        getHomeRoot(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({msg:"Get method invoked"});
     });

   test('should return a status 200 and a msg with the value: "Get Method Invoked"', () => { 
        const req = {};
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis()
        };
        postHomeRoot(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({msg:"Post method invoked"});
     });

     test('should return a status 200 and a msg with the value: "Get Method Invoked"', () => { 
        const req = {};
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis()
        };
        putHomeRoot(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({msg:"Put method invoked"});
     });

     test('should return a status 405 and a msg with the value: "Get Method Invoked"', () => { 
        const req = {};
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis()
        };
        allHomeRoot(req, res);
        expect(res.status).toHaveBeenCalledWith(405);
        expect(res.json).toHaveBeenCalledWith({msg:"Method invoked not allowed"});
     });
     

 })