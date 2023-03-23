import Employee from "../models/Employee.js";
import User from "../models/User.js";

const Mutation = {

    async createEmployee( _ , { name,age,position,code} ) {
        const newEmployee = { name, age, position, code };
        const employee = await Employee.create( newEmployee ); //returns { }
        return await Employee.find()
    },
    async updateEmployee( _, { _id, name, age, position, code } ) {
        //const employee = { name, age, position, code };
        return await Employee.findByIdAndUpdate(_id, { name, age, position, code }, {new: true})
    },
    async deleteEmployee(_, {_id}){
        await Employee.findByIdAndDelete( _id );
        return await Employee.find();

    },
    async createUser( _, { email, password } ) {
        const newUser = { email, password };
        const user = await User.create( newUser );
        return await User.find();
    },
}

export default Mutation;