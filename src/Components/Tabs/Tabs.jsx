import React from 'react'
import Classes from './Tabs.module.css'

class Tabs extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            ativeTab: 0,
            titles: [
                {
                    title: 'Вкладка 0',
                    content: 'Content 0'
                },
                {
                    title: 'Вкладка 1',
                    content: 'Content 1'

                },
                {
                    title: 'Вкладка 2',
                    content: 'Content 2'
                }
            ]
        }

        this.handlerClick = this.handlerClick.bind(this)
    }
    

    handlerClick(event) {
        this.setState({ativeTab: parseInt(event.target.dataset.id)});
    }
    

    render() {
        return <div>
            <div className={Classes.mt_6}>
                {
                    this.state.titles.map((item, index) => {
                        
                        let weight = {fontWeight: '300'}
                        if (this.state.ativeTab === index) {
                            weight = {fontWeight: '800'}
                        }
                        
                        return <span 
                            data-id={index}
                            style={weight} 
                            className={Classes.tab} 
                            key={index}
                            onClick={this.handlerClick}
                        >
                            {item.title}
                        </span>
                    })
                }
            </div>
            <div>
                {
                    this.state.titles.map((item, index) => {
                        return <div 
                            style={ (this.state.ativeTab === index) ? {display: 'block'} : {display: 'none'} } 
                            className={Classes.content} 
                            key={index}
                        >
                            {item.content}
                        </div>
                    })
                }
            </div>
        </div>
    }
}

export default Tabs
