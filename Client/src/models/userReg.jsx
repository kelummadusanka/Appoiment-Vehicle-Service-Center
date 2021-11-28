import React, { Component } from 'react'
import axios from 'axios'

export class userReg extends Component {

    constructor(){
        super()
        this.state = {
            firstname:'',
            lastname:'',
            address1:'',
            city:'',
            username:'',
            email:'',
            password:''
        }
        
        this.changeFirstName = this.changeFirstName.bind(this)
        this.changeLastName = this.changeLastName.bind(this)
        this.changeAddress1 = this.changeAddress1.bind(this)
        this.changeCity = this.changeCity.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
}
changeFirstName(event){
    userReg.this.setState({
    firstname:event.target.value})
    }
    changeLastName(event){
        userReg.this.setState({
        lastname:event.target.value})
        }

    changeAddress1(event){
        this.setState({
        address1:event.target.value})
        }
        
    changeCity(event){
    userReg.this.setState({
    city:event.target.value})
        }

    changeUsername(event){
    userReg.this.setState({
    username:event.target.value})
    }

    changeEmail(event){
    userReg.this.setState({
    email:event.target.value})
    }

    changePassword(event){
    userReg.this.setState({
    password:event.target.value})
    }

    onSubmit(event){
    event.preventDefault()
    const registered = {
    firstname:this.state.firstname,
    lastname:this.state.lastname,
    address1:this.state.address1,
    city:this.state.city,
    username:this.state.username,
    email:this.state.email,
    password:this.state.password
    
    }

        axios.post('http://localhost:4000/app/signup',registered)
        .then(response => console.log(response.data))

        window.location ='/Myaccount'

        userReg.this.setState({

                firstname:'',
                lastname:'',
                username:'',
                address1:'',
                city:'',
                email:'',
                password:''
        })
    }
}

export default userReg
