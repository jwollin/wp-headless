import React, { Component } from 'react';
class App extends Component {
    constructor() {
        super();
        this.state = {
            pets: []
        }
    }
    componentDidMount() {
        let dataURL = "http://localhost/lynda-rest/index.php/wp-json/wp/v2/pets?_embed";
        fetch(dataURL)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    pets: res
                })
            })
    }
    render() {
        let pets = this.state.pets.map((pet, index) => {
            return <div className="pet" key={index}>
                <div className="featured-img">
                    <img alt={pet.title.render} src={pet._embedded['wp:featuredmedia'][0].source_url } />
                    <div className="tooltip">Hover over me
                        <span className="tooltiptext">Tooltip text</span>
                    </div>
                </div>
                <div className="post-content">
                    <h2><strong>Title:</strong> {pet.title.rendered}</h2>
                    <div><strong>Description:</strong><div dangerouslySetInnerHTML={ { __html: pet.content.rendered } } /></div>
                </div>
            </div>
        });
        return (
            <div>
                <h1>Pets and stuff</h1>
                {pets}
            </div>
        )
    }
}
export default App;
