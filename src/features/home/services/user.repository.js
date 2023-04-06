import api from "../../../shared/services/api";

let userRepository =
{
    getUsers: function() {
        return api.get("user").then((response) => response.data);
    },
    addUser: (user)=>{
        console.log(user)
        return api.post("user",{...user})
        .then((response) => response.data);
    }
}

export default userRepository;
