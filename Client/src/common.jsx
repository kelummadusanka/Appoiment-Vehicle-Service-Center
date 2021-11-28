export const getUser=()=>{
    const userStr= sessionStorage.getItem("user")
    if(userStr) return JSON.parse(userStr);
    else return null;

}


export const setuserSession=(user)=>{
    sessionStorage.setItem("user",JSON.stringify(user))
}

export const removeUserSession = ()=>{
    sessionStorage.removeItem("user")
}

export const setMyvehicles = (myVehicle)=>{
    sessionStorage.setItem("myVehicle",JSON.stringify(myVehicle))
}

export const getMyvehicles=()=>{
    const vehicleStr= sessionStorage.getItem("myVehicle")
    if(vehicleStr) return JSON.parse(vehicleStr);
    else return null;

}