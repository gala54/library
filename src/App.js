import React, {Component} from 'react';
import { Routes, Route } from 'react-router-dom';
import Card from './Card'
import View from './View'
import Navbar from './Navbar'
import About from './About'
import list from './list.json'

class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        cards: [],
        pages: [],
      }
    }
  
    async componentDidMount() {
      const url = "https://raw.githubusercontent.com/spooky-walrus/cp-templates/master"
      // const response = await fetch(url + "/list.json");
      // const list = await response.json();

      // console.log(url);
      // console.log(list);

      console.log(list);

      this.setState({
        cards: list.map(file =>
          <Card key={file.name} name={file.name} title={file.title} tags={file.tags}/>
        )
      })

      list.forEach(async(file) => {
        const response1 = await fetch(url + '/templates/' + file.name);
        const response2 = await fetch(url + '/docs/' + file.name);
        const code = await response1.text();
        const usage = await response2.text();
        this.setState({
          pages: [...this.state.pages,
            <Route 
              key={file.name}
              path={file.name}
              element={
                <View name={file.name} title={file.title} code={code} usage={usage}/>
              }
            />
          ]
        })
      })
    }

    searchChange = term => {
      this.setState({
        cards: list.filter(file => {
          if (term == "") {
            return file
          } else if (file.title.toLowerCase().includes(term.toLowerCase())) {
            return file
          }
        }).map(file =>
          <Card key={file.name} name={file.name} title={file.title} tags={file.tags}/>
        )
      })
    }
  
    render() {
      return (
        <div>
          <Navbar onSearchChange={this.searchChange}/>
          <Routes>
            <Route path="/" element={
              <div className="container-fluid" id="card-grid">
                <div className="row row-cols-auto justify-content-center g-3">
                  {this.state.cards}
                </div>
              </div>
            } />
            <Route path="/about" element={
              <About />
            } />
            {this.state.pages}
          </Routes>
        </div>
      )
    }
  }

  export default App