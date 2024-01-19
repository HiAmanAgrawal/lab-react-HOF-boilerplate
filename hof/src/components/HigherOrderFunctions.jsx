import React from 'react'

export class HigherOrderFunctions extends React.Component {
    constructor(){
        super()
        this.state = {
            userData : [
                { id: '1', name: 'Joe', user_type: 'Developer', age: 31, years: 11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age: 26, years: 4 },
                { id: '3', name: 'John', user_type: 'Teacher', age: 24, years: 2 },
                { id: '4', name: 'Sam', user_type: 'Entrepreneur', age: 58, years: 25 },
                { id: '5', name: 'Jack', user_type: 'Designer', age: 43, years: 18 }
            ]
        }
    }
    
    
    renderlist = (userData) => {
        const data = userData.map((item) => (
            <React.Fragment key={item.id}>
                <li>
                  <span>ID: {item.id}&nbsp;</span><span>Name: {item.name}&nbsp;</span><span>User type: {item.user_type}&nbsp;</span>
                </li>
            </React.Fragment>
        ))
        return (
          data
        )
    }

    filterList = () =>{
      const data = this.state.userData.filter((item) => item.user_type=='Designer')
      return this.renderlist(data);
    }

    filterName = () => { 
      const data = this.state.userData.filter((item) => item.name[0]=='J')
      return this.renderlist(data);
    }
    filterAge = () => {
      const data = this.state.userData.filter((item) => item.age>28 && item.age<=50);
      return this.renderlist(data);
    }
    totalExp = () => {
      const data = this.state.userData.filter((item) => item.user_type=='Designer')
      let sum = 0 ;
      data.map((item)=>  sum = sum + item.years)
      return sum;
    }
  render() {
    return (
      <div>
        <h1>Display all items: </h1>
        <div className='displayBox Box'>
          <ul>
            {this.renderlist(this.state.userData)}
          </ul>
        </div>
        <h1>Display based on user type</h1>
        <div className='userTypeBox Box'>
          <ul>
            {this.filterList()}
          </ul>
        </div>
        <h1>Filter all data starting with J</h1>
        <div className='nameStartBox Box'>
          <ul>
            {this.filterName()}
          </ul>
        </div>
        <h1>Filter all data based on age greater than 28 and age less than or equal to 50</h1>
        <div className='ageFilterBox Box'>
          <ul>
            {this.filterAge()}
          </ul>
        </div>
        <h1>Find the total years of experience does designers have</h1>
        <div className='totalExperience Box'>
          <ul>
            {this.totalExp()}
          </ul>
        </div>
      </div>
    )
  }
}

export default HigherOrderFunctions
