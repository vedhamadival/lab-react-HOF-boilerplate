import React, { Component } from 'react'

class HigherOrderComponent extends Component {

    constructor(){
        super();
        this.state = {
            userData:[
                {
                id : '1',
                name : 'Joe',
                user_type : 'Developer',
                age:31,
                years: 11
            },
                { 
                id: '2', 
                name: 'Hill',
                user_type: 'Designer', 
                age:26,
                years:4 
            },
                {
                id: '3', 
                name: 'John', 
                user_type: 'Teacher', 
                age:24,
                years: 2
            },
                { 
                id: '4', 
                name: 'Sam', 
                user_type: 'Entreprenuer', 
                age:58,
                years:25
            },
                { 
                id: '5', 
                name: 'Jack', 
                user_type: 'Designer', 
                age:43, 
                years: 18
            }]
        }
    }

  render() {
    const data = this.state.userData.filter((userData) => (userData.name.startsWith('J')))
    return (
      <div className='App'>
        <div>Display Names starting with Letter J</div>
        <ul>
            {data.map((el) => (
                <li key={el.id}>
                <span> ID: {el.id}</span>
                <span>Name: {el.name}</span>
                <span>UserType: {el.user_type}</span>
                </li>
            ))}
        </ul>
      </div>
    )
  }
}

export default HigherOrderComponent
