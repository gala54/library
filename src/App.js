import React, {Component} from 'react';
import { Routes, Route } from 'react-router-dom';
import Card from './Card'
import View from './View'
import Navbar from './Navbar'
import About from './About'
import Fuse from 'fuse.js'
// import list from './list.json'

class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        list: [],
        cards: [],
        pages: [],
        hehe: ""
      }
    }
  
    async componentDidMount() {
      document.title = "CP Library"

      const url = "https://raw.githubusercontent.com/spooky-walrus/cp-templates/master"
      const response = await fetch(url + "/list.json");
      const data = await response.json();
      this.setState({
        list: data
      })
      
      this.setState({
        cards: this.state.list.map(file =>
          <Card key={file.name} name={file.name} title={file.title} tags={file.tags}/>
        )
      })

      this.state.list.forEach(async(file) => {
        const code_promise = await fetch(url + '/templates/' + file.name + '.hpp');
        const example_promise = await fetch(url + '/examples/' + file.name + '.cpp');
        const doc_promise = await fetch(url + '/docs/' + file.name + '.md');
        const code = await code_promise.text();
        const example = await example_promise.text();
        const doc = await doc_promise.text();
        this.setState({
          pages: [...this.state.pages,
            <Route 
              key={file.name}
              path={file.name}
              element={
                <View name={file.name} title={file.title} code={code} example={example} doc={doc}/>
              }
            />
          ]
        })
      })
    }

    searchChange = term => {
      if (term === "") {
        this.setState({
          cards: this.state.list.map(file => 
            <Card key={file.name} name={file.name} title={file.title} tags={file.tags}/>
          )
        })
      } else {
        const options = {
          shouldSort: false,
          includeScore: true,
          threshold: 0.4,
          keys: ['title', 'tags']
        }
        const fuse = new Fuse(this.state.list, options);
        const result = fuse.search(term);
        this.setState({
          cards: result.map(x => 
            <Card key={x.item.name} name={x.item.name} title={x.item.title} tags={x.item.tags}/>
          )
        })
      }
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