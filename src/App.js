// import React, { Component } from 'react'
// import Search from './Search'
// // import Pract from './Pract'
// // import Pract2 from './Prac2'
// // import Pract3 from './Pract3'
// // import Pract4 from './Pract4'
// // import Hooks from './Hooks'
// // import Search2 from './Search2'
// // import Task from './Task'
// // import Pract4 from './Pract4'
// // import Card from './PropsUse'
// // import Hooks2 from './Hooks2'
// // import Props from './Props'
// // import Pract5 from './Pract5'

// export default class App extends Component {
//   render () {
//     return (
//       <div>
//         <Search/>
//         {/* <Pract name={"shahid"}/> 



// */}

//         {/* <Hooks/> */}
//         {/* <Task/> */}
//         {/* <Search2/> */}

//         {/* <Props heading='My paper' desc='hope to be easy' /> */}

//         {/* 
//         <Hooks2/> */}
//         {/* <Pract5/> */}
//       </div>
//     )
//   }
// }


import React, { Component } from 'react'
import Search from './components/Search'
import FunctionalCounterApp from './components/FunctionalCounterApp'
import UseEffect from './components/UseEffect'
import ClassComponentCounterApp from './ClassComponentCounterApp'

export default class App extends Component {
  render() {
    return (
      <div>
        <Search/>
        <FunctionalCounterApp/>
        <UseEffect/>
        <ClassComponentCounterApp/>
        


      </div>
    )
  }
}
