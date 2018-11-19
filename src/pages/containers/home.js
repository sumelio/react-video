import React, { Component } from 'react'
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/categories'
import data from '../../data/api.json'
import Related from '../components/related'

class Home extends Component {
    render() {
        console.log(data.categories)
        return (
          <HomeLayout> 
              <Related/>
              <Categories categories={data.categories}/>
          </HomeLayout>
        )
    }
}

export default Home